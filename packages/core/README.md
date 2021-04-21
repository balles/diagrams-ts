# diagrams-ts/core

![logo](https://github.com/balles/diagrams-ts/raw/main/generated-assets/logo-small.png)

The extracted core logic without usage of any `NodeJS` or `Browser` specific apis.
Creating strings with `dot` language directly from code.

## Installation and Requirements

For developing you'll need a `node` version >= 14.

Install this package by running:

```sh
npm install @diagrams-ts/core

# or when using yarn

yarn add @diagrams-ts/core
```

## Getting started

Import the library, choose a provider, write your code and generate a `dot`string.

main.ts:

```ts
import * as diagramsCore from "@diagrams-ts/core";
import { graph } from "@diagrams-ts/graphviz-functional-ts";

const {
  providers: {
    aws: {
      compute: { Lambda },
      storage: { S3 },
    },
  },
  diagram,
  initDiagram,
} = diagramsCore;

const awsFlow = () => {
  return diagram`${Lambda("My Lambda")}>>${S3("My Bucket")}`;
};

(async () => {
  try {
    const dotOutput = await initDiagram("My Example", "LR")(awsFlow);
    console.log(dotOutput);
  } catch (error) {
    console.log(error);
  }
})();
```

This will log the rendered `dotOutput` which you could pass directly to any tool/library that accepts `dot`strings as input.
