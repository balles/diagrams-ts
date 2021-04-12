import { createProvider } from "../../create-provider";

export const CM = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/k8s/podconfig/cm.png"
);
export const Secret = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/k8s/podconfig/secret.png"
);

export const ConfigMap = CM;
