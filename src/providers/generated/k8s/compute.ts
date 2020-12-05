import { createProvider } from "../../create-provider";

export const Cronjob = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/k8s/compute/cronjob.png"
);
export const Deploy = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/k8s/compute/deploy.png"
);
export const DS = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/k8s/compute/ds.png"
);
export const Job = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/k8s/compute/job.png"
);
export const Pod = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/k8s/compute/pod.png"
);
export const RS = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/k8s/compute/rs.png"
);
export const STS = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/k8s/compute/sts.png"
);

export const Deployment = Deploy;
export const DaemonSet = DS;
export const ReplicaSet = RS;
export const StatefulSet = STS;
