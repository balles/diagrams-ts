# diagrams-ts

![logo](https://github.com/balles/diagrams-ts/raw/main/generated-assets/logo-small.png)

`TypeScript`-Port of the python library [`diagrams` by mingrammer](https://diagrams.mingrammer.com/).
Creating architecture diagrams directly from code.

## About

Inspired by the nice visuals and easy to read syntax of the original library, this port tries to provide the same for `Typescript`.
Styles and the `Nodes` are taken from the original library. It also uses `graphviz` for the final graph rendering.

> Disclaimer:
> This project is still under development, not finished and the api can have breaking changes between versions. Use with care.

## Installation and Requirements

In order to create `svg`, `png` or `webp` output you'll need to install [graphviz](https://graphviz.org/download/). This package expects `dot` cli of `graphviz` to be available in your `path`.
If you used the default installation path of graphviz, you can check this by running:

```sh
dot -v
```

This package is build for ES2015. For developing you'll need a `node` version >= 14.

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
import * as diagrams from "diagrams-ts";

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
      filename: "./generated-assets/aws-flow.png",
    })(awsFlow());
  } catch (error) {
    console.log(error);
  }
})();
```

If you'll run it will create the "aws-flow.png" in the output folder:

![AWS Flow diagram](https://github.com/balles/diagrams-ts/raw/main/generated-assets/aws-flow.png)

For more examples of the syntax you can take look at the examples folder. In order to run them, you can use `ts-node` e.g.:

```sh
# In the project root:

yarn ts-node ./examples/diagrams-example.ts

```
