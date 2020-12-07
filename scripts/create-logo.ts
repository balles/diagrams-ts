import { initDiagram, ext, dg, asCluster, DiagramNode } from "../src/diagrams";
import { renderDot } from "../src/graph/render-dot";

const logo = () => {
  const atts = {
    labelloc: "c",
    fontsize: 24,
    fontname: "Ubuntu Mono",
    fontcolor: "#7B8894",
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
  const tsNode: DiagramNode = {
    id: "tsNode",
    attributes: {
      ...atts,
      label: "TS",
      fontcolor: "grey",
    },
  };

  return [
    asCluster()([
      ...dg`${ext([aNode, bNode])}>>${tsNode}`,
      asCluster()(dg`${[aNode, bNode]}`),
    ]),
  ];
};

(async () => {
  const input = await initDiagram("", "LR")(logo);

  console.log(input);

  await renderDot({
    outputFile: "./generated-assets/logo.png",
    input: input,
    format: "png",
  });
})();
