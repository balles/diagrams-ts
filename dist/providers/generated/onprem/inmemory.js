"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Redis = exports.Memcached = exports.Hazelcast = exports.Aerospike = void 0;
const create_provider_1 = require("../../create-provider");
exports.Aerospike = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/inmemory/aerospike.png");
exports.Hazelcast = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/inmemory/hazelcast.png");
exports.Memcached = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/inmemory/memcached.png");
exports.Redis = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/inmemory/redis.png");
