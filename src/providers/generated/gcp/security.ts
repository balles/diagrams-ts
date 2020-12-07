import { createProvider } from "../../create-provider";

export const Iam = createProvider(
  "https://github.com/mingrammer/diagrams/raw/4cb6e555333075e05da2e6f2feea67db4dc29fc6/resources/gcp/security/iam.png"
);
export const IAP = createProvider(
  "https://github.com/mingrammer/diagrams/raw/4cb6e555333075e05da2e6f2feea67db4dc29fc6/resources/gcp/security/iap.png"
);
export const KeyManagementService = createProvider(
  "https://github.com/mingrammer/diagrams/raw/4cb6e555333075e05da2e6f2feea67db4dc29fc6/resources/gcp/security/key-management-service.png"
);
export const ResourceManager = createProvider(
  "https://github.com/mingrammer/diagrams/raw/4cb6e555333075e05da2e6f2feea67db4dc29fc6/resources/gcp/security/resource-manager.png"
);
export const SecurityCommandCenter = createProvider(
  "https://github.com/mingrammer/diagrams/raw/4cb6e555333075e05da2e6f2feea67db4dc29fc6/resources/gcp/security/security-command-center.png"
);
export const SecurityScanner = createProvider(
  "https://github.com/mingrammer/diagrams/raw/4cb6e555333075e05da2e6f2feea67db4dc29fc6/resources/gcp/security/security-scanner.png"
);

export const KMS = KeyManagementService;
export const SCC = SecurityCommandCenter;
