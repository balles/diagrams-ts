"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VPC = exports.SLB = exports.EIP = exports.CEN = exports.VpnGateway = exports.VirtualPrivateCloud = exports.SmartAccessGateway = exports.ServerLoadBalancer = exports.NatGateway = exports.ExpressConnect = exports.ElasticIpAddress = exports.CloudEnterpriseNetwork = exports.Cdn = void 0;
const create_provider_1 = require("../../create-provider");
exports.Cdn = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/alibabacloud/network/cdn.png");
exports.CloudEnterpriseNetwork = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/alibabacloud/network/cloud-enterprise-network.png");
exports.ElasticIpAddress = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/alibabacloud/network/elastic-ip-address.png");
exports.ExpressConnect = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/alibabacloud/network/express-connect.png");
exports.NatGateway = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/alibabacloud/network/nat-gateway.png");
exports.ServerLoadBalancer = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/alibabacloud/network/server-load-balancer.png");
exports.SmartAccessGateway = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/alibabacloud/network/smart-access-gateway.png");
exports.VirtualPrivateCloud = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/alibabacloud/network/virtual-private-cloud.png");
exports.VpnGateway = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/alibabacloud/network/vpn-gateway.png");
exports.CEN = exports.CloudEnterpriseNetwork;
exports.EIP = exports.ElasticIpAddress;
exports.SLB = exports.ServerLoadBalancer;
exports.VPC = exports.VirtualPrivateCloud;