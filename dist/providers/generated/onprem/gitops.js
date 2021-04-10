"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArgoCD = exports.Flux = exports.Flagger = exports.Argocd = void 0;
const create_provider_1 = require("../../create-provider");
exports.Argocd = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/gitops/argocd.png");
exports.Flagger = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/gitops/flagger.png");
exports.Flux = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/gitops/flux.png");
exports.ArgoCD = exports.Argocd;
