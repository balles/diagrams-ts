import { createProvider } from "../../create-provider";

export const CephOsd = createProvider(
  "https://github.com/mingrammer/diagrams/raw/4cb6e555333075e05da2e6f2feea67db4dc29fc6/resources/onprem/storage/ceph-osd.png"
);
export const Ceph = createProvider(
  "https://github.com/mingrammer/diagrams/raw/4cb6e555333075e05da2e6f2feea67db4dc29fc6/resources/onprem/storage/ceph.png"
);
export const Glusterfs = createProvider(
  "https://github.com/mingrammer/diagrams/raw/4cb6e555333075e05da2e6f2feea67db4dc29fc6/resources/onprem/storage/glusterfs.png"
);

export const CEPH_OSD = CephOsd;
export const CEPH = Ceph;
