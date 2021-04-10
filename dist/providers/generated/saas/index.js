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
exports.social = exports.recommendation = exports.media = exports.logging = exports.identity = exports.filesharing = exports.chat = exports.cdn = exports.analytics = exports.alerting = void 0;
const alerting = __importStar(require("./alerting"));
exports.alerting = alerting;
const analytics = __importStar(require("./analytics"));
exports.analytics = analytics;
const cdn = __importStar(require("./cdn"));
exports.cdn = cdn;
const chat = __importStar(require("./chat"));
exports.chat = chat;
const filesharing = __importStar(require("./filesharing"));
exports.filesharing = filesharing;
const identity = __importStar(require("./identity"));
exports.identity = identity;
const logging = __importStar(require("./logging"));
exports.logging = logging;
const media = __importStar(require("./media"));
exports.media = media;
const recommendation = __importStar(require("./recommendation"));
exports.recommendation = recommendation;
const social = __importStar(require("./social"));
exports.social = social;
