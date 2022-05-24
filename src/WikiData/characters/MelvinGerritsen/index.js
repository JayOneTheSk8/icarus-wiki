"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../../constants");
const page_ids_1 = require("../../../page-ids");
const appearance_1 = __importDefault(require("./appearance"));
const associations_1 = __importDefault(require("./associations"));
const attributes_1 = __importDefault(require("./attributes"));
const headline_1 = __importDefault(require("./headline"));
const MelvinGerritsen = {
    id: page_ids_1.MELVIN_GERRITSEN_PAGE_ID,
    name: 'Melvin Gerritsen',
    pageImage: {
        url: constants_1.DRIVE_VIEW_PREFIX + '1RKZWzGgko6hw0mHSDr6_jE0e401WVo2d',
        caption: 'Melvin (Age 15)'
    },
    sections: [
        attributes_1.default,
        headline_1.default,
        appearance_1.default,
        associations_1.default,
    ]
};
exports.default = MelvinGerritsen;
