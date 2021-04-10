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
exports.renderDot = exports.CliRenderer = void 0;
const child_process_1 = require("child_process");
// TODO: add Types for format
// TODO: tests
const CliRenderer = ({ format, outputFile, }) => (input) => __awaiter(void 0, void 0, void 0, function* () {
    return exports.renderDot({ input, format, outputFile });
});
exports.CliRenderer = CliRenderer;
const renderDot = ({ format, outputFile, input, }) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        const dot = child_process_1.spawn("dot", [`-o${outputFile}`, `-T${format}`]);
        dot.stdout.on("data", function (msg) {
            console.log(`dot: ${msg.toString()}`);
        });
        dot.stderr.on("data", (data) => __awaiter(void 0, void 0, void 0, function* () {
            reject(data.toString());
        }));
        dot.on("exit", (code) => {
            if (code !== 0) {
                reject();
            }
            resolve(outputFile);
        });
        dot.stdin.write(input);
        dot.stdin.end();
    });
});
exports.renderDot = renderDot;
