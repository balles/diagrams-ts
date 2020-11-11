import { createDotGraph, edges, nodes } from "./src/graph";
import * as diagrams from "./src/diagrams";
import { renderDot } from "./src/render-dot";

const { aws } = diagrams;

const ec2_A = aws.compute.ec2("A");
const ec2_B = aws.compute.ec2("B");
const aNode = aws.database.rds("rds");

const dotGraph = createDotGraph([
  ...nodes(ec2_A, ec2_B, aNode),
  ...edges([{ nodes: [ec2_A, ec2_B], attributes: { arrowhead: "none" } }]),
]);

console.log(dotGraph);

renderDot({
  outputFile: "./output/test.png",
  input: dotGraph,
  format: "png",
})
  .then((outPut) => console.log(outPut))
  .catch((reason) => console.log(reason));
