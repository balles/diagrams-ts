import { createProvider } from "../../create-provider";

export const Cdn = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/alibabacloud/network/cdn.png"
);
export const CloudEnterpriseNetwork = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/alibabacloud/network/cloud-enterprise-network.png"
);
export const ElasticIpAddress = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/alibabacloud/network/elastic-ip-address.png"
);
export const ExpressConnect = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/alibabacloud/network/express-connect.png"
);
export const NatGateway = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/alibabacloud/network/nat-gateway.png"
);
export const ServerLoadBalancer = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/alibabacloud/network/server-load-balancer.png"
);
export const SmartAccessGateway = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/alibabacloud/network/smart-access-gateway.png"
);
export const VirtualPrivateCloud = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/alibabacloud/network/virtual-private-cloud.png"
);
export const VpnGateway = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/alibabacloud/network/vpn-gateway.png"
);

export const CEN = CloudEnterpriseNetwork;
export const EIP = ElasticIpAddress;
export const SLB = ServerLoadBalancer;
export const VPC = VirtualPrivateCloud;
