"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pushover = exports.Opsgenie = exports.Newrelic = void 0;
const create_provider_1 = require("../../create-provider");
exports.Newrelic = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/saas/alerting/newrelic.png");
exports.Opsgenie = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/saas/alerting/opsgenie.png");
exports.Pushover = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/saas/alerting/pushover.png");
