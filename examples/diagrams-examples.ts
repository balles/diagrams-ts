import * as diagrams from "../src/diagrams";
import { RenderFunc } from "../src/graph";

const {
  providers: { aws },
  ext,
  diagram,
  asCluster,
} = diagrams;

// Example 1: Grouped workers simple, unidirected graph, no clusters

const {
  compute: { EC2 },
  database: { RDS },
  network: { ELB },
} = aws;

const groupedWorkers = () => {
  return diagram`${ELB("lb")} >> ${[
    EC2("worker1"),
    EC2("worker2"),
    EC2("worker3"),
    EC2("worker4"),
    EC2("worker5"),
  ]} >> ${RDS("events")}`;
};

// Example 2: Event Processing on AWS

const {
  compute: { ECS, EKS, Lambda },
  database: { Redshift },
  integration: { SQS },
  storage: { S3 },
} = aws;

const eventProcessing = () => {
  const source = EKS("k8s source");
  const workers = [ECS("worker1"), ECS("worker2"), ECS("worker3")];
  const eventWorkerCluster = asCluster({ label: "Event Workers" })(
    diagram`${workers}`
  );
  const queue = SQS("event queue");
  const handlers = [Lambda("proc1"), Lambda("proc2"), Lambda("proc3")];
  const processingCluster = asCluster({ label: "Processing" })(
    diagram`${handlers}`
  );
  const eventFlowCluster = asCluster({ label: "Event Flows" })([
    eventWorkerCluster,
    ...diagram`${queue}`,
    processingCluster,
  ]);

  const store = S3("events store");
  const dw = Redshift("analytics");

  return [
    eventFlowCluster,
    ...diagram`${source} >> ${ext(workers)} >> ${ext(queue)} >> ${ext(
      handlers
    )}`,
    ...diagram`${ext(handlers)} >> ${store}`,
    ...diagram`${ext(handlers)} >> ${dw}`,
  ];
};

// Render all examples

type Example = {
  title: string;
  direction: string;
  diagram: () => RenderFunc[];
};

const renderExample = async (
  { title, direction, diagram }: Example,
  index: number
): Promise<void> => {
  await diagrams.createDiagram({
    label: title,
    direction,
    outformat: "png",
    filename: `./output/example.${index + 1}.png`,
  })(diagram());
};

const main = async () => {
  const examples = [
    { title: "Grouped Workers", diagram: groupedWorkers, direction: "TB" },
    { title: "Event Processing", diagram: eventProcessing, direction: "LR" },
  ];
  await Promise.all(examples.map(renderExample));
};

main()
  .then(() => console.log("Done."))
  .catch((reason) => console.log(reason));
