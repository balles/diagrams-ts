import commander, { Command } from "commander";
import { promisify } from "util";
import path from "path";
import rimraf from "rimraf";
import open from "open";
import { getRenderFileContent } from "./get-renderer-content";
import { createRenderDirectory } from "./create-render-directory";
import { runTsNodeForFile, runTsNodeForString } from "./ts-node-wrapper";
import { addCommonOptions } from "./add-common-options";

const rimrafAsync = promisify(rimraf);

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
  addCommonOptions(render);
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
  render.option("-s,--show", "show file after rendering");
  render.action(renderDiagram);
  return render;
};
