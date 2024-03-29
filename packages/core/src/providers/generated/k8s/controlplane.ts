import { createProvider } from "../../create-provider";

export const API = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/k8s/controlplane/api.png"
);
export const CCM = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/k8s/controlplane/c-c-m.png"
);
export const CM = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/k8s/controlplane/c-m.png"
);
export const KProxy = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/k8s/controlplane/k-proxy.png"
);
export const Kubelet = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/k8s/controlplane/kubelet.png"
);
export const Sched = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/k8s/controlplane/sched.png"
);

export const APIServer = API;
export const ControllerManager = CM;
export const KubeProxy = KProxy;
export const Scheduler = Sched;
