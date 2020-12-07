import { createProvider } from "../../create-provider";

export const Filestore = createProvider(
  "https://github.com/mingrammer/diagrams/raw/4cb6e555333075e05da2e6f2feea67db4dc29fc6/resources/gcp/storage/filestore.png"
);
export const PersistentDisk = createProvider(
  "https://github.com/mingrammer/diagrams/raw/4cb6e555333075e05da2e6f2feea67db4dc29fc6/resources/gcp/storage/persistent-disk.png"
);
export const Storage = createProvider(
  "https://github.com/mingrammer/diagrams/raw/4cb6e555333075e05da2e6f2feea67db4dc29fc6/resources/gcp/storage/storage.png"
);

export const GCS = Storage;
