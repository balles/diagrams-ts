import {
  createDiagramCore,
  createEdgeChains,
  diagram,
  edgeTemplateInput,
  passThroughRenderer,
  createProvider,
} from "./diagrams";

const testNode = createProvider("my-image.jpg");

const testRenderDiagram = createDiagramCore({
  label: "test",
  outformat: "svg",
  filename: "my-file.svg",
  renderer: passThroughRenderer,
});

describe("render a diagrams node", () => {
  it("should render all node attributes", async () => {
    const dot = await testRenderDiagram([...diagram`${testNode("Test")}`]);
    expect(dot).toMatch(
      /"a\d+" \[ label="Test" shape="none" image="my-image.jpg" height="1.9" \];/
    );
  });
  it("adds padding for multi-line label ", async () => {
    const dot = await testRenderDiagram([
      ...diagram`${testNode("Test\nNew Line")}`,
    ]);
    expect(dot).toMatch(
      /"a\d+" \[ label="Test\nNew Line" shape="none" image="my-image.jpg" height="2.3" \];/
    );
  });
});

describe("For the createEdgeChains function", () => {
  it("should ignore a single node", async () => {
    const input: edgeTemplateInput[] = [{ id: "a" }];
    const result = await Promise.all(
      createEdgeChains(input, {}).map(async (renderFunc) => renderFunc())
    );
    expect(result).toEqual([]);
  });

  it("should render a single edge", async () => {
    const input: edgeTemplateInput[] = [{ id: "a" }, { id: "b" }];
    const result = await Promise.all(
      createEdgeChains(input, {}).map(async (renderFunc) => renderFunc())
    );
    expect(result[0]).toEqual("a->b ;");
  });

  it("should render a decreasing edge count correct", async () => {
    const input: edgeTemplateInput[] = [
      [{ id: "a" }, { id: "b" }, { id: "c" }],
      [{ id: "d" }, { id: "e" }],
      { id: "f" },
    ];
    const result = (
      await Promise.all(
        createEdgeChains(input, {}).map(async (renderFunc) => renderFunc())
      )
    ).join(" ");
    expect(result).toEqual(`a->d->f ; a->e->f ; b->d ; b->e ; c->d ; c->e ;`);
  });

  it("should render an increasing edge count correct", async () => {
    const input: edgeTemplateInput[] = [
      { id: "a" },
      [{ id: "b" }, { id: "c" }],
      [{ id: "d" }, { id: "e" }, { id: "f" }],
    ];
    const result = (
      await Promise.all(
        createEdgeChains(input, {}).map(async (renderFunc) => renderFunc())
      )
    ).join(" ");
    expect(result).toEqual(`a->b->d ; a->c->d ; b->e ; b->f ; c->e ; c->f ;`);
  });

  it("should render an intermediating edge count correct", async () => {
    const input: edgeTemplateInput[] = [
      { id: "a" },
      [{ id: "b" }, { id: "c" }],
      [{ id: "d" }, { id: "e" }, { id: "f" }],
      [{ id: "g" }, { id: "h" }],
    ];
    const result = (
      await Promise.all(
        createEdgeChains(input, {}).map(async (renderFunc) => renderFunc())
      )
    ).join(" ");
    expect(result).toEqual(
      `a->b->d->g ; a->c->d->h ; b->e->g ; b->f->g ; c->e->h ; c->f->h ;`
    );
  });
});
