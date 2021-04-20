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
  cluster,
  EdgeAttributes,
  EdgeChain,
  edges,
  graph,
  GraphAttributes,
  Node,
  NodeAttributes,
  NodeAttributesPlugin,
  nodes,
  Renderer,
  RenderFunc,
  RenderProperties,
} from "@diagrams-ts/graphviz-functional-ts";
import { Stream } from "stream";
import { CliRenderer } from "@diagrams-ts/graphviz-cli-renderer";
import { LocalImageCachePlugin } from "@diagrams-ts/local-image-cache-plugin";

export const providers = {
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
};

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
  label: "",
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

const defaultClusterGraphAttributes = {
  shape: "box",
  style: "rounded",
  labeljust: "l",
  pencolor: "#AEB6BE",
  fontname: "Sans-Serif",
  fontsize: 12,
};

const clusterBackgroundColors = ["#E5F5FD", "#EBF3E7", "#ECE8F6", "#FDF7E3"];

export type DiagramNode = Node & { isExternal?: boolean };
export type edgeTemplateInput = DiagramNode | DiagramNode[];

const mapOperatorsToStyle = {
  ">>": {},
  "<<": { dir: "back" },
  "-": { arrowtail: "none", arrowhead: "none" },
};

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
  return [...outArray, ...rightSide];
};

// exported mainly for tests
export const createEdgeChains = (
  nodes: edgeTemplateInput[],
  edgeAtts: EdgeAttributes
): RenderFunc[] => {
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
  return mergedEdges?.length > 0
    ? edges(
        mergedEdges.map((mergedEdge) => ({
          nodes: mergedEdge,
          attributes: edgeAtts,
        })) as EdgeChain[]
      )
    : [];
};

const createNodes = (inputNodes: edgeTemplateInput[]): RenderFunc[] => {
  const internalNodes = inputNodes.flat(1).filter((node) => !node.isExternal);
  const nodesToRender = new Set(internalNodes);
  return nodes(...nodesToRender);
};

export const ext = (nodes: edgeTemplateInput): edgeTemplateInput => {
  if (!Array.isArray(nodes)) {
    return { ...nodes, isExternal: true };
  }
  return nodes.map((node) => ({ ...node, isExternal: true }));
};

type Operator = "<<" | ">>" | "-";

export const createSubDiagram = (edgeAttributes?: EdgeAttributes) => (
  operators: TemplateStringsArray,
  ...nodes: edgeTemplateInput[]
): RenderFunc[] => {
  const sanitizedOperators = operators
    .map((operator) => operator.replace(/\s/g, ""))
    .filter((operator) => operator !== "");

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
  let renderFuncs: RenderFunc[] = createNodes(nodes);
  if (sanitizedOperators.length <= 0) {
    return renderFuncs;
  }
  let startIndex = 0;
  let lastOperator = sanitizedOperators[0];
  sanitizedOperators.forEach((operator, index) => {
    if (operator !== lastOperator) {
      renderFuncs = [
        ...renderFuncs,
        ...createEdgeChains(nodes.slice(startIndex, index + 1), {
          ...(edgeAttributes ? edgeAttributes : {}),
          ...mapOperatorsToStyle[lastOperator as Operator],
        }),
      ];
      lastOperator = operator;
      startIndex = index;
    }
  });

  return [
    ...renderFuncs,
    ...createEdgeChains(
      nodes.slice(startIndex, sanitizedOperators.length + 1),
      {
        ...(edgeAttributes ? edgeAttributes : {}),
        ...mapOperatorsToStyle[lastOperator as Operator],
      }
    ),
  ];
};

export const diagram = createSubDiagram();
export const dg = diagram;
export const styled = createSubDiagram;

export const asCluster = (
  graphAtts: GraphAttributes = {},
  nodeAtts?: NodeAttributes,
  edgeAtts?: EdgeAttributes
) => (elements: RenderFunc[]): RenderFunc => {
  const elementsInCluster = cluster()(elements);
  return ((props: RenderProperties = {}) => {
    // We start with depth 1 as 0 is the root digraph
    const clusterDepth = props.clusterDepth
      ? (props.clusterDepth as number) + 1
      : 1;
    return elementsInCluster(
      {
        ...defaultClusterGraphAttributes,
        ...{
          bgcolor:
            clusterBackgroundColors[
              (clusterDepth - 1) % clusterBackgroundColors.length
            ],
        },
        ...graphAtts,
      },
      nodeAtts,
      edgeAtts
    )({ ...props, clusterDepth });
  }) as RenderFunc;
};

export const initDiagram = (label: string, direction?: string) => (
  diagram: () => RenderFunc[]
): Promise<string> => {
  return graph(false)("diagrams")(diagram())(
    {
      ...defaultGraphAttributes,
      ...{ ...(direction ? { rankdir: direction } : {}), label },
    },
    defaultNodeAttributes,
    defaultEdgeAttributes
  )();
};

//graph_attr, node_attr and edge_attr

export type CreateDiagramArguments<T> = {
  label: string;
  direction?: string;
  outformat?: string;
  filename?: string;
  graphAttr?: GraphAttributes;
  nodeAttr?: NodeAttributes;
  edgeAttr?: EdgeAttributes;
  renderer?: Renderer<T>;
  dotPath?: string;
  nodePlugins?: NodeAttributesPlugin[];
};

export const createDiagram = ({
  label,
  direction,
  outformat = "png",
  filename = `${label}.${outformat}`,
  graphAttr,
  nodeAttr,
  edgeAttr,
  dotPath,
  renderer = CliRenderer as Renderer<string>,
  nodePlugins = [LocalImageCachePlugin],
}: CreateDiagramArguments<string | Stream>) => async (
  elements: RenderFunc[]
): Promise<string | Stream> => {
  const dotInput = await graph(false)("diagrams")(elements)(
    {
      ...graphAttr,
      ...defaultGraphAttributes,
      ...{ ...(direction ? { rankdir: direction } : {}), label },
    },
    {
      ...nodeAttr,
      ...defaultNodeAttributes,
    },
    {
      ...edgeAttr,
      ...defaultEdgeAttributes,
    }
  )({ nodePlugins });
  return renderer({
    outputFile: filename,
    format: outformat,
    dotPath,
  })(dotInput);
};
