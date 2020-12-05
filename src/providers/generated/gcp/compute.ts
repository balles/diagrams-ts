import { createProvider } from "../../create-provider";

export const AppEngine = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/gcp/compute/app-engine.png"
);
export const ComputeEngine = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/gcp/compute/compute-engine.png"
);
export const ContainerOptimizedOS = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/gcp/compute/container-optimized-os.png"
);
export const Functions = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/gcp/compute/functions.png"
);
export const GKEOnPrem = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/gcp/compute/gke-on-prem.png"
);
export const GPU = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/gcp/compute/gpu.png"
);
export const KubernetesEngine = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/gcp/compute/kubernetes-engine.png"
);
export const Run = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/gcp/compute/run.png"
);

export const GAE = AppEngine;
export const GCE = ComputeEngine;
export const GCF = Functions;
export const GKE = KubernetesEngine;
