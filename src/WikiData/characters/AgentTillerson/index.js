"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../../constants");
const page_ids_1 = require("../../../page-ids");
const attributes_1 = __importDefault(require("./attributes"));
const headline_1 = __importDefault(require("./headline"));
const appearance_1 = __importDefault(require("./appearance"));
const associations_1 = __importDefault(require("./associations"));
const AgentTillerson = {
    id: page_ids_1.AGENT_TILLERSON_PAGE_ID,
    type: constants_1.CHARACTERS_PAGE_TYPE,
    name: 'Agent Tillerson',
    pageImage: {
        url: constants_1.DRIVE_VIEW_PREFIX + '1QsX9Udv3WDHJhIsYsDdCXYjLrseVZ-24'
    },
    sections: [
        attributes_1.default,
        headline_1.default,
        appearance_1.default,
        associations_1.default,
    ],
    tags: new Set([
        'DMPA Agent',
        'DMPA Employee',
        'Human',
    ])
};
exports.default = AgentTillerson;
