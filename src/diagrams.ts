import * as aws from "./providers/generated/aws/index";
import * as alibabacloud from "./providers/generated/alibabacloud/index";
import * as azure from "./providers/generated/azure/index";
import * as elastic from "./providers/generated/elastic/index";
import * as firebase from "./providers/generated/firebase/index";
import * as gcp from "./providers/generated/gcp/index";
import * as generic from "./providers/generated/generic/index";
import * as k8s from "./providers/generated/k8s/index";
import * as oci from "./providers/generated/oci/index";
import * as onprem from "./providers/generated/onprem/index";
import * as openstack from "./providers/generated/openstack/index";
import * as outscale from "./providers/generated/outscale/index";
import * as programming from "./providers/generated/programming/index";
import * as saas from "./providers/generated/saas/index";
import {
  graph,
  nodes,
  RenderFunc,
  EdgeChain,
  edges as graphEdges,
  Node,
  EdgeAttributes,
} from "./graph";

const defaultGraphAttributes = {
  pad: 2.0,
  splines: "ortho",
  nodesep: 0.6,
  ranksep: 0.75,
  fontname: "Sans-Serif",
  fontsize: 15,
  fontcolor: "#2D3436",
  rankdir: "LR", // diagrams: direction
  curvestyle: "ortho",
  label: "my diagram",
};
const defaultNodeAttributes = {
  shape: "box",
  style: "rounded",
  fixedsize: true,
  width: 1.4,
  height: 1.4,
  labelloc: "b",
  imagepos: "tc",
  imagescale: true,
  fontname: "Sans-Serif",
  fontsize: 13,
  fontcolor: "#2D3436",
};

const defaultEdgeAttributes = {
  color: "#7B8894",
};

type edgeTemplateInput = Node | Node[];

const mapOperatorsToStyle = {
  ">>": {},
  "<<": { dir: "back" },
  "-": { arrowtail: "none", arrowhead: "none" },
};

// a     d     e
//
// b           f
//
// c
// Algorithm: highest count of nodes All nodes , a -> d -> e, b -> d -> f, c -> d
// This case is easy: Left to right

// a  ->  d -> f
//
// b  ->  e
//
// c

// First step: connect all nodes for from 1 and 2, here: [a,d],[a,e],[b,e]...[c,e]
// continue till node/array n-1 and n, here: [d,f],[e,f]
// Join edges where possible: last node == first node  (for the joins use nodeIds)

const mergeEdges = (leftSide: Node[][], rightSide: Node[][]): Node[][] => {
  let outArray: Node[][] = [];
  for (let i = 0; i < leftSide.length; i++) {
    const leftEdge = leftSide[i];
    let found = false;
    for (let j = 0; j < rightSide.length; j++) {
      const rightEdge = rightSide[j];
      if (leftEdge[leftEdge.length - 1].id === rightEdge[0].id) {
        outArray = [...outArray, [...leftEdge, rightEdge[1]]];
        rightSide.splice(j, 1);
        found = true;
        break;
      }
    }
    if (!found) {
      outArray = [...outArray, leftEdge];
    }
  }
  return outArray;
};

const createEdgeChains = (
  nodes: edgeTemplateInput[],
  edgeAtts: EdgeAttributes
) => {
  const nodeArrays = nodes.map((value) =>
    Array.isArray(value) ? value : [value]
  );
  const singleEdges = [];
  // Create all single edges e.g.:
  // a   d   f      [a,d][a,e][b,d]...[e,f]
  // b   e
  // c
  for (let i = 0; i < nodeArrays.length - 1; i++) {
    singleEdges.push(
      nodeArrays[i].flatMap((nodeA) =>
        nodeArrays[i + 1].map((nodeB) => [nodeA, nodeB])
      )
    );
  }
  // Merge possible edges [a,d,f], [a,e,f], [b,d]
  const mergedEdges = singleEdges.slice(1).reduce((acc, value) => {
    return mergeEdges(acc, value);
  }, singleEdges[0]);
  // Create render functions
  return graphEdges(
    mergedEdges.map((mergedEdge) => ({
      nodes: mergedEdge,
      attributes: edgeAtts,
    })) as EdgeChain[]
  );
};

type Operator = "<<" | ">>" | "-";

export const edges = (
  operators: TemplateStringsArray,
  ...nodes: edgeTemplateInput[]
): RenderFunc[] => {
  const sanitizedOperators = operators
    .map((operator) => operator.replace(/\s/, ""))
    .filter((operator) => operator !== "");
  if (sanitizedOperators.length <= 0) {
    return [];
  }
  if (nodes.length !== sanitizedOperators.length + 1) {
    throw Error(
      "Invalid edge input: number of nodes must be equal to number of edges + 1"
    );
  }
  const invalidEdges = sanitizedOperators.filter(
    (operator) => !Object.keys(mapOperatorsToStyle).includes(operator)
  );
  if (invalidEdges.length > 0) {
    throw Error(`Invalid edge input: ${invalidEdges} are invalid edges`);
  }

  // TODO Reduce, use Edgechains and use correct edge mapping.
  // TODO Map operators correctly (chaining,arrays! >>)
  // TODO use flatMap (doesn't work with ts-node right now)
  // TODO split by operator use sanitizedOperator)
  let renderFuncs: RenderFunc[] = [];
  let startIndex = 0;
  let lastOperator = sanitizedOperators[0];
  sanitizedOperators.forEach((operator, index) => {
    if (operator !== lastOperator) {
      renderFuncs = [
        ...renderFuncs,
        ...createEdgeChains(
          nodes.slice(startIndex, index + 1),
          mapOperatorsToStyle[lastOperator as Operator]
        ),
      ];
      lastOperator = operator;
      startIndex = index;
    }
  });

  // Nodes 0  Nodes 1 Nodes 2
  // >> 0 - 1
  // 0: do nothing
  // 1:  edge with (nodes 0, nodes 1) ==> lastOperator = -  startIndex=1

  return [
    ...renderFuncs,
    ...createEdgeChains(
      nodes.slice(startIndex, sanitizedOperators.length + 1),
      mapOperatorsToStyle[
        sanitizedOperators[sanitizedOperators.length - 1] as Operator
      ]
    ),
  ];
};

// TODO: what does "show" do?
export const initDiagram = (label?: string, show?: boolean) => (
  diagram: () => RenderFunc[]
): string => {
  return graph(false)("diagrams")(diagram())(
    defaultGraphAttributes,
    defaultNodeAttributes,
    defaultEdgeAttributes
  )();
};

export {
  aws,
  alibabacloud,
  azure,
  elastic,
  firebase,
  gcp,
  generic,
  k8s,
  oci,
  onprem,
  openstack,
  outscale,
  programming,
  saas,
  nodes,
};
