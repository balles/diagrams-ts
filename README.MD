# diagrams-ts

`TypeScript`-Port of the python library [`diagrams` by mingrammer](https://diagrams.mingrammer.com/).
Creating architecture diagrams directly from code.

## About

Inspired by the nice visuals and easy to read syntax of the original library, this port tries to provide the same for `type script`.
Styles and the `Nodes` are taken from the original library. It also uses `graphviz` for the final graph rendering.

> Disclaimer:
> This project is still under development, not finished and the api can have breaking changes between versions. Use with care.

## Installation and Requirements

In order to create `svg`, `png` or `webp` output you'll need to install [graphviz](https://graphviz.org/download/). This package expects `dot` cli of `graphviz` to be available in the `path`.
You can check this by running:

```sh
dot -v
```

This package expects a `node` version >= 14.

Install this package by running:

```sh
npm install diagrams-ts

# or when using yarn

yarn add diagram-ts
```

## Getting started

Import the library, choose a provider, write your code and generate your first diagram.

main.ts:

```ts
import * as diagrams from "../src/diagrams";
import { renderDot } from "../src/render-dot";

const {
  providers: { aws },
  initDiagram,
  dg,
} = diagrams;

const awsFlow = () => {
  const producer = aws.compute.lambda("Producer");
  const queue = aws.integration.simple_queue_service_sqs("Queue");
  const consumer = aws.compute.lambda("Consumer");
  const bucket = aws.storage.simple_storage_service_s3("My Bucket");

  return dg`${producer}>>${queue}>>${consumer}>>${bucket}`;
};

const dotGraph = initDiagram("AWS Flow")(awsFlow);

renderDot({
  outputFile: "./output/aws-flow.png",
  input: dotGraph,
  format: "png",
})
  .then((outPut) => console.log(outPut))
  .catch((reason) => console.log(reason));
```

If you'll run it will create the "aws-flow.png" in the output folder:

[AWS Flow diagram](examples/aws-flow.png)

For more examples of the syntax you can take look at the examples folder. In order to run them, you can use `ts-node` e.g.:

```sh
# In the project root:

yarn ts-node ./examples/show-diagram.ts

```

## Known Issues

- Merging edges has a bug
- Edges style can't directly be set
- Naming of nodes is not yet completely the same as in python
- "Direct rendering" is not yet possible
- Node Label rendering
