"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestLab = exports.PerformanceMonitoring = exports.Crashlytics = exports.CrashReporting = exports.AppDistribution = void 0;
const create_provider_1 = require("../../create-provider");
exports.AppDistribution = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/firebase/quality/app-distribution.png");
exports.CrashReporting = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/firebase/quality/crash-reporting.png");
exports.Crashlytics = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/firebase/quality/crashlytics.png");
exports.PerformanceMonitoring = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/firebase/quality/performance-monitoring.png");
exports.TestLab = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/firebase/quality/test-lab.png");
