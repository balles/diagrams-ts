import * as diagrams from "./src/diagrams";
import { renderDot } from "./src/render-dot";

const { aws, onprem, initDiagram, nodes, edges } = diagrams;

const diagram = () => {
  const ec2_A = aws.compute.ec2("A");
  const ec2_B = aws.compute.ec2("B");
  const aNode = aws.database.rds("rds");
  const mongo = onprem.database.mongodb("my database");
  const sql = onprem.database.mysql("sql database");

  const someEdges = edges`${[ec2_A, ec2_B]}>>${aNode}<<${[mongo, sql]}`;

  return [...nodes(ec2_A, ec2_B, aNode, mongo, sql), ...someEdges];
};

const niceDiagram = initDiagram("Nice diagram");

const dotGraph = niceDiagram(diagram);

console.log(dotGraph);

renderDot({
  outputFile: "./output/test.png",
  input: dotGraph,
  format: "png",
})
  .then((outPut) => console.log(outPut))
  .catch((reason) => console.log(reason));
