"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
const constants_1 = require("../constants");
exports.default = (sectionName, customSectionName) => `import { GallerySection } from '../../../DataTypes'${sectionName === constants_1.GALLERY ? `\nimport { GALLERY } from '../../../constants'` : ''}

const gallery: GallerySection = {
    title: ${sectionName === constants_1.GALLERY ? 'GALLERY' : `'${(0, util_1.fromPascalToTitle)(customSectionName)}'`},
    gallery: [
        {
            url: '',
            caption: ''
        }
    ]
}

export default gallery
`;
