import {
  NodeAttributes,
  EdgeAttributes,
  GraphAttributes,
  ClusterAttributes,
} from "./generated/attributes";
import { RenderFunc, generateUniqueIds } from "./render-function";

export const graph = (isSubgraph: boolean) => (id: string) => (
  elements: RenderFunc[]
) => (
  graphAtts: GraphAttributes | ClusterAttributes | null = null,
  nodeAtts: NodeAttributes | null = null,
  edgeAtts: EdgeAttributes | null = null
): RenderFunc => {
  return async (props) =>
    `${isSubgraph ? "subgraph" : "digraph"} "${id}" {${
      graphAtts
        ? Object.entries(graphAtts)
            .map(([key, value]) => `${key} = "${value}";`)
            .join(" ")
        : ""
    } ${
      nodeAtts
        ? `node [ ${Object.entries(nodeAtts)
            .map(([key, value]) => `${key} = "${value}" `)
            .join(" ")} ];`
        : ""
    } ${
      edgeAtts
        ? `edge [ ${Object.entries(edgeAtts)
            .map(([key, value]) => `${key} = "${value}" `)
            .join(" ")} ];`
        : ""
    }
      ${(await Promise.all(elements.map((renderFunction) => renderFunction(props)))).join(
        ""
      )}}`;
};

export const subgraph = graph(true);

const graphIdGenerator = generateUniqueIds();

export const cluster = () =>
  subgraph(`cluster_${graphIdGenerator.next().value}`);
