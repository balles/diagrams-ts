"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kustomize = exports.Krew = exports.Helm = exports.ExternalDns = void 0;
const create_provider_1 = require("../../create-provider");
exports.ExternalDns = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/k8s/ecosystem/external-dns.png");
exports.Helm = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/k8s/ecosystem/helm.png");
exports.Krew = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/k8s/ecosystem/krew.png");
exports.Kustomize = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/k8s/ecosystem/kustomize.png");
