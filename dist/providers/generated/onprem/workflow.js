"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NiFi = exports.KubeFlow = exports.Nifi = exports.Kubeflow = exports.Digdag = exports.Airflow = void 0;
const create_provider_1 = require("../../create-provider");
exports.Airflow = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/workflow/airflow.png");
exports.Digdag = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/workflow/digdag.png");
exports.Kubeflow = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/workflow/kubeflow.png");
exports.Nifi = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/workflow/nifi.png");
exports.KubeFlow = exports.Kubeflow;
exports.NiFi = exports.Nifi;