"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Searchlight = exports.Keystone = exports.Karbor = exports.Glance = exports.Barbican = void 0;
const create_provider_1 = require("../../create-provider");
exports.Barbican = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/openstack/sharedservices/barbican.png");
exports.Glance = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/openstack/sharedservices/glance.png");
exports.Karbor = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/openstack/sharedservices/karbor.png");
exports.Keystone = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/openstack/sharedservices/keystone.png");
exports.Searchlight = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/openstack/sharedservices/searchlight.png");
