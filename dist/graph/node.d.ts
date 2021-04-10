import { NodeAttributes } from "./generated/attributes";
import { RenderFunc } from "./render-function";
export declare type Node = {
    id: string;
    attributes?: NodeAttributes;
    retrieveImage?: boolean;
};
export declare const findOrDownload: (url: string, imagePathWithoutExtension: string) => Promise<string>;
export declare const retrieveImage: (attributes: NodeAttributes) => Promise<NodeAttributes>;
export declare const nodes: (...nodes: Node[]) => RenderFunc[];
export declare const getUniqueNodeId: () => string;
