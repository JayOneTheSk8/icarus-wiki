"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../constants");
const description = {
    title: constants_1.DESCRIPTION,
    body: [
        {
            subSectionTitle: '',
            subSectionImage: {
                url: constants_1.DRIVE_VIEW_PREFIX + '1mKmYSBYPlS7cxx8hN2hCcVq3Zt00Akch',
                caption: 'Ester Island Maoi'
            },
            subSectionText: '"stone-face(d)" is a shorthand parenthetical used in the story Icarus to describe a character expressing a 😑 face. The name is meant to mimic the faces of the Moai statues of Easter Island.'
        }
    ]
};
const attributes = {
    title: constants_1.ATTRIBUTES,
    attributes: [
        {
            attributeName: 'Other Names',
            attributeText: `Annoyed face, c'mon son face, straight line face`
        }
    ]
};
const StoneFaced = {
    name: "Stone-Faced",
    pageImage: {
        url: constants_1.DRIVE_VIEW_PREFIX + '1cx-R2-OwVB04JDTL7jqz-1EkcTR5zo99'
    },
    sections: [
        attributes,
        description,
    ]
};
exports.default = StoneFaced;
