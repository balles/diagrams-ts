/* eslint @typescript-eslint/no-var-requires: 0 */

const { JSDOM } = require("jsdom");
const fetch = require("node-fetch");
const {
  promises: { writeFile },
} = require("fs");

const validateTableHead = (tableHead) => {
  return (
    tableHead.cells[0].textContent === "Name" &&
    tableHead.cells[1].textContent === "Used By" &&
    tableHead.cells[2].textContent === "Type" &&
    tableHead.cells[3].textContent === "Default" &&
    tableHead.cells[4].textContent === "Minimum" &&
    tableHead.cells[5].textContent === "Notes"
  );
};

const getGraphvizTypes = (cell) => {
  const nodesArray = Object.values(cell.childNodes);
  return nodesArray
    .map((childNode) => childNode.textContent)
    .filter((value) => value != "");
};

(async () => {
  const response = await fetch("https://graphviz.org/doc/info/attrs.html");
  const {
    window: { document },
  } = new JSDOM(await response.text());
  const [tableHead, ...attRows] = document.getElementsByTagName(
    "table"
  )[0].rows;
  if (!validateTableHead(tableHead)) {
    throw new Error("Unexpected table header");
  }

  const attributes = attRows.reduce(
    (acc, { cells }) => {
      const attribute = {
        name: cells[0].textContent,
        graphVizTypes: getGraphvizTypes(cells[2]),
        default: cells[3].textContent,
        minimum: cells[4].textContent,
        notes: cells[5].textContent,
      };
      const usedBy = cells[1].textContent;
      if (usedBy.includes("G")) {
        acc.graph.push(attribute);
      }
      if (usedBy.includes("E")) {
        acc.edge.push(attribute);
      }
      if (usedBy.includes("N")) {
        acc.node.push(attribute);
      }
      if (usedBy.includes("C")) {
        acc.cluster.push(attribute);
      }
      return acc;
    },
    { edge: [], node: [], graph: [], cluster: [] }
  );
  await writeFile(
    "./scripts/scraped-attributes.json",
    JSON.stringify(attributes)
  );
})().catch((reason) => console.log(reason));
