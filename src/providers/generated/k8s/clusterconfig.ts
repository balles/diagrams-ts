import { createProvider } from "../../create-provider";

export const HPA = createProvider(
  "https://github.com/mingrammer/diagrams/raw/4cb6e555333075e05da2e6f2feea67db4dc29fc6/resources/k8s/clusterconfig/hpa.png"
);
export const Limits = createProvider(
  "https://github.com/mingrammer/diagrams/raw/4cb6e555333075e05da2e6f2feea67db4dc29fc6/resources/k8s/clusterconfig/limits.png"
);
export const Quota = createProvider(
  "https://github.com/mingrammer/diagrams/raw/4cb6e555333075e05da2e6f2feea67db4dc29fc6/resources/k8s/clusterconfig/quota.png"
);

export const HorizontalPodAutoscaler = HPA;
export const LimitRange = Limits;
