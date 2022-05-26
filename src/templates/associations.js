"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
const constants_1 = require("../constants");
exports.default = (sectionName, customSectionName) => `import { AssociationsSection } from '../../../DataTypes'${sectionName === constants_1.ASSOCIATIONS ? "\nimport { ASSOCIATIONS } from '../../../constants'" : ''}

const associations: AssociationsSection = {
    title: ${sectionName === constants_1.ASSOCIATIONS ? 'ASSOCIATIONS' : `'${(0, util_1.fromPascalToTitle)(customSectionName)}'`},
    associations: [
        {
            associationName: '',
            associationPageIds: []
        }
    ]
}

export default associations
`;
