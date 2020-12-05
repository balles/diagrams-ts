import { createProvider } from "../../create-provider";

export const Iam = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/gcp/security/iam.png"
);
export const IAP = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/gcp/security/iap.png"
);
export const KeyManagementService = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/gcp/security/key-management-service.png"
);
export const ResourceManager = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/gcp/security/resource-manager.png"
);
export const SecurityCommandCenter = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/gcp/security/security-command-center.png"
);
export const SecurityScanner = createProvider(
  "https://github.com/mingrammer/diagrams/raw/dfd8e0a52c8c4d1c3ce95dc7161c23bb2eaf0acb/resources/gcp/security/security-scanner.png"
);

export const KMS = KeyManagementService;
export const SCC = SecurityCommandCenter;
