"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigMap = exports.Secret = exports.CM = void 0;
const create_provider_1 = require("../../create-provider");
exports.CM = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/k8s/podconfig/cm.png");
exports.Secret = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/k8s/podconfig/secret.png");
exports.ConfigMap = exports.CM;
