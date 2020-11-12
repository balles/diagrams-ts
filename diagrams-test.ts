import { graph, edges, nodes } from "./src/graph";
import * as diagrams from "./src/diagrams";
import { renderDot } from "./src/render-dot";

const { aws } = diagrams;

const defaultGraphAttributes = {
  pad: "2.0",
  splines: "ortho",
  nodesep: "0.60",
  ranksep: "0.75",
  fontname: "Sans-Serif",
  fontsize: "15",
  fontcolor: "#2D3436",
  rankdir: "LR", // diagrams: direction
  curvestyle: "ortho",
};
const defaultNodeAttributes = {
  shape: "box",
  style: "rounded",
  fixedsize: "true",
  width: "1.4",
  height: "1.4",
  labelloc: "b",
  imagepos: "tc",
  imagescale: "true",
  fontname: "Sans-Serif",
  fontsize: "13",
  fontcolor: "#2D3436",
};

const defaultEdgeAttributes = {
  color: "#7B8894",
};

const ec2_A = aws.compute.ec2("A");
const ec2_B = aws.compute.ec2("B");
const aNode = aws.database.rds("rds");

const dotGraph = graph(false)("g")([
  ...nodes(ec2_A, ec2_B, aNode),
  ...edges([{ nodes: [ec2_A, aNode] }, { nodes: [ec2_B, aNode] }]),
])(defaultGraphAttributes, defaultNodeAttributes, defaultEdgeAttributes)();

console.log(dotGraph);

renderDot({
  outputFile: "./output/test.png",
  input: dotGraph,
  format: "png",
})
  .then((outPut) => console.log(outPut))
  .catch((reason) => console.log(reason));
