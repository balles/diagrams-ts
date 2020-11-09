import {
  createDotGraph,
  Node,
  edges,
  nodes,
  RenderFunc,
  subgraph,
  cluster,
  getUniqueNodeId,
} from "./src/graph";
import { renderDot } from "./src/render-dot";

const graph = (): RenderFunc[] => {
  const helloNode: Node = { label: "Hello", id: getUniqueNodeId() };
  const worldNode: Node = { label: "World", id: getUniqueNodeId() };
  const andNode = { label: "And", id: getUniqueNodeId() };
  const byeNode = { label: "Bye", id: getUniqueNodeId() };
  const clusterNodeA = { id: getUniqueNodeId() };
  const clusterNodeB = { id: getUniqueNodeId() };
  const andByeGraph = subgraph("s_0")([
    ...nodes(andNode, byeNode),
    ...edges([{ nodes: [andNode, byeNode] }]),
  ]);
  const clusterGraph = cluster([
    ...nodes(clusterNodeA, clusterNodeA),
    ...edges([{ nodes: [clusterNodeA, clusterNodeB] }]),
  ]);
  return [
    ...nodes(helloNode, worldNode),
    ...edges([
      { nodes: [helloNode, worldNode, andNode] },
      { nodes: [byeNode, clusterNodeA] },
    ]),
    andByeGraph,
    clusterGraph,
  ];
};

const dotInput = createDotGraph(graph);

console.log(dotInput);

renderDot({
  outputFile: "./output/test.webp",
  input: dotInput,
  format: "webp",
})
  .then((outPut) => console.log(outPut))
  .catch((reason) => console.log(reason));
