"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scheduler = exports.KubeProxy = exports.ControllerManager = exports.APIServer = exports.Sched = exports.Kubelet = exports.KProxy = exports.CM = exports.CCM = exports.API = void 0;
const create_provider_1 = require("../../create-provider");
exports.API = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/k8s/controlplane/api.png");
exports.CCM = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/k8s/controlplane/c-c-m.png");
exports.CM = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/k8s/controlplane/c-m.png");
exports.KProxy = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/k8s/controlplane/k-proxy.png");
exports.Kubelet = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/k8s/controlplane/kubelet.png");
exports.Sched = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/k8s/controlplane/sched.png");
exports.APIServer = exports.API;
exports.ControllerManager = exports.CM;
exports.KubeProxy = exports.KProxy;
exports.Scheduler = exports.Sched;