import { EdgeAttributes } from "./generated/attributes";
import { RenderFunc } from "./render-function";
import { Node } from "./node";
declare type ArrayTwoOrMore<T> = {
    0: T;
    1: T;
} & Array<T>;
export declare type EdgeChain = {
    nodes: ArrayTwoOrMore<Node>;
    attributes?: EdgeAttributes;
};
export declare const edges: (edgesArray: EdgeChain[]) => RenderFunc[];
export {};
