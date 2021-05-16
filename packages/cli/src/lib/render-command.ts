import commander, { Command } from "commander";
import { exec } from "child_process";
import { promisify } from "util";
import { promises } from "fs";
import path from "path";
import rimraf from "rimraf";
import open from "open";

// If you don't use yarn or you use another location for your global modules
// you'll need to set this environment variable for stand-alone mode. e.g.:
//
// export DIAGRAMS_GLOBAL_MODULES=$(yarn global bin)/node_modules
//
// or
//
// export DIAGRAMS_GLOBAL_MODULES=$(npm root -g)

const pathToGlobalNodeModules =
  process.env.DIAGRAMS_GLOBAL_MODULES || "~/.config/yarn/global/node_modules";

const { mkdir, copyFile, writeFile, symlink } = promises;

const execAsync = promisify(exec);
const rimrafAsync = promisify(rimraf);

const runTsNodeForFile = async (file: string): Promise<void> => {
  const { stdout, stderr } = await execAsync(
    `ts-node-script ${file} --transpile-only`
  );

  if (stdout?.length > 0) {
    console.log("ts-node:", stdout);
  }

  if (stderr?.length > 0) {
    console.error("stderr:ts-node", stderr);
  }
};

const runTsNodeForString = async (input: string): Promise<void> => {
  const { stdout, stderr } = await execAsync(`ts-node -e '${input}'`);

  if (stdout?.length > 0) {
    console.log("ts-node:", stdout);
  }

  if (stderr?.length > 0) {
    console.error("stderr:ts-node", stderr);
  }
};

const rendererToImportMap = {
  CLI: `import { CliRenderer } from "@diagrams-ts/graphviz-cli-renderer"`,
  WASM: `import { WasmRenderer } from "@diagrams-ts/graphviz-wasm-renderer"`,
  NONE: `import { passThroughRenderer } from "@diagrams-ts/core"`,
};

const rendererMap = {
  CLI: "CliRenderer",
  WASM: "WasmRenderer",
  NONE: "passThroughRenderer",
};

type GetRenderFileContentArgs = {
  label: string;
  inputFile: string;
  direction: string; //TODO "LR" | "TB" | "RL" | "BT";
  outformat: string;
  filename?: string;
  renderer: string; //TODO "CLI" | "WASM" | "NONE";
  useLocalImages: boolean;
};

const getRenderFileContent = ({
  label,
  inputFile,
  direction,
  outformat,
  filename,
  renderer,
  useLocalImages,
}: GetRenderFileContentArgs): string => {
  // TODO replace missing parameters with other parameters/defaults
  // TODO remove typecast in map
  const importFileName = path.basename(inputFile, path.extname(inputFile));
  return `
  import { createDiagramCore } from "@diagrams-ts/core";
  ${rendererToImportMap[renderer as "CLI" | "WASM" | "NONE"]};
  import diagramToRender from "./${importFileName}";
  import { Renderer } from "@diagrams-ts/graphviz-functional-ts";
  ${
    useLocalImages
      ? 'import { LocalImageCachePlugin } from "@diagrams-ts/local-image-cache-plugin";'
      : ""
  }

  
  (async () => {
    try {
      const result = await createDiagramCore({
        label: "${label}",
        filename: "${filename}",
        direction: "${direction}",
        outformat: "${outformat}",
        renderer: ${
          rendererMap[renderer as "CLI" | "WASM" | "NONE"]
        } as Renderer<string>,
        nodePlugins: ${useLocalImages ? "[LocalImageCachePlugin]" : "[]"},
      })(diagramToRender());
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  })();
  `;
};

const createRenderDirectory = async ({
  label,
  inputFile,
  direction,
  filename,
  renderer,
  outformat,
  useLocalImages,
}: GetRenderFileContentArgs): Promise<string> => {
  const tempDirectory = process.pid.toString();
  const fileWithDiagram = path.join(tempDirectory, path.basename(inputFile));
  const fileToRun = path.join(tempDirectory, "create-diagram.ts");
  await mkdir(process.pid.toString());
  await Promise.all([
    await copyFile(inputFile, fileWithDiagram),
    await copyFile(
      path.join(__dirname, "../../template-files/template.tsconfig.json"),
      path.join(tempDirectory, "tsconfig.json")
    ),
    await copyFile(
      path.join(__dirname, "../../template-files/template.package.json"),
      path.join(tempDirectory, "package.json")
    ),
    await symlink(
      pathToGlobalNodeModules,
      path.join(tempDirectory, "node_modules"),
      "dir"
    ),
    await writeFile(
      fileToRun,
      getRenderFileContent({
        label,
        inputFile,
        direction,
        filename,
        renderer,
        outformat,
        useLocalImages,
      })
    ),
  ]);
  return fileToRun;
};

type RenderDiagramArgs = {
  label: string;
  inputFile: string;
  direction: string; //TODO "LR" | "TB" | "RL" | "BT";
  format: string;
  outputfile?: string;
  renderer: string; //TODO "CLI" | "WASM" | "NONE";
  localImages: boolean;
  standAlone: boolean;
  keep: boolean;
  show: boolean;
};

const renderDiagram = async (
  inputFile: string,
  {
    label,
    direction,
    format: outformat,
    outputfile: filename,
    renderer,
    localImages: useLocalImages = false,
    standAlone = false,
    keep = false,
    show = false,
  }: RenderDiagramArgs
) => {
  if (!filename) {
    filename = `${path.basename(
      inputFile,
      path.extname(inputFile)
    )}.${outformat}`;
  }
  if (standAlone) {
    try {
      const fileToRun = await createRenderDirectory({
        label,
        inputFile,
        direction,
        outformat,
        filename,
        renderer,
        useLocalImages,
      });
      await runTsNodeForFile(fileToRun);
    } catch (error) {
      console.error(error);
    } finally {
      if (!keep) {
        await rimrafAsync(process.pid.toString());
      }
    }
  } else {
    await runTsNodeForString(
      getRenderFileContent({
        label,
        inputFile,
        direction,
        outformat,
        filename,
        renderer,
        useLocalImages,
      })
    );
  }
  if (show) {
    await open(filename);
  }
};

// TODO Allow only the right output formats!

export const renderCommand = (): commander.Command => {
  const render = new Command("render");
  render.description("render diagrams function to an image file");
  render.arguments("<file-with-diagram>");
  render.option("-l,--label [label]", "label to apply to the diagram", "");
  render.option(
    "-d,--direction [direction]",
    'layout direction left to right or top to bottom, possible values are "LR","TB","RL","BT"',
    "LR"
  );
  render.option(
    "-f,--format [format]",
    'output format, possible values depends on the used renderer "png","jpg","webp","svg","dot"...',
    "svg"
  );
  render.option(
    "-o,--output [outputfile]",
    "the file to output, defaults to <file-with-diagram>.<format-extension>"
  );
  render.option(
    "-r,--renderer [renderer]",
    'the renderer to use "CLI" (requires installed graphviz) ,"WASM" or "NONE"',
    "WASM"
  );
  render.option(
    "-i,--local-images ",
    "retrieve images from URLs and use local version of images"
  );
  render.option("-a,--stand-alone", "run outside of typescript project");
  render.option(
    "-k,--keep",
    "keep the working directory, only works with 'stand-alone' mode"
  );
  render.option("-s,--show", "show file after rendering");
  render.action(renderDiagram);
  return render;
};
