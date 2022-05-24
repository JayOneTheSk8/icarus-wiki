"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../../constants");
const page_ids_1 = require("../../../page-ids");
const appearance_1 = __importDefault(require("./appearance"));
const attributes_1 = __importDefault(require("./attributes"));
const headline_1 = __importDefault(require("./headline"));
const DrWeed = {
    id: page_ids_1.DR_WEED_PAGE_ID,
    name: 'Dr Weed',
    pageImage: {
        url: constants_1.DRIVE_VIEW_PREFIX + '1Qm31QZc0p2sZlo7w8eq7hJFEGD8kyWhx'
    },
    sections: [
        attributes_1.default,
        headline_1.default,
        appearance_1.default,
    ]
};
exports.default = DrWeed;
