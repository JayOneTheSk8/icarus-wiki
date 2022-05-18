"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../constants");
const headline = {
    sectionName: constants_1.HEADLINE,
    sectionText: 'Russel King is one of the main characters in the story "Icarus".'
};
const appearance = {
    sectionName: constants_1.APPEARANCE,
    sectionText: 'Russel has an afro.'
};
const abilities = {
    sectionName: constants_1.ABILITIES,
    sectionText: 'Russel has wings.'
};
exports.default = {
    name: "Russel King",
    sections: [
        headline,
        appearance,
        abilities,
    ]
};
