"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenSearch = exports.ElaticMapReduce = exports.DataLakeAnalytics = exports.ClickHouse = exports.AnalyticDb = void 0;
const create_provider_1 = require("../../create-provider");
exports.AnalyticDb = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/alibabacloud/analytics/analytic-db.png");
exports.ClickHouse = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/alibabacloud/analytics/click-house.png");
exports.DataLakeAnalytics = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/alibabacloud/analytics/data-lake-analytics.png");
exports.ElaticMapReduce = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/alibabacloud/analytics/elatic-map-reduce.png");
exports.OpenSearch = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/alibabacloud/analytics/open-search.png");
