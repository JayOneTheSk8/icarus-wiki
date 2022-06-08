"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../../constants");
const page_ids_1 = require("../../../page-ids");
const associations = {
    title: constants_1.ASSOCIATIONS,
    associations: [
        {
            associationName: 'Co-Workers',
            associationPageIds: [
                page_ids_1.DR_WEED_PAGE_ID,
            ]
        }
    ]
};
exports.default = associations;
