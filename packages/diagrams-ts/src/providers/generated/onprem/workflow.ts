import { createProvider } from "../../create-provider";

export const Airflow = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/onprem/workflow/airflow.png"
);
export const Digdag = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/onprem/workflow/digdag.png"
);
export const Kubeflow = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/onprem/workflow/kubeflow.png"
);
export const Nifi = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/onprem/workflow/nifi.png"
);

export const KubeFlow = Kubeflow;
export const NiFi = Nifi;
