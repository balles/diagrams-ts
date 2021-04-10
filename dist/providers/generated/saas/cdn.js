"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cloudflare = exports.Akamai = void 0;
const create_provider_1 = require("../../create-provider");
exports.Akamai = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/saas/cdn/akamai.png");
exports.Cloudflare = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/saas/cdn/cloudflare.png");
