"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../../constants");
const page_ids_1 = require("../../../page-ids");
const tags_1 = require("../tags");
const appearance_1 = __importDefault(require("./appearance"));
const associations_1 = __importDefault(require("./associations"));
const attributes_1 = __importDefault(require("./attributes"));
const headline_1 = __importDefault(require("./headline"));
const Achilles = {
    id: page_ids_1.ACHILLES_PAGE_ID,
    type: constants_1.CHARACTERS_PAGE_TYPE,
    name: 'Achilles',
    pageImage: {
        url: (0, constants_1.imgurLink)('uR7mq3B'),
        caption: 'Achilles (Age 17)'
    },
    sections: [
        attributes_1.default,
        headline_1.default,
        appearance_1.default,
        associations_1.default,
    ],
    tags: new Set([
        tags_1.META_HUMAN,
        tags_1.MAIN_CHARACTER,
        tags_1.HERO,
        tags_1.PARANORMAL,
    ])
};
exports.default = Achilles;
