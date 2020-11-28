import { NodeAttributes } from "./generated/attributes";
import { RenderFunc, generateUniqueIds } from "./render-function";

export type Node = { id: string; attributes?: NodeAttributes };

export const nodes = (...nodes: Node[]): RenderFunc[] => {
  return nodes.map((nodeInstance) => async () =>
    `"${nodeInstance.id}" ${
      nodeInstance.attributes && Object.keys(nodeInstance.attributes).length > 0
        ? `[ ${Object.entries(nodeInstance.attributes)
            .map(([key, value]) => `${key}="${value}"`)
            .join(" ")} ]`
        : ""
    }; `
  );
};

const nodeIdGenerator = generateUniqueIds();

export const getUniqueNodeId = (): string => {
  return `a${nodeIdGenerator.next().value}`;
};
