"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = exports.Master = exports.ETCD = void 0;
const create_provider_1 = require("../../create-provider");
exports.ETCD = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/k8s/infra/etcd.png");
exports.Master = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/k8s/infra/master.png");
exports.Node = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/k8s/infra/node.png");
