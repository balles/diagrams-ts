import { createProvider } from "../../create-provider";

export const PV = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/k8s/storage/pv.png"
);
export const PVC = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/k8s/storage/pvc.png"
);
export const SC = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/k8s/storage/sc.png"
);
export const Vol = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/k8s/storage/vol.png"
);

export const PersistentVolume = PV;
export const PersistentVolumeClaim = PVC;
export const StorageClass = SC;
export const Volume = Vol;
