import { graphviz } from "@hpcc-js/wasm";
import { promises } from "fs";
import { WasmRenderer } from "./wasm-renderer";

jest.mock("fs", () => ({
  promises: {
    writeFile: jest.fn(),
  },
}));

jest.mock("@hpcc-js/wasm", () => ({
  graphviz: {
    dot: jest.fn(),
  },
}));

beforeEach(() => {
  (graphviz.dot as jest.Mock).mockResolvedValue("renderedOutput");
  (graphviz.dot as jest.Mock).mockClear();
  (promises.writeFile as jest.Mock).mockClear();
});
it("should render to output file", async () => {
  const dotInput = `digraph G {a->b;}`;
  expect(
    await WasmRenderer({ outputFile: "./testFile.svg", format: "svg" })(
      dotInput
    )
  ).toBe("./testFile.svg");
  expect(graphviz.dot).toBeCalledWith(dotInput, "svg", { images: [] });
  expect(promises.writeFile).toBeCalledWith("./testFile.svg", "renderedOutput");
});
it("should extract external images ", async () => {
  const dotInput = `digraph G {a [image="https://nice.images/a"] ->b [image="https://nice.images/b"];}`;
  await WasmRenderer({ outputFile: "./testFile.svg", format: "svg" })(dotInput);
  expect(graphviz.dot).toBeCalledWith(dotInput, "svg", {
    images: [
      { path: "https://nice.images/a", height: "300px", width: "300px" },
      { path: "https://nice.images/b", height: "300px", width: "300px" },
    ],
  });
});
