export type Node = { label: string };

export const edge = (
  edges: TemplateStringsArray,
  nodeA: Node,
  nodeB: Node
): string => {
  console.log(edges);
  return `"${nodeA.label}"->"${nodeB.label}";`;
};

export const nodes = (
  strings: TemplateStringsArray,
  ...nodes: Node[]
): string => {
  return nodes.reduce((acc, nodeInstance) => {
    acc += `"${nodeInstance.label}";\n`;
    return acc;
  }, "");
};

// TODO: instead of directly returning string return render functions
// TODO: subgraph which is can use nodes

export const createDotGraph = (graph: () => string): string => {
  return `digraph G {
        ${graph()}
    }`;
};
