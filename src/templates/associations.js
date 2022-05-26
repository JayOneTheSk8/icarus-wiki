"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
exports.default = (sectionName, customSectionName) => `import { AssociationsSection } from '../../../DataTypes'${sectionName === constants_1.ASSOCIATIONS ? "\nimport { ASSOCIATIONS } from '../../../constants'" : ''}

const associations: AssociationsSection = {
    title: ${sectionName === constants_1.ASSOCIATIONS ? 'ASSOCIATIONS' : `'${customSectionName}'`},
    associations: [
        {
            associationName: '',
            associationPageIds: []
        }
    ]
}

export default associations
`;
