import { graph } from "./graph";
import { RenderFunc } from "./render-function";

export * from "./generated/attributes";
export * from "./render-function";
export * from "./node";
export * from "./edge";
export * from "./graph";

export const createDotGraph = (elements: RenderFunc[]): Promise<string> => {
  return graph(false)("g")(elements)()();
};
