"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SIEM = exports.Security = exports.Endpoint = void 0;
const create_provider_1 = require("../../create-provider");
exports.Endpoint = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/elastic/security/endpoint.png");
exports.Security = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/elastic/security/security.png");
exports.SIEM = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/elastic/security/siem.png");
