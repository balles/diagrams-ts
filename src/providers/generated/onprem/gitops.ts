import { createProvider } from "../../create-provider";

export const Argocd = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/onprem/gitops/argocd.png"
);
export const Flagger = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/onprem/gitops/flagger.png"
);
export const Flux = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/onprem/gitops/flux.png"
);

export const ArgoCD = Argocd;
