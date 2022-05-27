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
const associations_1 = __importDefault(require("./associations"));
const Ferguson = {
    id: page_ids_1.FERGUSON_PAGE_ID,
    name: 'Sgt. Ferguson',
    pageImage: {
        url: constants_1.DRIVE_VIEW_PREFIX + '1RWqIfCXbWc9K4gbW7p7KMQFWOpdhhwmK'
    },
    sections: [
        attributes_1.default,
        headline_1.default,
        appearance_1.default,
        associations_1.default,
    ]
};
exports.default = Ferguson;
