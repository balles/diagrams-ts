import * as diagrams from "diagrams-ts";

const {
  providers: { aws, onprem },
  ext,
  dg,
  styled,
  asCluster,
  createDiagram,
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

(async () => {
  try {
    await createDiagram({
      label: "Example diagram",
      filename: "./output/example.png",
    })(diagram());
  } catch (error) {
    console.log(error);
  }
})();
