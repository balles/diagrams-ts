"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vault = exports.Trivy = exports.Bitwarden = void 0;
const create_provider_1 = require("../../create-provider");
exports.Bitwarden = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/security/bitwarden.png");
exports.Trivy = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/security/trivy.png");
exports.Vault = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/security/vault.png");
