"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../constants");
const headline = {
    title: constants_1.HEADLINE,
    body: 'Russel King is one of the main characters in the story "Icarus".'
};
const appearance = {
    title: constants_1.APPEARANCE,
    body: 'Russel has an afro.'
};
const abilities = {
    title: constants_1.ABILITIES,
    body: 'Russel has wings.'
};
exports.default = {
    name: "Russel King",
    sections: [
        headline,
        appearance,
        abilities,
    ]
};
