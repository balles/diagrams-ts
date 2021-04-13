import { createProvider } from "../../create-provider";

export const CloudStorageGateway = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/alibabacloud/storage/cloud-storage-gateway.png"
);
export const FileStorageHdfs = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/alibabacloud/storage/file-storage-hdfs.png"
);
export const FileStorageNas = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/alibabacloud/storage/file-storage-nas.png"
);
export const HybridBackupRecovery = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/alibabacloud/storage/hybrid-backup-recovery.png"
);
export const HybridCloudDisasterRecovery = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/alibabacloud/storage/hybrid-cloud-disaster-recovery.png"
);
export const Imm = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/alibabacloud/storage/imm.png"
);
export const ObjectStorageService = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/alibabacloud/storage/object-storage-service.png"
);
export const ObjectTableStore = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/alibabacloud/storage/object-table-store.png"
);

export const HDFS = FileStorageHdfs;
export const NAS = FileStorageNas;
export const HBR = HybridBackupRecovery;
export const HDR = HybridCloudDisasterRecovery;
export const OSS = ObjectStorageService;
export const OTS = ObjectTableStore;
