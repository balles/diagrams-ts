"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LetsEncrypt = exports.CertManager = void 0;
const create_provider_1 = require("../../create-provider");
exports.CertManager = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/certificates/cert-manager.png");
exports.LetsEncrypt = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/certificates/lets-encrypt.png");
