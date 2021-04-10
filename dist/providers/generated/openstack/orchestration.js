"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zaqar = exports.Senlin = exports.Mistral = exports.Heat = exports.Blazar = void 0;
const create_provider_1 = require("../../create-provider");
exports.Blazar = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/openstack/orchestration/blazar.png");
exports.Heat = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/openstack/orchestration/heat.png");
exports.Mistral = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/openstack/orchestration/mistral.png");
exports.Senlin = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/openstack/orchestration/senlin.png");
exports.Zaqar = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/openstack/orchestration/zaqar.png");
