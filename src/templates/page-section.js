"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
// Checks if section is in given titles list
const inSectionTitlesList = (sectionName) => constants_1.SECTION_TITLES_LIST.includes(sectionName);
// Creates import statement for given section
const importSectionTitleConst = (sectionName) => {
    switch (sectionName) {
        case constants_1.ABILITIES:
            return "import { ABILITIES } from '../../../constants'";
        case constants_1.APPEARANCE:
            return "import { APPEARANCE } from '../../../constants'";
        case constants_1.HEADLINE:
            return "import { HEADLINE } from '../../../constants'";
        case constants_1.HISTORY:
            return "import { HISTORY } from '../../../constants'";
        case constants_1.DESCRIPTION:
            return "import { DESCRIPTION } from '../../../constants'";
        default:
            return '';
    }
};
// Gets the CONST_NAME of the given section or empty string
const sectionTitleConst = (sectionName) => {
    switch (sectionName) {
        case constants_1.ABILITIES:
            return 'ABILITIES';
        case constants_1.APPEARANCE:
            return 'APPEARANCE';
        case constants_1.HEADLINE:
            return 'HEADLINE';
        case constants_1.HISTORY:
            return 'HISTORY';
        case constants_1.DESCRIPTION:
            return 'DESCRIPTION';
        default:
            return '';
    }
};
// Converts string from PascalCase to camelCase
const fromPascalToCamel = (name) => name[0].toLowerCase() + name.slice(1);
// Converts string from PascalCase to Sentence Title Case 
const fromPascalToTitle = (name) => {
    let result = '';
    name.split('').forEach((char, idx) => {
        if (char === char.toUpperCase() && idx !== 0) {
            result += (' ' + char);
        }
        else {
            result += char;
        }
    });
    return result;
};
exports.default = (sectionName) => `import { PageSection } from '../../../DataTypes'${inSectionTitlesList(sectionName) ? `\n${importSectionTitleConst(sectionName)}` : ''}

const ${fromPascalToCamel(sectionName)}: PageSection = {
    title: ${sectionTitleConst(sectionName) || `'${fromPascalToTitle(sectionName)}'`},
    body: ''
}

export default ${fromPascalToCamel(sectionName)}
`;
