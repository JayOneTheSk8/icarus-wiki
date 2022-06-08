"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../../constants");
const page_ids_1 = require("../../../page-ids");
const associations = {
    title: constants_1.ASSOCIATIONS,
    associations: [
        {
            associationName: 'Friends',
            associationPageIds: [
                page_ids_1.ELLIE_PAGE_ID,
                page_ids_1.RADIO_PAGE_ID,
                page_ids_1.SUZANNE_PAGE_ID,
                page_ids_1.AGENT_RAYSON_PAGE_ID,
            ]
        }
    ]
};
exports.default = associations;
