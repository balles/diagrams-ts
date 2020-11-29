import * as diagrams from "../src/diagrams";
import { renderDot } from "../src/graph/render-dot";

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
  const atts = {
    labelloc: "c",
    fontsize: 24,
    fontname: "Ubuntu Mono",
    pencolor: "white",
    fillcolor: "#ECE8F6",
    style: "filled",
  };
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
      asCluster()(dg`${[aNode, bNode]}`),
    ]),
  ];
};

async () => {
  const input = await initDiagram("", "LR")(logo);

  console.log(input);

  await renderDot({
    outputFile: "./generated-assets/logo.png",
    input: input,
    format: "png",
  });
};
