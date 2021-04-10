"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VPN = exports.Switch = exports.Subnet = exports.Router = exports.Firewall = void 0;
const create_provider_1 = require("../../create-provider");
exports.Firewall = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/generic/network/firewall.png");
exports.Router = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/generic/network/router.png");
exports.Subnet = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/generic/network/subnet.png");
exports.Switch = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/generic/network/switch.png");
exports.VPN = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/generic/network/vpn.png");
