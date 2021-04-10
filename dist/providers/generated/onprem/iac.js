"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Terraform = exports.Awx = exports.Atlantis = exports.Ansible = void 0;
const create_provider_1 = require("../../create-provider");
exports.Ansible = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/iac/ansible.png");
exports.Atlantis = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/iac/atlantis.png");
exports.Awx = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/iac/awx.png");
exports.Terraform = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/iac/terraform.png");
