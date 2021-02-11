import { createProvider } from "../../create-provider";

export const BlockchainResource = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/aws/blockchain/blockchain-resource.png"
);
export const Blockchain = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/aws/blockchain/blockchain.png"
);
export const ManagedBlockchain = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/aws/blockchain/managed-blockchain.png"
);
export const QuantumLedgerDatabaseQldb = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/aws/blockchain/quantum-ledger-database-qldb.png"
);

export const QLDB = QuantumLedgerDatabaseQldb;
