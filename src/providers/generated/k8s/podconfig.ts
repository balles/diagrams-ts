import { createProvider } from "../../create-provider";

export const CM = createProvider(
  "https://github.com/mingrammer/diagrams/raw/4cb6e555333075e05da2e6f2feea67db4dc29fc6/resources/k8s/podconfig/cm.png"
);
export const Secret = createProvider(
  "https://github.com/mingrammer/diagrams/raw/4cb6e555333075e05da2e6f2feea67db4dc29fc6/resources/k8s/podconfig/secret.png"
);

export const ConfigMap = CM;
