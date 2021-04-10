"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDotGraph = void 0;
const graph_1 = require("./graph");
__exportStar(require("./generated/attributes"), exports);
__exportStar(require("./render-function"), exports);
__exportStar(require("./node"), exports);
__exportStar(require("./edge"), exports);
__exportStar(require("./graph"), exports);
const createDotGraph = (elements) => {
    return graph_1.graph(false)("g")(elements)()();
};
exports.createDotGraph = createDotGraph;
