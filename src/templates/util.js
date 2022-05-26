"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sectionTitleConst = exports.importSectionTitleConst = exports.inSectionTitlesList = exports.fromPascalToTitle = exports.fromPascalToCamel = exports.fromPascalToKebabCase = exports.fromPascalToConstCase = exports.toPascalCase = exports.titleCase = exports.isMultipleWords = void 0;
const constants_1 = require("../constants");
// Checks if passed name is multiple words
const isMultipleWords = (name) => name.indexOf(' ') !== -1;
exports.isMultipleWords = isMultipleWords;
// Capitalises first character in string (assumes remaining is pascalcased)
const titleCase = (name) => name[0].toUpperCase() + name.slice(1);
exports.titleCase = titleCase;
// Converts multiple words in string to PascalCase
const toPascalCase = (name) => {
    const parts = name.split(' ').map((n) => {
        return (0, exports.titleCase)(n);
    });
    return parts.join('');
};
exports.toPascalCase = toPascalCase;
// Converts pascal/titlecase string to CONST_CASE
const fromPascalToConstCase = (pascalStr) => {
    let result = '';
    // Keep reference of uppercase letters
    const upperedPascal = pascalStr.toUpperCase();
    pascalStr.split('').forEach((char, idx) => {
        // If the current char is uppercase and it's not at the first idx
        if (char === char.toUpperCase() && idx !== 0) {
            // Add an underscore and the uppercased letter
            result += ('_' + upperedPascal[idx]);
        }
        else {
            // Otherwise, just add the uppercased letter
            result += upperedPascal[idx];
        }
    });
    return result;
};
exports.fromPascalToConstCase = fromPascalToConstCase;
// Converts pascal case string to kebab-case
const fromPascalToKebabCase = (pascalStr) => {
    let result = '';
    // Keep reference of lowercase letters
    const loweredPascal = pascalStr.toLowerCase();
    pascalStr.split('').forEach((char, idx) => {
        // If the current char is uppercase and it's not at the first idx
        if (char === char.toUpperCase() && idx !== 0) {
            // Add a hyphen and the lowercased letter
            result += ('-' + loweredPascal[idx]);
        }
        else {
            // Otherwise, just add the lowercased letter
            result += loweredPascal[idx];
        }
    });
    return result;
};
exports.fromPascalToKebabCase = fromPascalToKebabCase;
// Converts string from PascalCase to camelCase
const fromPascalToCamel = (name) => name[0].toLowerCase() + name.slice(1);
exports.fromPascalToCamel = fromPascalToCamel;
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
exports.fromPascalToTitle = fromPascalToTitle;
// Checks if section is in given titles list
const inSectionTitlesList = (sectionName) => constants_1.SECTION_TITLES_LIST.includes(sectionName);
exports.inSectionTitlesList = inSectionTitlesList;
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
exports.importSectionTitleConst = importSectionTitleConst;
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
exports.sectionTitleConst = sectionTitleConst;
