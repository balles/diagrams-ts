import { createProvider } from "../../create-provider";

export const Argocd = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/onprem/gitops/argocd.png"
);
export const Flagger = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/onprem/gitops/flagger.png"
);
export const Flux = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/onprem/gitops/flux.png"
);

export const ArgoCD = Argocd;
