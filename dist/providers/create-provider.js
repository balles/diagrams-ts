"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProvider = void 0;
const graph_1 = require("../graph");
const createProvider = (imagePath) => (label) => ({
    id: graph_1.getUniqueNodeId(),
    attributes: {
        label,
        shape: "none",
        image: imagePath,
        height: 1.4 + 0.2 * ([...label].filter((char) => char === "\n").length + 1),
    },
    retrieveImage: true,
});
exports.createProvider = createProvider;
