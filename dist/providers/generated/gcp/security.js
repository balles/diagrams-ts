"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SCC = exports.KMS = exports.SecurityScanner = exports.SecurityCommandCenter = exports.ResourceManager = exports.KeyManagementService = exports.IAP = exports.Iam = void 0;
const create_provider_1 = require("../../create-provider");
exports.Iam = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/gcp/security/iam.png");
exports.IAP = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/gcp/security/iap.png");
exports.KeyManagementService = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/gcp/security/key-management-service.png");
exports.ResourceManager = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/gcp/security/resource-manager.png");
exports.SecurityCommandCenter = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/gcp/security/security-command-center.png");
exports.SecurityScanner = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/gcp/security/security-scanner.png");
exports.KMS = exports.KeyManagementService;
exports.SCC = exports.SecurityCommandCenter;
