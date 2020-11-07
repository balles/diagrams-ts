import { renderDot } from "./src/render-dot";

const dotInput = `digraph G {
    "Hello" [ color = "blue", style = "filled" ];
    "World";
    "Hello" -> "World" [ color = "red" ];
    "And" -> "Bye";
}`;

renderDot({
  outputFile: "./output/test.webp",
  input: dotInput,
  format: "webp",
}).then(outPut=>console.log(outPut)).catch((reason) => console.log(reason));
