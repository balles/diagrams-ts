"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sentinel = exports.SecurityCenter = exports.KeyVaults = void 0;
const create_provider_1 = require("../../create-provider");
exports.KeyVaults = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/azure/security/key-vaults.png");
exports.SecurityCenter = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/azure/security/security-center.png");
exports.Sentinel = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/azure/security/sentinel.png");
