import { createProvider } from "../../create-provider";

export const Filestore = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/gcp/storage/filestore.png"
);
export const PersistentDisk = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/gcp/storage/persistent-disk.png"
);
export const Storage = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/gcp/storage/storage.png"
);

export const GCS = Storage;
