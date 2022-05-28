"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../../constants");
const page_ids_1 = require("../../../page-ids");
const attributes_1 = __importDefault(require("./attributes"));
const description_1 = __importDefault(require("./description"));
const StoneFaced = {
    id: page_ids_1.STONE_FACED_PAGE_ID,
    type: constants_1.NOTES_PAGE_TYPE,
    name: 'Stone-Faced',
    pageImage: {
        url: constants_1.DRIVE_VIEW_PREFIX + '1cx-R2-OwVB04JDTL7jqz-1EkcTR5zo99'
    },
    sections: [
        attributes_1.default,
        description_1.default,
    ]
};
exports.default = StoneFaced;
