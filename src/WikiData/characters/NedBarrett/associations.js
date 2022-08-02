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
                page_ids_1.KALO_AGUIRRE_PAGE_ID,
                page_ids_1.WALLY_WATERMAN_PAGE_ID,
            ]
        },
        {
            associationName: 'Enemies',
            associationPageIds: [
                page_ids_1.REGGIE_KING_PAGE_ID,
                page_ids_1.RUSSEL_KING_PAGE_ID,
                page_ids_1.MELVIN_GERRITSEN_PAGE_ID,
            ]
        },
    ]
};
exports.default = associations;
