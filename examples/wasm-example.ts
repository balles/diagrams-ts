import * as diagrams from "diagrams-ts";
import { WasmRenderer } from "@diagrams-ts/graphviz-wasm-renderer";
import { Renderer } from "@diagrams-ts/graphviz-functional-ts";

const {
  providers: {
    aws: {
      compute: { Lambda },
      integration: { SQS },
      storage: { S3 },
    },
  },
  createDiagram,
  diagram,
} = diagrams;

const awsFlow = () => {
  const producer = Lambda("Producer");
  const queue = SQS("Queue");
  const consumer = Lambda("Consumer");
  const bucket = S3("My Bucket");

  return diagram`${producer}>>${queue}>>${consumer}>>${bucket}`;
};

(async () => {
  try {
    await createDiagram({
      label: "AWS Flow",
      filename: "./generated-assets/aws-flow.svg",
      outformat: "svg",
      renderer: WasmRenderer as Renderer<string>,
    })(awsFlow());
  } catch (error) {
    console.log(error);
  }
})();
