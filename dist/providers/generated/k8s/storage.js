"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Volume = exports.StorageClass = exports.PersistentVolumeClaim = exports.PersistentVolume = exports.Vol = exports.SC = exports.PVC = exports.PV = void 0;
const create_provider_1 = require("../../create-provider");
exports.PV = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/k8s/storage/pv.png");
exports.PVC = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/k8s/storage/pvc.png");
exports.SC = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/k8s/storage/sc.png");
exports.Vol = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/k8s/storage/vol.png");
exports.PersistentVolume = exports.PV;
exports.PersistentVolumeClaim = exports.PVC;
exports.StorageClass = exports.SC;
exports.Volume = exports.Vol;