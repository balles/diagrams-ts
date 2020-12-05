import { createProvider } from "../../create-provider";

export const HPA = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/k8s/clusterconfig/hpa.png"
);
export const Limits = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/k8s/clusterconfig/limits.png"
);
export const Quota = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/k8s/clusterconfig/quota.png"
);

export const HorizontalPodAutoscaler = HPA;
export const LimitRange = Limits;
