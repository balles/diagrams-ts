type ArrayTwoOrMore<T> = {
  0: T;
  1: T;
} & Array<T>;

export type Node = { id: string; label?: string };
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

type EdgeChain = { nodes: ArrayTwoOrMore<Node> };

export const edges = (edgesArray: EdgeChain[]): RenderFunc[] =>
  edgesArray.map((edgeChain) => () =>
    `${edgeChain.nodes.map((node) => node.id).join("->")};`
  );

export const nodes = (...nodes: Node[]): RenderFunc[] => {
  return nodes.map((nodeInstance) => () => `"${nodeInstance.id}" ${nodeInstance.label?`[label=${nodeInstance.label}]`:""} ;`);
};

export const subgraph = (id: string) => (
  elements: RenderFunc[]
): RenderFunc => {
  return () =>
    `subgraph "${id}" {${elements
      .map((renderFunction) => renderFunction())
      .join("")}};`;
};

export const cluster = subgraph(`cluster_${graphIdGenerator.next().value}`);

export const createDotGraph = (graph: () => RenderFunc[]): string => {
  return `digraph G {
        ${graph()
          .map((renderFunction) => renderFunction())
          .join("")}
    }`;
};
