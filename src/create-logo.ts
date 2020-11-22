import * as diagrams from "./diagrams";
import { renderDot } from "./render-dot";

const {
  providers: {
    programming: {
      language: { typescript },
    },
  },
  initDiagram,
  ext,
  dg,
  asCluster,
} = diagrams;

const logo = () => {
  const tsNode = typescript("");
  const atts= {
    labelloc: "c",
    fontsize: "24",
    fontname: "Ubuntu Mono",
    pencolor: "white",
    fillcolor:"#ECE8F6",
    style:"filled"
  }
  const aNode = {
    id: "aNode",
    attributes: {
      ...atts,
      label: "Dia",
    },
  };
  const bNode = {
    id: "bNode",
    attributes: {
      ...atts,
      label: "Grams",
    },
  };

  return [
    asCluster()([
      ...dg`${ext([aNode, bNode])}>>${tsNode}`,
      asCluster()(dg`${[aNode,bNode]}`),
    ]),
  ];
};

const input = initDiagram("", "LR")(logo);

console.log(input);

renderDot({
  outputFile: "./output/logo.png",
  input: input,
  format: "png",
})
  .then((outPut) => console.log(outPut))
  .catch((reason) => console.log(reason));
