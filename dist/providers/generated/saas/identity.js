"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Okta = exports.Auth0 = void 0;
const create_provider_1 = require("../../create-provider");
exports.Auth0 = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/saas/identity/auth0.png");
exports.Okta = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/saas/identity/okta.png");
