# GraphViz-CLI-Renderer

Thin nodejs wrapper for the `dot`command line interface installed with the graphviz package. Renders a string containing valid `dot` syntax to an image output.

## Installation and Requirements

In order to create `svg`, `png` or `webp` output you'll need to install [graphviz](https://graphviz.org/download/). This package expects `dot` cli of `graphviz` to be available in your `path`.
You can check this by running:

```sh
dot -v
```

Install this package by running:

```sh
npm install @diagrams-ts/graphviz-cli-renderer

# or when using yarn

yarn add @diagrams-ts/graphviz-cli-renderer
```

## Usage

```ts
import { CliRenderer } from "@diagrams-ts/graphviz-cli-renderer";

const render = CliRenderer({ outputFile: "./example.png", format: "png" });

(async () => {
  try {
    await render(
      `digraph G {
        a1 -> b2;
        a1 -> b3
    }`
    );
  } catch (error) {
    console.log(error);
  }
})();
```
