// Simple test render, in order to catch unexpected api changes in upstream package
import { WasmToStringRenderer } from "@diagrams-ts/graphviz-wasm-renderer";

it("should render to output file", async () => {
  const dotInput = `digraph G {
    a [ image="https://github.com/balles/diagrams-ts/raw/main/generated-assets/logo-small.png" ]
    a1 -> b2;
    a1 -> b3;
}`;
  expect(
    await WasmToStringRenderer({ format: "svg" })(dotInput)
  ).toMatchSnapshot();
});
