"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCS = exports.Storage = exports.PersistentDisk = exports.Filestore = void 0;
const create_provider_1 = require("../../create-provider");
exports.Filestore = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/gcp/storage/filestore.png");
exports.PersistentDisk = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/gcp/storage/persistent-disk.png");
exports.Storage = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/gcp/storage/storage.png");
exports.GCS = exports.Storage;
