import * as diagrams from "../src/diagrams";
import { RenderFunc } from "../src/graph";
import { renderDot } from "../src/graph/render-dot";

const {
  providers: { aws },
  initDiagram,
  ext,
  dg,
  asCluster,
} = diagrams;

// Example 1: Grouped workers simple, unidirected graph, no clusters

const {
  compute: { ec2: EC2 },
  database: { rds: RDS },
  network: { elastic_load_balancing: ELB },
} = aws;

const groupedWorkers = () => {
  return dg`${ELB("lb")} >> ${[
    EC2("worker1"),
    EC2("worker2"),
    EC2("worker3"),
    EC2("worker4"),
    EC2("worker5"),
  ]} >> ${RDS("events")}`;
};

// Example 2: Event Processing on AWS

const {
  compute: {
    elastic_container_service: ECS,
    elastic_kubernetes_service: EKS,
    lambda: Lambda,
  },
  database: { redshift: Redshift },
  integration: { simple_queue_service_sqs: SQS },
  storage: { simple_storage_service_s3: S3 },
} = aws;

const eventProcessing = () => {
  const source = EKS("k8s source");
  const workers = [ECS("worker1"), ECS("worker2"), ECS("worker3")];
  const eventWorkerCluster = asCluster({ label: "Event Workers" })(
    dg`${workers}`
  );
  const queue = SQS("event queue");
  const handlers = [Lambda("proc1"), Lambda("proc2"), Lambda("proc3")];
  const processingCluster = asCluster({ label: "Processing" })(dg`${handlers}`);
  const eventFlowCluster = asCluster({ label: "Event Flows" })([
    eventWorkerCluster,
    ...dg`${queue}`,
    processingCluster,
  ]);

  const store = S3("events store");
  const dw = Redshift("analytics");

  return [
    eventFlowCluster,
    ...dg`${source} >> ${ext(workers)} >> ${ext(queue)} >> ${ext(handlers)}`,
    ...dg`${ext(handlers)} >> ${store}`,
    ...dg`${ext(handlers)} >> ${dw}`,
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
  const dotGraph = initDiagram(title, direction)(diagram);
  await renderDot({
    outputFile: `./output/example.${index + 1}.png`,
    input: dotGraph,
    format: "png",
  });
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
