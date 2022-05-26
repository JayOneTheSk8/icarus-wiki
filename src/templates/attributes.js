"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
exports.default = (sectionName, customSectionName) => `import { AttributesSection } from '../../../DataTypes'${sectionName === constants_1.ATTRIBUTES ? `\nimport { ATTRIBUTES } from '../../../constants'` : ''}

const attributes: AttributesSection = {
    title: ${sectionName === constants_1.ATTRIBUTES ? 'ATTRIBUTES' : `'${customSectionName}'`},
    attributes: [
        {
            attributeName: '',
            attributeText: ''
        }
    ]
}

export default attributes
`;
