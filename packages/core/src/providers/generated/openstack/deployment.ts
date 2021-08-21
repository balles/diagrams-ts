import { createProvider } from "../../create-provider";

export const Ansible = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/openstack/deployment/ansible.png"
);
export const Charms = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/openstack/deployment/charms.png"
);
export const Chef = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/openstack/deployment/chef.png"
);
export const Helm = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/openstack/deployment/helm.png"
);
export const Kolla = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/openstack/deployment/kolla.png"
);
export const Tripleo = createProvider(
  "https://github.com/mingrammer/diagrams/raw/master/resources/openstack/deployment/tripleo.png"
);

export const KollaAnsible = Kolla;
export const TripleO = Tripleo;
