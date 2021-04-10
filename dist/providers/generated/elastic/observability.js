"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Uptime = exports.Observability = exports.Metrics = exports.Logs = exports.APM = void 0;
const create_provider_1 = require("../../create-provider");
exports.APM = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/elastic/observability/apm.png");
exports.Logs = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/elastic/observability/logs.png");
exports.Metrics = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/elastic/observability/metrics.png");
exports.Observability = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/elastic/observability/observability.png");
exports.Uptime = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/elastic/observability/uptime.png");
