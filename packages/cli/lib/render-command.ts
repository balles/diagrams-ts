import commander, { Command } from "commander";
import { exec } from "child_process";
import { promisify } from "util";
import { promises } from "fs";
import path from "path";
import rimraf from "rimraf";

const { mkdir, copyFile, writeFile } = promises;

const execAsync = promisify(exec);
const rimrafAsync = promisify(rimraf);

const runTsNodeForFile = async (file: string): Promise<void> => {
  const { stdout, stderr } = await execAsync(`ts-node ${file}`);

  if (stdout?.length > 0) {
    console.error("ts-node:", stdout);
  }

  if (stderr?.length > 0) {
    console.error("stderr:ts-node", stderr);
  }
};

type GetRenderFileContentArgs = {
  inputFile: string;
  direction: string;
};

const getRenderFileContent = ({
  inputFile,
  direction,
}: GetRenderFileContentArgs) => {
  const fileName = path.basename(inputFile, path.extname(inputFile));
  return `
  import { createDiagram } from "diagrams-ts";
  import diagramToRender from "./${fileName}"
  
  (async () => {
    try {
      await createDiagram({
        label: "${fileName}",
        filename: "${fileName}.png",
        direction: "${direction}",
      })(diagramToRender());
    } catch (error) {
      console.log(error);
    }
  })();
  `;
};

type createRenderDirectoryArgs = {
  inputFile: string;
  direction: string;
};

const createRenderDirectory = async ({
  inputFile,
  direction,
}: createRenderDirectoryArgs): Promise<string> => {
  const tempDirectory = process.pid.toString();
  const fileWithDiagram = path.join(tempDirectory, path.basename(inputFile));
  const fileToRun = path.join(tempDirectory, "create-diagram.ts");
  await mkdir(process.pid.toString());
  await copyFile(inputFile, fileWithDiagram);
  await writeFile(fileToRun, getRenderFileContent({ inputFile, direction }));
  return fileToRun;
};

const renderDiagram = async (
  inputFile: string,
  {
    direction,
  }: {
    direction: string;
  }
) => {
  try {
    const fileToRun = await createRenderDirectory({ inputFile, direction });
    await runTsNodeForFile(fileToRun);
  } catch (error) {
    console.error(error);
  } finally {
    rimrafAsync(process.pid.toString());
  }
};

export const renderCommand = (): commander.Command => {
  const render = new Command("render");
  render.description("render diagrams function to an image file");
  render.arguments("<my-file>");
  render.option(
    "-d,--direction [direction]",
    'layout direction, possible values are "LR","TB","RL","BT"',
    "LR"
  );
  render.action(renderDiagram);
  return render;
};
