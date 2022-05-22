"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../constants");
const attribues = {
    title: constants_1.ATTRIBUTES,
    attributes: [
        {
            attributeName: 'Other Names',
            attributeText: 'Reg (Russel King)'
        },
        {
            attributeName: 'Gender',
            attributeText: 'Male'
        },
        {
            attributeName: 'Age',
            attributeText: '16'
        },
        {
            attributeName: 'Height',
            attributeText: `5' 3"`
        },
        {
            attributeName: 'Birthday',
            attributeText: 'March 16th, 1980'
        },
        {
            attributeName: 'Birthplace',
            attributeText: 'Philadelphia, PA'
        },
        {
            attributeName: 'Meta-Human Type',
            attributeText: 'Mythical'
        },
        {
            attributeName: 'Race',
            attributeText: 'Human'
        },
        {
            attributeName: 'Hair Color',
            attributeText: 'Black'
        },
        {
            attributeName: 'Hair Style',
            attributeText: 'Cornrows'
        },
        {
            attributeName: 'Facial Hair',
            attributeText: 'Chin Peach Fuzz'
        },
        {
            attributeName: 'Debut',
            attributeText: 'Chapter 1: Elements of Surprise'
        },
    ]
};
const headline = {
    title: constants_1.HEADLINE,
    body: 'Reginald "Reggie" King is one of the primary protagonists of the story "Icarus". He and his brother Russel are given elemental powers following an accident with a mythical object. He is quite bold and tries to take action in any situation that arises. Reggie sees the true world around him after being given special abilities and takes it head on.'
};
const appearance = {
    title: constants_1.APPEARANCE,
    body: [
        {
            subSectionTitle: 'Age 16',
            subSectionText: 'Reggie is an average height dark- skinned teen who wears his long hair in cornrows.His braided hair reaches the middle of his back.He has a small amount of peach fuzz on his chin and a rather wide nose.',
        },
        {
            subSectionTitle: 'Post Divine Rope',
            subSectionText: 'Reggie looks similar after receiving a piece of the mythical rope.The only difference is, on his back, he has a rope embedded shaped like a pitchfork with three prongs.The base of the prongs is below the back of his neck with the ends going along the back of both his arms and down his back to just above his waist.',
        },
    ]
};
const gallery = {
    title: constants_1.GALLERY,
    gallery: [
        {
            url: constants_1.DRIVE_VIEW_PREFIX + '1RHPsg3vWivrJCz0TCannWyifzdehBAaN'
        }
    ]
};
const ReggieKing = {
    name: 'Reggie King',
    pageImage: {
        url: constants_1.DRIVE_VIEW_PREFIX + '1PnMGTIJsaIy__AkWuYpAM4G9-saN4VQ5',
        caption: 'Reggie (Age 16)'
    },
    sections: [
        attribues,
        headline,
        appearance,
        gallery,
    ]
};
exports.default = ReggieKing;
