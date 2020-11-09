export type Node = { label: string };

export type RenderFunc = () => string //TODO should probably accept nodes

export const edge = (
  nodeA: Node,
  nodeB: Node
): RenderFunc => {
    const render=() => `"${nodeA.label}"->"${nodeB.label}";`
    return render;
};

export const nodes = (
  ...nodes: Node[]
): RenderFunc[] => {
  return nodes.map((nodeInstance) => ()=> 
     `"${nodeInstance.label}";`
  );
};

// TODO: instead of directly returning string return render functions
// TODO: subgraph which is can use nodes

export const createDotGraph = (graph: ()=>RenderFunc[]): string => {
  return `digraph G {
        ${graph().map(renderFunction=>renderFunction()).join("")}
    }`;
};
