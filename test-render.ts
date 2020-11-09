import { createDotGraph, Node, edge, nodes, RenderFunc} from "./src/graph";
import { renderDot } from "./src/render-dot";

const graph = (): RenderFunc[] => {
  const helloNode: Node = { label: "Hello" };
  const worldNode: Node = { label: "World" };
  return [...nodes(helloNode,worldNode),edge(helloNode,worldNode)]
};

const dotInput = createDotGraph(graph);

console.log(dotInput);

renderDot({
  outputFile: "./output/test.webp",
  input: dotInput,
  format: "webp",
})
  .then((outPut) => console.log(outPut))
  .catch((reason) => console.log(reason));
