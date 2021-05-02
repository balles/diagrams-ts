# GraphViz-WASM-Renderer

Use a graphviz version compiled to web assembly, to render a string containing valid `dot` syntax to an image output. Can only render to `svg` and other text based image output (not `png`,`webp`,...)

## Installation and Requirements

Install this package by running:

```sh
npm install @diagrams-ts/graphviz-wasm-renderer

# or when using yarn

yarn add @diagrams-ts/graphviz-wasm-renderer
```

If you are packaging with Webpack or a similar bundler make sure that the WASM files are included.

## Usage

```ts
import { WasmRenderer } from "@diagrams-ts/graphviz-wasm-renderer";

const render = WasmRenderer({ outputFile: "./example.svg", format: "svg" });

(async () => {
  try {
    await render(
      `digraph G {
        a1 -> b2;
        a1 -> b3;
    }`
    );
  } catch (error) {
    console.log(error);
  }
})();
```

If you want to use it outside of `NodeJS` you can use it to render to a string instead:

```ts
import { WasmToStringRenderer } from "@diagrams-ts/graphviz-wasm-renderer";

const render = WasmToStringRenderer({ format: "svg" });

(async () => {
  try {
    const mySVG = await render(
      `digraph G {
        a1 -> b2;
        a1 -> b3;
    }`
    );
    console.log(mySVG); //Outputs an string with a valid SVG you could embed in your HTML
  } catch (error) {
    console.log(error);
  }
})();
```
