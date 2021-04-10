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
Object.defineProperty(exports, "__esModule", { value: true });
exports.virtualization = exports.storage = exports.place = exports.os = exports.network = exports.device = exports.database = exports.compute = exports.blank = void 0;
const blank = __importStar(require("./blank"));
exports.blank = blank;
const compute = __importStar(require("./compute"));
exports.compute = compute;
const database = __importStar(require("./database"));
exports.database = database;
const device = __importStar(require("./device"));
exports.device = device;
const network = __importStar(require("./network"));
exports.network = network;
const os = __importStar(require("./os"));
exports.os = os;
const place = __importStar(require("./place"));
exports.place = place;
const storage = __importStar(require("./storage"));
exports.storage = storage;
const virtualization = __importStar(require("./virtualization"));
exports.virtualization = virtualization;
