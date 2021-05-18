import commander, { Command } from "commander";
import { promisify } from "util";
import rimraf from "rimraf";
import {
  getRenderFileContent,
  Direction,
  Renderer,
} from "./get-renderer-content";
import { createRenderDirectory } from "./create-render-directory";
import { runTsNodeForFile, runTsNodeForString } from "./ts-node-wrapper";
import { addCommonOptions } from "./add-common-options";

const rimrafAsync = promisify(rimraf);

type DotDiagramArgs = {
  label: string;
  direction: string;
  format: string;
  localImages: boolean;
  keep: boolean;
  standAlone: boolean;
};

const verifyDirection = (direction: string): Direction => {
  if (!Object.keys(Direction).includes(direction)) {
    throw Error(`Input direction is invalid: ${direction}`);
  }
  return direction as Direction;
};

const renderDot = async (
  inputFile: string,
  {
    label,
    direction,
    standAlone = false,
    keep = false,
    localImages: useLocalImages = false,
  }: DotDiagramArgs
) => {
  const outformat = "dot";
  const filename = "not used";
  const renderer = "NONE" as Renderer;

  if (standAlone) {
    try {
      const fileToRun = await createRenderDirectory({
        label,
        inputFile,
        direction: verifyDirection(direction),
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
        direction: verifyDirection(direction),
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
