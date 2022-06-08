"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../../constants");
const page_ids_1 = require("../../../page-ids");
const tags_1 = require("../tags");
const attributes_1 = __importDefault(require("./attributes"));
const headline_1 = __importDefault(require("./headline"));
const appearance_1 = __importDefault(require("./appearance"));
const associations_1 = __importDefault(require("./associations"));
const AgentMadison = {
    id: page_ids_1.AGENT_MADISON_PAGE_ID,
    type: constants_1.CHARACTERS_PAGE_TYPE,
    name: 'Agent Madison',
    pageImage: {
        url: constants_1.DRIVE_VIEW_PREFIX + '1iibWMb2ovvbcFwMWCNWK8m0Hv4LAlj0R'
    },
    sections: [
        attributes_1.default,
        headline_1.default,
        appearance_1.default,
        associations_1.default,
    ],
    tags: new Set([
        tags_1.DMPA_AGENT,
        tags_1.DMPA_EMPLOYEE,
        tags_1.HUMAN,
    ])
};
exports.default = AgentMadison;
