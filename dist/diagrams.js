"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDiagram = exports.initDiagram = exports.asCluster = exports.styled = exports.dg = exports.diagram = exports.createSubDiagram = exports.ext = exports.providers = void 0;
const aws = __importStar(require("./providers/generated/aws/index"));
const alibabacloud = __importStar(require("./providers/generated/alibabacloud/index"));
const azure = __importStar(require("./providers/generated/azure/index"));
const elastic = __importStar(require("./providers/generated/elastic/index"));
const firebase = __importStar(require("./providers/generated/firebase/index"));
const gcp = __importStar(require("./providers/generated/gcp/index"));
const generic = __importStar(require("./providers/generated/generic/index"));
const k8s = __importStar(require("./providers/generated/k8s/index"));
const oci = __importStar(require("./providers/generated/oci/index"));
const onprem = __importStar(require("./providers/generated/onprem/index"));
const openstack = __importStar(require("./providers/generated/openstack/index"));
const outscale = __importStar(require("./providers/generated/outscale/index"));
const programming = __importStar(require("./providers/generated/programming/index"));
const saas = __importStar(require("./providers/generated/saas/index"));
const graph_1 = require("./graph");
const render_dot_1 = require("./graph/render-dot");
exports.providers = {
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
    rankdir: "LR",
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
const mapOperatorsToStyle = {
    ">>": {},
    "<<": { dir: "back" },
    "-": { arrowtail: "none", arrowhead: "none" },
};
const mergeEdges = (leftSide, rightSide) => {
    let outArray = [];
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
const createEdgeChains = (nodes, edgeAtts) => {
    const nodeArrays = nodes.map((value) => Array.isArray(value) ? value : [value]);
    const singleEdges = [];
    // Create all single edges e.g.:
    // a   d   f      [a,d][a,e][b,d]...[e,f]
    // b   e
    // c
    for (let i = 0; i < nodeArrays.length - 1; i++) {
        singleEdges.push(nodeArrays[i].flatMap((nodeA) => nodeArrays[i + 1].map((nodeB) => [nodeA, nodeB])));
    }
    // Merge possible edges [a,d,f], [a,e,f], [b,d]
    const mergedEdges = singleEdges.slice(1).reduce((acc, value) => {
        return mergeEdges(acc, value);
    }, singleEdges[0]);
    // Create render functions
    return graph_1.edges(mergedEdges.map((mergedEdge) => ({
        nodes: mergedEdge,
        attributes: edgeAtts,
    })));
};
const createNodes = (inputNodes) => {
    const internalNodes = inputNodes.flat(1).filter((node) => !node.isExternal);
    const nodesToRender = new Set(internalNodes);
    return graph_1.nodes(...nodesToRender);
};
const ext = (nodes) => {
    if (!Array.isArray(nodes)) {
        return Object.assign(Object.assign({}, nodes), { isExternal: true });
    }
    return nodes.map((node) => (Object.assign(Object.assign({}, node), { isExternal: true })));
};
exports.ext = ext;
const createSubDiagram = (edgeAttributes) => (operators, ...nodes) => {
    const sanitizedOperators = operators
        .map((operator) => operator.replace(/\s/g, ""))
        .filter((operator) => operator !== "");
    if (nodes.length !== sanitizedOperators.length + 1) {
        throw Error("Invalid edge input: number of nodes must be equal to number of edges + 1");
    }
    const invalidEdges = sanitizedOperators.filter((operator) => !Object.keys(mapOperatorsToStyle).includes(operator));
    if (invalidEdges.length > 0) {
        throw Error(`Invalid edge input: ${invalidEdges} are invalid edges`);
    }
    let renderFuncs = createNodes(nodes);
    if (sanitizedOperators.length <= 0) {
        return renderFuncs;
    }
    let startIndex = 0;
    let lastOperator = sanitizedOperators[0];
    sanitizedOperators.forEach((operator, index) => {
        if (operator !== lastOperator) {
            renderFuncs = [
                ...renderFuncs,
                ...createEdgeChains(nodes.slice(startIndex, index + 1), Object.assign(Object.assign({}, (edgeAttributes ? edgeAttributes : {})), mapOperatorsToStyle[lastOperator])),
            ];
            lastOperator = operator;
            startIndex = index;
        }
    });
    return [
        ...renderFuncs,
        ...createEdgeChains(nodes.slice(startIndex, sanitizedOperators.length + 1), Object.assign(Object.assign({}, (edgeAttributes ? edgeAttributes : {})), mapOperatorsToStyle[lastOperator])),
    ];
};
exports.createSubDiagram = createSubDiagram;
exports.diagram = exports.createSubDiagram();
exports.dg = exports.diagram;
exports.styled = exports.createSubDiagram;
const asCluster = (graphAtts = {}, nodeAtts, edgeAtts) => (elements) => {
    const elementsInCluster = graph_1.cluster()(elements);
    return ((props = {}) => {
        // We start with depth 1 as 0 is the root digraph
        const clusterDepth = props.clusterDepth
            ? props.clusterDepth + 1
            : 1;
        return elementsInCluster(Object.assign(Object.assign(Object.assign({}, defaultClusterGraphAttributes), {
            bgcolor: clusterBackgroundColors[(clusterDepth - 1) % clusterBackgroundColors.length],
        }), graphAtts), nodeAtts, edgeAtts)(Object.assign(Object.assign({}, props), { clusterDepth }));
    });
};
exports.asCluster = asCluster;
const initDiagram = (label, direction) => (diagram) => {
    return graph_1.graph(false)("diagrams")(diagram())(Object.assign(Object.assign({}, defaultGraphAttributes), Object.assign(Object.assign({}, (direction ? { rankdir: direction } : {})), { label })), defaultNodeAttributes, defaultEdgeAttributes)();
};
exports.initDiagram = initDiagram;
const createDiagram = ({ label, direction, outformat = "png", filename = `${label}.${outformat}`, graphAttr, nodeAttr, edgeAttr, renderer = render_dot_1.CliRenderer, }) => (elements) => __awaiter(void 0, void 0, void 0, function* () {
    const dotInput = yield graph_1.graph(false)("diagrams")(elements)(Object.assign(Object.assign(Object.assign({}, graphAttr), defaultGraphAttributes), Object.assign(Object.assign({}, (direction ? { rankdir: direction } : {})), { label })), Object.assign(Object.assign({}, nodeAttr), defaultNodeAttributes), Object.assign(Object.assign({}, edgeAttr), defaultEdgeAttributes))();
    return renderer({ outputFile: filename, format: outformat })(dotInput);
});
exports.createDiagram = createDiagram;
