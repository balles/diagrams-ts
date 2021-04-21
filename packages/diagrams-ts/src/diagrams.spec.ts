import { createDiagram, CreateDiagramArguments } from "diagrams-ts";

import { createDiagramCore } from "@diagrams-ts/core";
import { Renderer, RenderFunc } from "@diagrams-ts/graphviz-functional-ts";

jest.mock("@diagrams-ts/core", () => ({
  createDiagramCore: jest.fn(),
}));

const mockRenderer = jest.fn() as Renderer<string>;

const mockElements = [jest.fn()] as RenderFunc[];

beforeEach(() => {
  (createDiagramCore as jest.Mock).mockClear();
  (mockRenderer as jest.Mock).mockClear();
});
it("should pass the parameters to the core function", async () => {
  (createDiagramCore as jest.Mock).mockReturnValue(async () => "my graph");

  const createArguments: CreateDiagramArguments<string> = {
    label: "myLabel",
    direction: "TB",
    outformat: "png",
    filename: "my-file.png",
    graphAttr: { bgcolor: "#DDDDDD" },
    nodeAttr: { color: "#CCCCCC" },
    edgeAttr: { color: "#BBBBBB" },
    renderer: mockRenderer,
    dotPath: "dot-special-path",
    nodePlugins: [],
  };

  expect(await createDiagram(createArguments)(mockElements)).toEqual(
    "my graph"
  );
  expect(createDiagramCore as jest.Mock).toHaveBeenCalledWith({
    label: "myLabel",
    direction: "TB",
    outformat: "png",
    filename: "my-file.png",
    graphAttr: { bgcolor: "#DDDDDD" },
    nodeAttr: { color: "#CCCCCC" },
    edgeAttr: { color: "#BBBBBB" },
    renderer: mockRenderer,
    dotPath: "dot-special-path",
    nodePlugins: [],
  });
});
it("should remove the plugins for retrieveImage", async () => {
  (createDiagramCore as jest.Mock).mockReturnValue(async () => "my graph");

  const createArguments: CreateDiagramArguments<string> = {
    label: "my-label",
    retrieveImage: false,
  };

  await createDiagram(createArguments)(mockElements);

  expect((createDiagramCore as jest.Mock).mock.calls[0][0]).toMatchObject({
    nodePlugins: [],
  });
});
