"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUniqueIds = void 0;
function* generateUniqueIds() {
    let i = 0;
    while (true) {
        yield i++;
    }
}
exports.generateUniqueIds = generateUniqueIds;
