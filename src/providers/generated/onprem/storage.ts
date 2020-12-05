import { createProvider } from "../../create-provider";

export const CephOsd = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/onprem/storage/ceph-osd.png"
);
export const Ceph = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/onprem/storage/ceph.png"
);
export const Glusterfs = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/onprem/storage/glusterfs.png"
);

export const CEPH_OSD = CephOsd;
export const CEPH = Ceph;
