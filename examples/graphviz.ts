import { edges, createDotGraph } from "@diagrams-ts/graphviz-functional-ts";

createDotGraph([
  ...edges([
    { nodes: [{ id: "a1" }, { id: "b2" }] },
    { nodes: [{ id: "a3" }, { id: "b4" }] },
  ]),
]).then(console.log);
