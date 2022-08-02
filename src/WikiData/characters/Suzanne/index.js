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
const Suzanne = {
    id: page_ids_1.SUZANNE_PAGE_ID,
    type: constants_1.CHARACTERS_PAGE_TYPE,
    name: 'Suzanne',
    pageImage: {
        url: (0, constants_1.imgurLink)('96ssxL6')
    },
    sections: [
        attributes_1.default,
        headline_1.default,
        appearance_1.default,
        associations_1.default,
    ],
    tags: new Set([
        tags_1.ANTI_HERO,
        tags_1.META_HUMAN,
        tags_1.MYTHICAL,
    ])
};
exports.default = Suzanne;
