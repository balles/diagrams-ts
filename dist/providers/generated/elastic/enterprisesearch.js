"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkplaceSearch = exports.SiteSearch = exports.EnterpriseSearch = exports.AppSearch = void 0;
const create_provider_1 = require("../../create-provider");
exports.AppSearch = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/elastic/enterprisesearch/app-search.png");
exports.EnterpriseSearch = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/elastic/enterprisesearch/enterprise-search.png");
exports.SiteSearch = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/elastic/enterprisesearch/site-search.png");
exports.WorkplaceSearch = create_provider_1.createProvider("https://github.com/mingrammer/diagrams/raw/master/resources/elastic/enterprisesearch/workplace-search.png");
