import { createProvider } from "../../create-provider";

export const Airflow = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/onprem/workflow/airflow.png"
);
export const Digdag = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/onprem/workflow/digdag.png"
);
export const Kubeflow = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/onprem/workflow/kubeflow.png"
);
export const Nifi = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/onprem/workflow/nifi.png"
);

export const KubeFlow = Kubeflow;
export const NiFi = Nifi;
