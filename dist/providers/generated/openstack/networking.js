"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Octavia = exports.Neutron = exports.Designate = void 0;
const create_provider_1 = require("../../create-provider");
exports.Designate = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/openstack/networking/designate.png");
exports.Neutron = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/openstack/networking/neutron.png");
exports.Octavia = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/openstack/networking/octavia.png");
