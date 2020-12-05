import { createProvider } from "../../create-provider";

export const Filestore = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/gcp/storage/filestore.png"
);
export const PersistentDisk = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/gcp/storage/persistent-disk.png"
);
export const Storage = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/gcp/storage/storage.png"
);

export const GCS = Storage;
