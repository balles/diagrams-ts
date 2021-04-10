import { NodeAttributes, EdgeAttributes, GraphAttributes, ClusterAttributes } from "./generated/attributes";
import { RenderFunc } from "./render-function";
export declare const graph: (isSubgraph: boolean) => (id: string) => (elements: RenderFunc[]) => (graphAtts?: GraphAttributes | ClusterAttributes | null, nodeAtts?: NodeAttributes | null, edgeAtts?: EdgeAttributes | null) => RenderFunc;
export declare const subgraph: (id: string) => (elements: RenderFunc[]) => (graphAtts?: GraphAttributes | ClusterAttributes | null, nodeAtts?: NodeAttributes | null, edgeAtts?: EdgeAttributes | null) => RenderFunc;
export declare const cluster: () => (elements: RenderFunc[]) => (graphAtts?: GraphAttributes | ClusterAttributes | null, nodeAtts?: NodeAttributes | null, edgeAtts?: EdgeAttributes | null) => RenderFunc;
