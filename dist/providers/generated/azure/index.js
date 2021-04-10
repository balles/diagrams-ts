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
exports.web = exports.storage = exports.security = exports.network = exports.mobile = exports.ml = exports.migration = exports.iot = exports.integration = exports.identity = exports.general = exports.devops = exports.database = exports.compute = exports.analytics = void 0;
const analytics = __importStar(require("./analytics"));
exports.analytics = analytics;
const compute = __importStar(require("./compute"));
exports.compute = compute;
const database = __importStar(require("./database"));
exports.database = database;
const devops = __importStar(require("./devops"));
exports.devops = devops;
const general = __importStar(require("./general"));
exports.general = general;
const identity = __importStar(require("./identity"));
exports.identity = identity;
const integration = __importStar(require("./integration"));
exports.integration = integration;
const iot = __importStar(require("./iot"));
exports.iot = iot;
const migration = __importStar(require("./migration"));
exports.migration = migration;
const ml = __importStar(require("./ml"));
exports.ml = ml;
const mobile = __importStar(require("./mobile"));
exports.mobile = mobile;
const network = __importStar(require("./network"));
exports.network = network;
const security = __importStar(require("./security"));
exports.security = security;
const storage = __importStar(require("./storage"));
exports.storage = storage;
const web = __importStar(require("./web"));
exports.web = web;
