type ArrayTwoOrMore<T> = {
  0: T;
  1: T;
} & Array<T>;

export type Node = { id: string; label?: string, image?: string };
export type RenderFunc = () => string;

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
type EdgeChain = {
  nodes: ArrayTwoOrMore<Node>;
  attributes?: Record<string, string>;
};

export const edges = (edgesArray: EdgeChain[]): RenderFunc[] =>
  edgesArray.map((edgeChain) => () =>
    `${edgeChain.nodes.map((node) => node.id).join("->")} ${
      edgeChain.attributes
        ? `[ ${Object.entries(edgeChain.attributes).map(
            ([key, value]) => `${key}=${value}`
          )} ]`
        : ""
    };`
  );

export const nodes = (...nodes: Node[]): RenderFunc[] => {
  return nodes.map((nodeInstance) => () =>
    `"${nodeInstance.id}" ${
      nodeInstance.label ? `[label=${nodeInstance.label}]` : ""
      
    }${nodeInstance.image ? `[image=${nodeInstance.image}]` : ""} ;`
  );
};

// TODO add better types
export type NodeAttributes = Record<string, unknown>;
export type EdgeAttributes = Record<string, unknown>;
export type GraphAttributes = Record<string, unknown>;

export const graph = (isSubgraph: boolean) => (id: string) => (
  elements: RenderFunc[]
) => (
  graphAtts: NodeAttributes | null = null,
  nodeAtts: NodeAttributes | null = null
): RenderFunc => {
  return () =>
    `${isSubgraph ? "subgraph" : "digraph"} "${id}" {${
      graphAtts
        ? Object.entries(graphAtts).map(([key, value]) => `${key} = ${value};`).join(" ")
        : ""
    } ${
      nodeAtts
        ? `node [ ${Object.entries(nodeAtts)
            .map(([key, value]) => `${key} = ${value} `)
            .join(" ")} ];`
        : ""
    } ${elements.map((renderFunction) => renderFunction()).join("")}}`;
};

export const subgraph = graph(true);

export const cluster = subgraph(`cluster_${graphIdGenerator.next().value}`);

export const createDotGraph = (elements: RenderFunc[]): string => {
  return graph(false)("g")(elements)()();
};
