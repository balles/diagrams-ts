"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RKT = exports.LXC = exports.Rkt = exports.Lxc = exports.Gvisor = exports.Firecracker = exports.Docker = exports.Crio = exports.Containerd = void 0;
const create_provider_1 = require("../../create-provider");
exports.Containerd = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/container/containerd.png");
exports.Crio = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/container/crio.png");
exports.Docker = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/container/docker.png");
exports.Firecracker = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/container/firecracker.png");
exports.Gvisor = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/container/gvisor.png");
exports.Lxc = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/container/lxc.png");
exports.Rkt = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/container/rkt.png");
exports.LXC = exports.Lxc;
exports.RKT = exports.Rkt;