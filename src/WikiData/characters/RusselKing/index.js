"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../../constants");
const page_ids_1 = require("../../../page-ids");
const appearance_1 = __importDefault(require("./appearance"));
const attributes_1 = __importDefault(require("./attributes"));
const gallery_1 = __importDefault(require("./gallery"));
const headline_1 = __importDefault(require("./headline"));
const associations_1 = __importDefault(require("./associations"));
const tags_1 = require("../tags");
const RusselKing = {
    id: page_ids_1.RUSSEL_KING_PAGE_ID,
    type: constants_1.CHARACTERS_PAGE_TYPE,
    name: 'Russel King',
    pageImage: {
        url: constants_1.DRIVE_VIEW_PREFIX + '1QAiWVNXwS6Zgvyqxkz2LwEKe1ti3bJ66',
        caption: 'Russel (Age 13)'
    },
    sections: [
        attributes_1.default,
        headline_1.default,
        appearance_1.default,
        associations_1.default,
        gallery_1.default,
    ],
    tags: new Set([
        tags_1.META_HUMAN,
        tags_1.MAIN_CHARACTER,
        tags_1.HERO,
        tags_1.MYTHICAL,
    ])
};
exports.default = RusselKing;
