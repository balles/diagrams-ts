import { createProvider } from "../../create-provider";

export const Ep = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/k8s/network/ep.png"
);
export const Ing = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/k8s/network/ing.png"
);
export const Netpol = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/k8s/network/netpol.png"
);
export const SVC = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/k8s/network/svc.png"
);

export const Endpoint = Ep;
export const Ingress = Ing;
export const NetworkPolicy = Netpol;
export const Service = SVC;
