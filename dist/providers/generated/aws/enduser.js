"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Workspaces = exports.Worklink = exports.Workdocs = exports.DesktopAndAppStreaming = exports.Appstream20 = void 0;
const create_provider_1 = require("../../create-provider");
exports.Appstream20 = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/enduser/appstream-2-0.png");
exports.DesktopAndAppStreaming = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/enduser/desktop-and-app-streaming.png");
exports.Workdocs = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/enduser/workdocs.png");
exports.Worklink = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/enduser/worklink.png");
exports.Workspaces = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/aws/enduser/workspaces.png");
