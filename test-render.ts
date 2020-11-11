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
  const helloNode: Node = {
    attributes: { label: "Hello" },
    id: getUniqueNodeId(),
  };
  const worldNode: Node = {
    attributes: { label: "World" },
    id: getUniqueNodeId(),
  };
  const andNode = { attributes: { label: "And" }, id: getUniqueNodeId() };
  const byeNode = { attributes: { label: "Bye" }, id: getUniqueNodeId() };
  const ec2Node = {
    attributes: {
      label: '""',
      shape: "none",
      image: '"assets/aws/compute/ec2.png"',
    },
    id: getUniqueNodeId(),
  };
  const clusterNodeA = { id: getUniqueNodeId() };
  const clusterNodeB = { id: getUniqueNodeId() };
  const andByeGraph = subgraph("s_0")([
    ...nodes(andNode, byeNode),
    ...edges([{ nodes: [andNode, byeNode] }]),
  ]);
  const clusterGraph = cluster([
    ...nodes(clusterNodeA, clusterNodeB),
    ...edges([
      {
        nodes: [clusterNodeA, clusterNodeB],
        attributes: { arrowhead: "none" },
      },
    ]),
  ])({ color: "red" }, { color: "green" });
  return [
    ...nodes(helloNode, worldNode, ec2Node),
    andByeGraph(),
    clusterGraph,
    ...edges([
      { nodes: [helloNode, worldNode, andNode] },
      { nodes: [byeNode, clusterNodeA] },
    ]),
  ];
};

const dotInput = createDotGraph(graph());

console.log(dotInput);

renderDot({
  outputFile: "./output/test.webp",
  input: dotInput,
  format: "webp",
})
  .then((outPut) => console.log(outPut))
  .catch((reason) => console.log(reason));
