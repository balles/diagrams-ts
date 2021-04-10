"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ironic = exports.Cyborg = void 0;
const create_provider_1 = require("../../create-provider");
exports.Cyborg = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/openstack/baremetal/cyborg.png");
exports.Ironic = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/openstack/baremetal/ironic.png");
