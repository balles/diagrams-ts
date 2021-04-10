"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Oauth2Proxy = exports.BuzzfeedSso = exports.Boundary = void 0;
const create_provider_1 = require("../../create-provider");
exports.Boundary = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/auth/boundary.png");
exports.BuzzfeedSso = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/auth/buzzfeed-sso.png");
exports.Oauth2Proxy = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/auth/oauth2-proxy.png");
