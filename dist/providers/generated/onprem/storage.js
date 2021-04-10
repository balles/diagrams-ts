"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CEPH = exports.CEPH_OSD = exports.Glusterfs = exports.Ceph = exports.CephOsd = void 0;
const create_provider_1 = require("../../create-provider");
exports.CephOsd = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/storage/ceph-osd.png");
exports.Ceph = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/storage/ceph.png");
exports.Glusterfs = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/storage/glusterfs.png");
exports.CEPH_OSD = exports.CephOsd;
exports.CEPH = exports.Ceph;
