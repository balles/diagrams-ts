import * as diagrams from "@diagrams-ts/core";
import { WasmRenderer } from "@diagrams-ts/graphviz-wasm-renderer";
import { Renderer } from "@diagrams-ts/graphviz-functional-ts";

// Uses a graphviz version that is compiled to webassembly, which means
// it does not need an installation of graphviz. This renderer can't create
// binary image formats (jpeg,png...), only text representations.

const {
  providers: {
    aws: {
      compute: { Lambda },
      integration: { SQS },
      storage: { S3 },
    },
  },
  createDiagramCore,
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
    await createDiagramCore({
      label: "AWS Flow",
      filename: "./generated-assets/aws-flow.svg",
      outformat: "svg",
      nodePlugins: [],
      renderer: WasmRenderer as Renderer<string>,
    })(awsFlow());
  } catch (error) {
    console.log(error);
  }
})();
