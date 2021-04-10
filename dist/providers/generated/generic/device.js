"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tablet = exports.Mobile = void 0;
const create_provider_1 = require("../../create-provider");
exports.Mobile = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/generic/device/mobile.png");
exports.Tablet = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/generic/device/tablet.png");
