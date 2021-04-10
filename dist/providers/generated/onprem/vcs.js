"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gitlab = exports.Github = exports.Git = void 0;
const create_provider_1 = require("../../create-provider");
exports.Git = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/vcs/git.png");
exports.Github = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/vcs/github.png");
exports.Gitlab = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/vcs/gitlab.png");
