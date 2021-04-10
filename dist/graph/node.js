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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUniqueNodeId = exports.nodes = exports.retrieveImage = exports.findOrDownload = void 0;
const render_function_1 = require("./render-function");
const node_fetch_1 = __importDefault(require("node-fetch"));
const stream_1 = require("stream");
const util_1 = require("util");
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const streamPipeline = util_1.promisify(stream_1.pipeline);
const imageCacheDir = path_1.default.join(__dirname, "../../image-cache");
const encodeBase64 = (input) => Buffer.from(input).toString("base64");
const openCachePromises = {};
const mapMimeToExtension = {
    "image/png": "png",
    "image/jpeg": "jpg",
};
const downloadImage = (url, imagePathWithoutExtension) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield node_fetch_1.default(url);
    if (!response.ok) {
        throw Error(`Failed to download ${url}: ${response.statusText}`);
    }
    const mime = response.headers.get("content-type");
    if (!Object.keys(mapMimeToExtension).includes(mime || "")) {
        throw Error(`Invalid mime type: ${mime}`);
    }
    const imagePath = `${imagePathWithoutExtension}.${mapMimeToExtension[mime]}`;
    yield streamPipeline(response.body, fs_1.createWriteStream(imagePath));
    return imagePath;
});
const findOrDownload = (url, imagePathWithoutExtension) => __awaiter(void 0, void 0, void 0, function* () {
    const cachedFile = (yield fs_1.promises.readdir(imageCacheDir)).find((entry) => entry.startsWith(imagePathWithoutExtension));
    if (cachedFile) {
        return path_1.default.join(imageCacheDir, cachedFile);
    }
    return downloadImage(url, path_1.default.join(imageCacheDir, imagePathWithoutExtension));
});
exports.findOrDownload = findOrDownload;
const retrieveImage = (attributes) => __awaiter(void 0, void 0, void 0, function* () {
    if (!attributes.image) {
        throw Error(`For downloading an image attribute "image" must be set.`);
    }
    const imagePathWithoutExtension = `${encodeBase64(attributes.image)}`;
    if (!openCachePromises[imagePathWithoutExtension]) {
        openCachePromises[imagePathWithoutExtension] = exports.findOrDownload(attributes.image, imagePathWithoutExtension);
    }
    const imagePath = yield openCachePromises[imagePathWithoutExtension];
    openCachePromises[imagePathWithoutExtension] = null;
    return Object.assign(Object.assign({}, attributes), { image: imagePath });
});
exports.retrieveImage = retrieveImage;
const nodes = (...nodes) => {
    return nodes.map((nodeInstance) => () => __awaiter(void 0, void 0, void 0, function* () {
        return `"${nodeInstance.id}" ${nodeInstance.attributes && Object.keys(nodeInstance.attributes).length > 0
            ? `[ ${Object.entries(nodeInstance.retrieveImage
                ? yield exports.retrieveImage(nodeInstance.attributes)
                : nodeInstance.attributes)
                .map(([key, value]) => `${key}="${value}"`)
                .join(" ")} ]`
            : ""}; `;
    }));
};
exports.nodes = nodes;
const nodeIdGenerator = render_function_1.generateUniqueIds();
const getUniqueNodeId = () => {
    return `a${nodeIdGenerator.next().value}`;
};
exports.getUniqueNodeId = getUniqueNodeId;
