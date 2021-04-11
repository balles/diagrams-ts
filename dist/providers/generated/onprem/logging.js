"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RSyslog = exports.FluentBit = exports.SyslogNg = exports.Rsyslog = exports.Loki = exports.Graylog = exports.Fluentbit = void 0;
const create_provider_1 = require("../../create-provider");
exports.Fluentbit = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/logging/fluentbit.png");
exports.Graylog = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/logging/graylog.png");
exports.Loki = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/logging/loki.png");
exports.Rsyslog = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/logging/rsyslog.png");
exports.SyslogNg = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/onprem/logging/syslog-ng.png");
exports.FluentBit = exports.Fluentbit;
exports.RSyslog = exports.Rsyslog;