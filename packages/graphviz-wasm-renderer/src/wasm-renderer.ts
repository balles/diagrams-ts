import { graphviz } from "@hpcc-js/wasm";
import { promises } from "fs";

// Copied from the package as it is not exported
export type Format =
  | "svg"
  | "dot"
  | "json"
  | "dot_json"
  | "xdot_json"
  | "plain"
  | "plain-ext";

export type WasmRendererArgs = {
  format: Format;
  outputFile: string;
};

export const WasmRenderer = (initialArgs: WasmRendererArgs) => async (
  input: string
): Promise<string> => {
  const rendered = await graphviz.dot(input, initialArgs.format);
  await promises.writeFile(initialArgs.outputFile, rendered);
  return initialArgs.outputFile;
};
