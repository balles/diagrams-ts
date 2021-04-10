"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OTS = exports.OSS = exports.HDR = exports.HBR = exports.NAS = exports.HDFS = exports.ObjectTableStore = exports.ObjectStorageService = exports.Imm = exports.HybridCloudDisasterRecovery = exports.HybridBackupRecovery = exports.FileStorageNas = exports.FileStorageHdfs = exports.CloudStorageGateway = void 0;
const create_provider_1 = require("../../create-provider");
exports.CloudStorageGateway = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/alibabacloud/storage/cloud-storage-gateway.png");
exports.FileStorageHdfs = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/alibabacloud/storage/file-storage-hdfs.png");
exports.FileStorageNas = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/alibabacloud/storage/file-storage-nas.png");
exports.HybridBackupRecovery = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/alibabacloud/storage/hybrid-backup-recovery.png");
exports.HybridCloudDisasterRecovery = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/alibabacloud/storage/hybrid-cloud-disaster-recovery.png");
exports.Imm = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/alibabacloud/storage/imm.png");
exports.ObjectStorageService = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/alibabacloud/storage/object-storage-service.png");
exports.ObjectTableStore = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/alibabacloud/storage/object-table-store.png");
exports.HDFS = exports.FileStorageHdfs;
exports.NAS = exports.FileStorageNas;
exports.HBR = exports.HybridBackupRecovery;
exports.HDR = exports.HybridCloudDisasterRecovery;
exports.OSS = exports.ObjectStorageService;
exports.OTS = exports.ObjectTableStore;
