"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RAM = exports.KMS = exports.IAM = exports.IAMRole = exports.IAMPermissions = exports.IAMAWSSts = exports.IAMAccessAnalyzer = exports.FMS = exports.DS = exports.CloudHSM = exports.ACM = exports.WAF = exports.WAFFilteringRule = exports.SingleSignOn = exports.SimpleAd = exports.Shield = exports.ShieldAdvanced = exports.SecurityIdentityAndCompliance = exports.SecurityHub = exports.SecurityHubFinding = exports.SecretsManager = exports.ResourceAccessManager = exports.ManagedMicrosoftAd = exports.Macie = exports.KeyManagementService = exports.Inspector = exports.InspectorAgent = exports.IdentityAndAccessManagementIam = exports.IdentityAndAccessManagementIamTemporarySecurityCredential = exports.IdentityAndAccessManagementIamRole = exports.IdentityAndAccessManagementIamPermissions = exports.IdentityAndAccessManagementIamMfaToken = exports.IdentityAndAccessManagementIamLongTermSecurityCredential = exports.IdentityAndAccessManagementIamEncryptedData = exports.IdentityAndAccessManagementIamDataEncryptionKey = exports.IdentityAndAccessManagementIamAWSSts = exports.IdentityAndAccessManagementIamAWSStsAlternate = exports.IdentityAndAccessManagementIamAddOn = exports.IdentityAndAccessManagementIamAccessAnalyzer = exports.Guardduty = exports.FirewallManager = exports.DirectoryService = exports.Detective = exports.Cognito = exports.Cloudhsm = exports.CloudDirectory = exports.CertificateManager = exports.CertificateAuthority = exports.Artifact = exports.AdConnector = void 0;
const create_provider_1 = require("../../create-provider");
exports.AdConnector = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/security/ad-connector.png");
exports.Artifact = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/security/artifact.png");
exports.CertificateAuthority = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/security/certificate-authority.png");
exports.CertificateManager = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/security/certificate-manager.png");
exports.CloudDirectory = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/security/cloud-directory.png");
exports.Cloudhsm = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/security/cloudhsm.png");
exports.Cognito = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/security/cognito.png");
exports.Detective = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/security/detective.png");
exports.DirectoryService = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/security/directory-service.png");
exports.FirewallManager = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/security/firewall-manager.png");
exports.Guardduty = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/security/guardduty.png");
exports.IdentityAndAccessManagementIamAccessAnalyzer = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/security/identity-and-access-management-iam-access-analyzer.png");
exports.IdentityAndAccessManagementIamAddOn = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/security/identity-and-access-management-iam-add-on.png");
exports.IdentityAndAccessManagementIamAWSStsAlternate = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/security/identity-and-access-management-iam-aws-sts-alternate.png");
exports.IdentityAndAccessManagementIamAWSSts = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/security/identity-and-access-management-iam-aws-sts.png");
exports.IdentityAndAccessManagementIamDataEncryptionKey = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/security/identity-and-access-management-iam-data-encryption-key.png");
exports.IdentityAndAccessManagementIamEncryptedData = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/security/identity-and-access-management-iam-encrypted-data.png");
exports.IdentityAndAccessManagementIamLongTermSecurityCredential = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/security/identity-and-access-management-iam-long-term-security-credential.png");
exports.IdentityAndAccessManagementIamMfaToken = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/security/identity-and-access-management-iam-mfa-token.png");
exports.IdentityAndAccessManagementIamPermissions = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/security/identity-and-access-management-iam-permissions.png");
exports.IdentityAndAccessManagementIamRole = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/security/identity-and-access-management-iam-role.png");
exports.IdentityAndAccessManagementIamTemporarySecurityCredential = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/security/identity-and-access-management-iam-temporary-security-credential.png");
exports.IdentityAndAccessManagementIam = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/security/identity-and-access-management-iam.png");
exports.InspectorAgent = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/security/inspector-agent.png");
exports.Inspector = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/security/inspector.png");
exports.KeyManagementService = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/security/key-management-service.png");
exports.Macie = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/security/macie.png");
exports.ManagedMicrosoftAd = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/security/managed-microsoft-ad.png");
exports.ResourceAccessManager = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/security/resource-access-manager.png");
exports.SecretsManager = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/security/secrets-manager.png");
exports.SecurityHubFinding = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/security/security-hub-finding.png");
exports.SecurityHub = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/security/security-hub.png");
exports.SecurityIdentityAndCompliance = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/security/security-identity-and-compliance.png");
exports.ShieldAdvanced = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/security/shield-advanced.png");
exports.Shield = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/security/shield.png");
exports.SimpleAd = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/security/simple-ad.png");
exports.SingleSignOn = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/security/single-sign-on.png");
exports.WAFFilteringRule = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/security/waf-filtering-rule.png");
exports.WAF = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/security/waf.png");
exports.ACM = exports.CertificateManager;
exports.CloudHSM = exports.Cloudhsm;
exports.DS = exports.DirectoryService;
exports.FMS = exports.FirewallManager;
exports.IAMAccessAnalyzer = exports.IdentityAndAccessManagementIamAccessAnalyzer;
exports.IAMAWSSts = exports.IdentityAndAccessManagementIamAWSSts;
exports.IAMPermissions = exports.IdentityAndAccessManagementIamPermissions;
exports.IAMRole = exports.IdentityAndAccessManagementIamRole;
exports.IAM = exports.IdentityAndAccessManagementIam;
exports.KMS = exports.KeyManagementService;
exports.RAM = exports.ResourceAccessManager;