import { createProvider } from "../../create-provider";

export const CRole = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/k8s/rbac/c-role.png"
);
export const CRB = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/k8s/rbac/crb.png"
);
export const Group = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/k8s/rbac/group.png"
);
export const RB = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/k8s/rbac/rb.png"
);
export const Role = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/k8s/rbac/role.png"
);
export const SA = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/k8s/rbac/sa.png"
);
export const User = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/k8s/rbac/user.png"
);

export const ClusterRole = CRole;
export const ClusterRoleBinding = CRB;
export const RoleBinding = RB;
export const ServiceAccount = SA;
