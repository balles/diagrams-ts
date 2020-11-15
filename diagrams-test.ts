import * as diagrams from "./src/diagrams";
import { renderDot } from "./src/render-dot";

const { aws, onprem, initDiagram, ext, dg, nodes } = diagrams;

const diagram = () => {
  const aNode = aws.database.rds("rds");
  const mongo = onprem.database.mongodb("my database");
  const sql = onprem.database.mysql("sql database");

  const someDiagram = dg`${[aws.compute.ec2("A"), aws.compute.ec2("B")]}>>${ext(
    aNode
  )}<<${[mongo, sql]}`;

  return [...someDiagram, ...nodes(aNode)];
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
