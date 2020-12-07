import { createProvider } from "../../create-provider";

export const AppEngine = createProvider(
  "https://github.com/mingrammer/diagrams/raw/4cb6e555333075e05da2e6f2feea67db4dc29fc6/resources/gcp/compute/app-engine.png"
);
export const ComputeEngine = createProvider(
  "https://github.com/mingrammer/diagrams/raw/4cb6e555333075e05da2e6f2feea67db4dc29fc6/resources/gcp/compute/compute-engine.png"
);
export const ContainerOptimizedOS = createProvider(
  "https://github.com/mingrammer/diagrams/raw/4cb6e555333075e05da2e6f2feea67db4dc29fc6/resources/gcp/compute/container-optimized-os.png"
);
export const Functions = createProvider(
  "https://github.com/mingrammer/diagrams/raw/4cb6e555333075e05da2e6f2feea67db4dc29fc6/resources/gcp/compute/functions.png"
);
export const GKEOnPrem = createProvider(
  "https://github.com/mingrammer/diagrams/raw/4cb6e555333075e05da2e6f2feea67db4dc29fc6/resources/gcp/compute/gke-on-prem.png"
);
export const GPU = createProvider(
  "https://github.com/mingrammer/diagrams/raw/4cb6e555333075e05da2e6f2feea67db4dc29fc6/resources/gcp/compute/gpu.png"
);
export const KubernetesEngine = createProvider(
  "https://github.com/mingrammer/diagrams/raw/4cb6e555333075e05da2e6f2feea67db4dc29fc6/resources/gcp/compute/kubernetes-engine.png"
);
export const Run = createProvider(
  "https://github.com/mingrammer/diagrams/raw/4cb6e555333075e05da2e6f2feea67db4dc29fc6/resources/gcp/compute/run.png"
);

export const GAE = AppEngine;
export const GCE = ComputeEngine;
export const GCF = Functions;
export const GKE = KubernetesEngine;
