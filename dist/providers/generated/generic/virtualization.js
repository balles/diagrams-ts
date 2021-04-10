"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XEN = exports.Vmware = exports.Virtualbox = void 0;
const create_provider_1 = require("../../create-provider");
exports.Virtualbox = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/generic/virtualization/virtualbox.png");
exports.Vmware = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/generic/virtualization/vmware.png");
exports.XEN = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/generic/virtualization/xen.png");
