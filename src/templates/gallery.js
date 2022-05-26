"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
exports.default = (sectionName, customSectionName) => `import { GallerySection } from '../../../DataTypes'${sectionName === constants_1.GALLERY ? `\nimport { GALLERY } from '../../../constants'` : ''}

const gallery: GallerySection = {
    title: ${sectionName === constants_1.GALLERY ? 'GALLERY' : `'${customSectionName}'`},
    gallery: [
        {
            url: '',
            caption: ''
        }
    ]
}

export default gallery
`;
