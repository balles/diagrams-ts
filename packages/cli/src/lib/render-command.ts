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

const formatToRendererMap = {
  CLI: ["png", "jpg", "webp"],
  WASM: ["svg", "dot", "dot_json", "json", "xdot_json"],
  NONE: ["png", "jpg", "webp", "svg", "dot", "dot_json", "json", "xdot_json"], // will be ignored anyway
};

const validateInput = (input: {
  direction: string;
  renderer: string;
  outformat: string;
  useLocalImages: boolean;
}) => {
  if (!["LR", "TB", "RL", "BT"].includes(input.direction)) {
    throw Error(`Invalid input direction: ${input.direction}`);
  }
  if (!["CLI", "WASM", "NONE"].includes(input.renderer)) {
    throw Error(`Invalid input renderer: ${input.renderer}`);
  }
  if (
    !formatToRendererMap[input.renderer as "CLI" | "WASM" | "NONE"].includes(
      input.outformat
    )
  ) {
    throw Error(
      `Invalid input format: ${input.outformat}. Renderer ${
        input.renderer
      } only accepts ${
        formatToRendererMap[input.renderer as "CLI" | "WASM" | "NONE"]
      }`
    );
  }
  if (
    !input.useLocalImages &&
    input.renderer === "CLI" &&
    ["png", "jpg", "webp"].includes(input.outformat)
  ) {
    throw Error(
      "Rendering binary images won't work for images from an URL. You'll need to add the -i flag to fetch the images before creating the output."
    );
  }
};

type RenderDiagramArgs = {
  label: string;
  inputFile: string;
  direction: string;
  format: string;
  outputfile?: string;
  renderer: string;
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
  validateInput({
    direction,
    outformat,
    renderer,
    useLocalImages,
  });

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
