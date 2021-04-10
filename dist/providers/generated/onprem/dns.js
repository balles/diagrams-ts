"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Powerdns = exports.Coredns = void 0;
const create_provider_1 = require("../../create-provider");
exports.Coredns = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/dns/coredns.png");
exports.Powerdns = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/dns/powerdns.png");
