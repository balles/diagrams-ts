"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = exports.Nomad = void 0;
const create_provider_1 = require("../../create-provider");
exports.Nomad = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/compute/nomad.png");
exports.Server = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/compute/server.png");
