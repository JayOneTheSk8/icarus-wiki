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
const gallery_1 = __importDefault(require("./gallery"));
const associations_1 = __importDefault(require("./associations"));
const ReggieKing = {
    id: page_ids_1.REGGIE_KING_PAGE_ID,
    type: constants_1.CHARACTERS_PAGE_TYPE,
    name: 'Reggie King',
    pageImage: {
        url: constants_1.DRIVE_VIEW_PREFIX + '1PnMGTIJsaIy__AkWuYpAM4G9-saN4VQ5',
        caption: 'Reggie (Age 16)'
    },
    sections: [
        attributes_1.default,
        headline_1.default,
        appearance_1.default,
        associations_1.default,
        gallery_1.default,
    ],
    tags: new Set([
        'Meta-Human',
        'Main Character',
        'Hero',
        'Mythical',
    ])
};
exports.default = ReggieKing;
