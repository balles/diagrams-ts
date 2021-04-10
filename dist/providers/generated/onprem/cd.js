"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tekton = exports.TektonCli = exports.Spinnaker = void 0;
const create_provider_1 = require("../../create-provider");
exports.Spinnaker = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/cd/spinnaker.png");
exports.TektonCli = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/cd/tekton-cli.png");
exports.Tekton = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/cd/tekton.png");
