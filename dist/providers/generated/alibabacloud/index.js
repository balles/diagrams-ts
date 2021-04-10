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
exports.web = exports.storage = exports.security = exports.network = exports.iot = exports.database = exports.compute = exports.communication = exports.application = exports.analytics = void 0;
const analytics = __importStar(require("./analytics"));
exports.analytics = analytics;
const application = __importStar(require("./application"));
exports.application = application;
const communication = __importStar(require("./communication"));
exports.communication = communication;
const compute = __importStar(require("./compute"));
exports.compute = compute;
const database = __importStar(require("./database"));
exports.database = database;
const iot = __importStar(require("./iot"));
exports.iot = iot;
const network = __importStar(require("./network"));
exports.network = network;
const security = __importStar(require("./security"));
exports.security = security;
const storage = __importStar(require("./storage"));
exports.storage = storage;
const web = __importStar(require("./web"));
exports.web = web;
