# Image cache plugin

Downloads images for URLs and stores them in a cache inside the `node_modules` directory. Replaces the URL of the image with the local file. Makes it possible to create binary images, from nodes that include html paths.

For `diagrams-ts` we pull images from the `diagrams`repository on Github, using requests without authentication. Github limits those requests to **60 requests/hour**. In order to not hit the rate limit some form of caching needs to be done.

## Installation and Requirements

This plugin only runs on node.

Install this package by running:

```sh
npm install @diagrams-ts/local-image-cache-plugin

# or when using yarn

yarn add @diagrams-ts/local-image-cache-plugin
```

## Usage

You can add the plugin to the `createDiagrams` call, as a `nodePlugin`parameter.

```ts
import * as diagrams from "diagrams-ts";
import { LocalImageCachePlugin } from "@diagrams-ts/local-image-cache-plugin";

const {
  providers: {
    aws: {
      compute: { Lambda },
      storage: { S3 },
    },
  },
  createDiagram,
  diagram,
} = diagrams;

const awsFlow = () => diagram`${Lambda("Lambda")}>>${S3("Bucket")}`;

(async () => {
  try {
    await createDiagram({
      label: "AWS Simple",
      filename: "./output/aws-simple.png",
      nodePlugins: [LocalImageCachePlugin],
    })(awsFlow());
  } catch (error) {
    console.log(error);
  }
})();
```

☝️ There is no need to do this, when running from `node` as `diagrams-ts` uses this plugin by default.
