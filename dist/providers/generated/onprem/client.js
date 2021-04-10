"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = exports.User = exports.Client = void 0;
const create_provider_1 = require("../../create-provider");
exports.Client = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/client/client.png");
exports.User = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/client/user.png");
exports.Users = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/client/users.png");
