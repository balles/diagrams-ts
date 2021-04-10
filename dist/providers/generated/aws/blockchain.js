"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QLDB = exports.QuantumLedgerDatabaseQldb = exports.ManagedBlockchain = exports.Blockchain = exports.BlockchainResource = void 0;
const create_provider_1 = require("../../create-provider");
exports.BlockchainResource = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/blockchain/blockchain-resource.png");
exports.Blockchain = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/blockchain/blockchain.png");
exports.ManagedBlockchain = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/blockchain/managed-blockchain.png");
exports.QuantumLedgerDatabaseQldb = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/blockchain/quantum-ledger-database-qldb.png");
exports.QLDB = exports.QuantumLedgerDatabaseQldb;
