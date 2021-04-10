"use strict";
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
exports.cluster = exports.subgraph = exports.graph = void 0;
const render_function_1 = require("./render-function");
const graph = (isSubgraph) => (id) => (elements) => (graphAtts = null, nodeAtts = null, edgeAtts = null) => {
    return (props) => __awaiter(void 0, void 0, void 0, function* () {
        return `${isSubgraph ? "subgraph" : "digraph"} "${id}" {${graphAtts
            ? Object.entries(graphAtts)
                .map(([key, value]) => `${key} = "${value}";`)
                .join(" ")
            : ""} ${nodeAtts
            ? `node [ ${Object.entries(nodeAtts)
                .map(([key, value]) => `${key} = "${value}" `)
                .join(" ")} ];`
            : ""} ${edgeAtts
            ? `edge [ ${Object.entries(edgeAtts)
                .map(([key, value]) => `${key} = "${value}" `)
                .join(" ")} ];`
            : ""}
      ${(yield Promise.all(elements.map((renderFunction) => renderFunction(props)))).join("")}}`;
    });
};
exports.graph = graph;
exports.subgraph = exports.graph(true);
const graphIdGenerator = render_function_1.generateUniqueIds();
const cluster = () => exports.subgraph(`cluster_${graphIdGenerator.next().value}`);
exports.cluster = cluster;
