import {
  NodeAttributes,
  EdgeAttributes,
  GraphAttributes,
  ClusterAttributes,
} from "./generated/attributes";

export * from "./generated/attributes";

type ArrayTwoOrMore<T> = {
  0: T;
  1: T;
} & Array<T>;

export type RenderProperties = Record<string, unknown>;

export type Node = { id: string; attributes?: NodeAttributes };
export type RenderFunc = (props?: RenderProperties) => string;

function* generateUniqueIds(): Generator<number, any, any> {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const nodeIdGenerator = generateUniqueIds();

const graphIdGenerator = generateUniqueIds();

export const getUniqueNodeId = (): string => {
  return `a${nodeIdGenerator.next().value}`;
};

// TODO: add better typings
export type EdgeChain = {
  nodes: ArrayTwoOrMore<Node>;
  attributes?: EdgeAttributes;
};

export const edges = (edgesArray: EdgeChain[]): RenderFunc[] =>
  edgesArray.map((edgeChain) => () =>
    `${edgeChain.nodes.map((node) => node.id).join("->")} ${
      edgeChain.attributes
        ? `[ ${Object.entries(edgeChain.attributes)
            .map(([key, value]) => `${key}="${value}"`)
            .join(" ")} ]`
        : ""
    };`
  );

export const nodes = (...nodes: Node[]): RenderFunc[] => {
  return nodes.map((nodeInstance) => () =>
    `"${nodeInstance.id}" ${
      nodeInstance.attributes && Object.keys(nodeInstance.attributes).length > 0
        ? `[ ${Object.entries(nodeInstance.attributes)
            .map(([key, value]) => `${key}="${value}"`)
            .join(" ")} ]`
        : ""
    }; `
  );
};

export const graph = (isSubgraph: boolean) => (id: string) => (
  elements: RenderFunc[]
) => (
  graphAtts: GraphAttributes | ClusterAttributes | null = null,
  nodeAtts: NodeAttributes | null = null,
  edgeAtts: EdgeAttributes | null = null
): RenderFunc => {
  return (props) =>
    `${isSubgraph ? "subgraph" : "digraph"} "${id}" {${
      graphAtts
        ? Object.entries(graphAtts)
            .map(([key, value]) => `${key} = "${value}";`)
            .join(" ")
        : ""
    } ${
      nodeAtts
        ? `node [ ${Object.entries(nodeAtts)
            .map(([key, value]) => `${key} = "${value}" `)
            .join(" ")} ];`
        : ""
    } ${
      edgeAtts
        ? `edge [ ${Object.entries(edgeAtts)
            .map(([key, value]) => `${key} = "${value}" `)
            .join(" ")} ];`
        : ""
    }
    ${elements.map((renderFunction) => renderFunction(props)).join("")}}`;
};

export const subgraph = graph(true);

export const cluster = () =>
  subgraph(`cluster_${graphIdGenerator.next().value}`);

export const createDotGraph = (elements: RenderFunc[]): string => {
  return graph(false)("g")(elements)()();
};