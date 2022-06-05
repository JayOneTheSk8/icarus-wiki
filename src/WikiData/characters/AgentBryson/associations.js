"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../../constants");
const page_ids_1 = require("../../../page-ids");
const associations = {
    title: constants_1.ASSOCIATIONS,
    associations: [
        {
            associationName: '',
            associationPageIds: [
                page_ids_1.AGENT_JOHNSTON_PAGE_ID,
                page_ids_1.AGENT_TILLERSON_PAGE_ID,
            ]
        }
    ]
};
exports.default = associations;
