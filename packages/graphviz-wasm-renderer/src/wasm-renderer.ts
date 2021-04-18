import { graphviz } from "@hpcc-js/wasm";
import { promises } from "fs";

// Types Copied and adapted from "@hpcc-js/wasm" package as types are not exported
export type WasmFormat =
  | "svg"
  | "dot"
  | "json"
  | "dot_json"
  | "xdot_json"
  | "plain"
  | "plain-ext";

export interface WasmImage {
  path: string;
  width: string;
  height: string;
}

export interface WasmFile {
  path: string;
  data: string;
}

export interface WasmExt {
  images?: WasmImage[];
  files?: WasmFile[];
  wasmFolder?: string;
  wasmBinary?: Uint8Array;
  yInvert?: boolean;
  nop?: number;
}

export type WasmRendererArgs = {
  format: WasmFormat;
  outputFile: string;
};

const imageUrlRegex = /(?<=image=")(.*?)(?=")/g;

const getWebImagesFromDot = (dotInput: string): string[] => {
  return dotInput.match(imageUrlRegex) as string[];
};

const extractImages = (
  dotInput: string,
  imageWidth = "300px",
  imageHeight = "300px"
): WasmImage[] => {
  return getWebImagesFromDot(dotInput).map((imagePath) => ({
    path: imagePath,
    width: imageWidth,
    height: imageHeight,
  }));
};

export const WasmRenderer = (initialArgs: WasmRendererArgs) => async (
  input: string
): Promise<string> => {
  const ext = { images: extractImages(input) };
  const rendered = await graphviz.dot(input, initialArgs.format, ext);
  await promises.writeFile(initialArgs.outputFile, rendered);
  return initialArgs.outputFile;
};
