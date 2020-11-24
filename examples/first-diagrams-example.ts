import * as diagrams from "../src/diagrams";
import { renderDot } from "../src/graph/render-dot";

const {
  providers: { aws, onprem },
  initDiagram,
  ext,
  dg,
  styled,
  asCluster,
} = diagrams;

const diagram = () => {
  const aNode = aws.database.rds("rds");
  const mongo0 = onprem.database.mongodb("shard1");
  const mongo1 = onprem.database.mongodb("shard0");
  const sql = onprem.database.mysql("sql database");

  const mongoCluster = asCluster({ label: "Atlas" })(
    styled({ color: "red" })`
      ${mongo0}-${mongo1}
    `
  );
  const dbCluster = asCluster({ label: "Databases" })([
    mongoCluster,
    ...dg`${[sql]}`,
  ]);

  const someDiagram = dg`${[
    aws.compute.ec2("A"),
    aws.compute.ec2("B"),
  ]}>>${aNode}<<${ext([mongo0, mongo1, sql])}`;

  return [dbCluster, ...someDiagram];
};

const niceDiagram = initDiagram("Example diagram");

const dotGraph = niceDiagram(diagram);

console.log(dotGraph);

renderDot({
  outputFile: "./output/test.png",
  input: dotGraph,
  format: "png",
})
  .then((outPut) => console.log(outPut))
  .catch((reason) => console.log(reason));
