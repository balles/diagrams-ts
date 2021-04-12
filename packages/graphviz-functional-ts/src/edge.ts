import { EdgeAttributes } from "./generated/attributes";
import { RenderFunc } from "./render-function";
import { Node } from "./node";

type ArrayTwoOrMore<T> = {
  0: T;
  1: T;
} & Array<T>;

export type EdgeChain = {
  nodes: ArrayTwoOrMore<Node>;
  attributes?: EdgeAttributes;
};

export const edges = (edgesArray: EdgeChain[]): RenderFunc[] =>
  edgesArray.map((edgeChain) => async () =>
    `${edgeChain.nodes.map((node) => node.id).join("->")} ${
      edgeChain.attributes && Object.entries(edgeChain.attributes).length > 0
        ? `[ ${Object.entries(edgeChain.attributes)
            .map(([key, value]) => `${key}="${value}"`)
            .join(" ")} ]`
        : ""
    };`
  );
