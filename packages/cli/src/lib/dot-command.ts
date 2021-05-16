import commander, { Command } from "commander";
import { promisify } from "util";
import rimraf from "rimraf";
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

const renderDot = async (
  inputFile: string,
  { label, direction, standAlone = false, keep = false }: RenderDiagramArgs
) => {
  const outformat = "dot";
  const filename = "not used";
  const renderer = "NONE";
  const useLocalImages = false;

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
      await runTsNodeForFile(fileToRun, false);
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
      }),
      false
    );
  }
};

export const dotCommand = (): commander.Command => {
  const dot = new Command("dot");
  dot.description("render diagrams function to dot output (not implemented)");
  dot.description("render diagrams function to an image file");
  dot.arguments("<file-with-diagram>");
  addCommonOptions(dot);
  dot.action(renderDot);
  return dot;
};
