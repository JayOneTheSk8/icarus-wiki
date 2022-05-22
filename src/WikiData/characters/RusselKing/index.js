"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../../constants");
const appearance_1 = __importDefault(require("./appearance"));
const attributes_1 = __importDefault(require("./attributes"));
const gallery_1 = __importDefault(require("./gallery"));
const headline_1 = __importDefault(require("./headline"));
const RusselKing = {
    name: "Russel King",
    pageImage: {
        url: constants_1.DRIVE_VIEW_PREFIX + '1QAiWVNXwS6Zgvyqxkz2LwEKe1ti3bJ66',
        caption: 'Russel (Age 13)'
    },
    sections: [
        attributes_1.default,
        headline_1.default,
        appearance_1.default,
        gallery_1.default,
    ]
};
exports.default = RusselKing;
