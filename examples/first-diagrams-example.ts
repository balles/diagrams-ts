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
  const aNode = aws.database.RDS("rds");
  const mongo0 = onprem.database.Mongodb("shard1");
  const mongo1 = onprem.database.Mongodb("shard0");
  const sql = onprem.database.Mysql("sql database");

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
    aws.compute.EC2("A"),
    aws.compute.EC2("B"),
  ]}>>${aNode}<<${ext([mongo0, mongo1, sql])}`;

  return [dbCluster, ...someDiagram];
};

const niceDiagram = initDiagram("Example diagram");

(async () => {
  try {
    const dotGraph = await niceDiagram(diagram);

    await renderDot({
      outputFile: "./output/test.png",
      input: dotGraph,
      format: "png",
    });
  } catch (error) {
    console.log(error);
  }
})();
