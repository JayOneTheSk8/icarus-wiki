"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../../constants");
const page_ids_1 = require("../../../page-ids");
const tags_1 = require("../tags");
const appearance_1 = __importDefault(require("./appearance"));
const attributes_1 = __importDefault(require("./attributes"));
const headline_1 = __importDefault(require("./headline"));
const SAIM = {
    id: page_ids_1.SAIM_PAGE_ID,
    type: constants_1.CHARACTERS_PAGE_TYPE,
    name: 'SAIM',
    sections: [
        attributes_1.default,
        headline_1.default,
        appearance_1.default,
    ],
    tags: new Set([
        tags_1.AI,
        tags_1.ARTIFICIAL_INTELLIGENCE,
    ])
};
exports.default = SAIM;
