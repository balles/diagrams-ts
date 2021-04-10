"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataDog = exports.Papertrail = exports.Newrelic = exports.Datadog = void 0;
const create_provider_1 = require("../../create-provider");
exports.Datadog = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/saas/logging/datadog.png");
exports.Newrelic = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/saas/logging/newrelic.png");
exports.Papertrail = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/saas/logging/papertrail.png");
exports.DataDog = exports.Datadog;
