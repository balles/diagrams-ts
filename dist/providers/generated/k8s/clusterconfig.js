"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LimitRange = exports.HorizontalPodAutoscaler = exports.Quota = exports.Limits = exports.HPA = void 0;
const create_provider_1 = require("../../create-provider");
exports.HPA = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/k8s/clusterconfig/hpa.png");
exports.Limits = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/k8s/clusterconfig/limits.png");
exports.Quota = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/k8s/clusterconfig/quota.png");
exports.HorizontalPodAutoscaler = exports.HPA;
exports.LimitRange = exports.Limits;
