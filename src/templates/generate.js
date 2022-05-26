"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
/* Templates */
const associations_1 = __importDefault(require("./associations"));
const attributes_1 = __importDefault(require("./attributes"));
const gallery_1 = __importDefault(require("./gallery"));
const page_id_1 = __importDefault(require("./page-id"));
const page_section_1 = __importDefault(require("./page-section"));
const page_1 = __importDefault(require("./page"));
/* Sections */
const constants_1 = require("../constants");
/* Flags */
const helpOptions = ['-h', '--help'];
const characterOptions = ['-c', '--char'];
const noteOptions = ['-n', '--note'];
const pageOptions = ['-p', '--page'];
const sectionOptions = ['-s', '--section'];
/* File Directories */
const charDir = (charPageName) => `src-ts/WikiData/characters/${charPageName}`;
const noteDir = (notePageName) => `src-ts/WikiData/notes/${notePageName}`;
/* Arguments */
const firstArg = process.argv[2];
const secondArg = process.argv[3];
const pageName = process.argv[4];
const sectionName = process.argv[5];
/* Text transform functions */
// Checks if passed name is multiple words
const isMultipleWords = (name) => name.indexOf(' ') !== -1;
// Converts one word name to Titlecase 
const titleCase = (name) => name[0].toUpperCase() + name.slice(1).toLowerCase();
// Converts multiple words in string to PascalCase
const toPascalCase = (name) => {
    const parts = name.split(' ').map((n) => {
        return titleCase(n);
    });
    return parts.join('');
};
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
// When asking for help
if (helpOptions.includes(firstArg)) {
    console.log('Simple template generation script');
    console.log('WARNING: Will overwrite same file if created\n');
    console.log(`Usage: 'npm run generate -- [Page Type Flag] [Page or Section Flag] [name of page] [name of section]'\n`);
    console.log('   -h, --help                          Access this menu');
    console.log('Page Type Flags:');
    console.log('   -c, --char                          Character Page');
    console.log('   -n, --note                          Note Page\n');
    console.log('Page/Section Flags:');
    console.log('   -p, --page                          Create Page');
    console.log('   -s, --section                       Create Section\n');
    console.log('Example:');
    console.log('   npm run g -- -c -p "Character One"');
    console.log('   --or--');
    console.log('   npm run g -- -char -page CharacterOne');
    console.log('   creates new character page template and page ID for "Character One"\n');
    console.log('   npm run g -- -char -s CharacterOne attributes');
    console.log('   creates new character attributes section template for "Character One"');
    console.log('Also:');
    console.log('   npm run gen-char-page -- CharacterOne');
    console.log('   npm run gen-char-sect -- CharacterOne gallery');
    console.log('   npm run gen-note-page -- "Reindeer Games"');
    console.log('   npm run gen-note-sect -- "Reindeer Games" appearance');
}
else if (characterOptions.includes(firstArg)) {
    // When flag is -c or --char
    if (pageOptions.includes(secondArg)) {
        // When second flag is -p or --page
        // Make PageName and PAGE_CONST
        const pascalName = isMultipleWords(pageName) ? toPascalCase(pageName) : titleCase(pageName);
        const pageConst = fromPascalToConstCase(pascalName);
        // Make character directory if does not exist
        fs_1.default.existsSync(charDir(pascalName)) || fs_1.default.mkdirSync(charDir(pascalName));
        // Write file with page template
        fs_1.default.writeFile(`${charDir(pascalName)}/index.ts`, (0, page_1.default)(pageName, pascalName, pageConst), (err) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log(`Page ${pascalName} written successfully`);
            }
        });
        // Append page id to file
        fs_1.default.appendFile('src-ts/page-ids.ts', (0, page_id_1.default)(pageConst), (err) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log(`ID ${pageConst} created successfully`);
            }
        });
    }
    else if (sectionOptions.includes(secondArg)) {
        // When second flag is -s or --section
        // Make PageName, PageSectionName, and page-section-name
        const pascalPageName = isMultipleWords(pageName) ? toPascalCase(pageName) : titleCase(pageName);
        const pascalSectionName = isMultipleWords(sectionName) ? toPascalCase(sectionName) : titleCase(sectionName);
        const kebabSectionName = fromPascalToKebabCase(pascalSectionName);
        // Make page directory if does not exist
        fs_1.default.existsSync(charDir(pascalPageName)) || fs_1.default.mkdirSync(charDir(pascalPageName));
        if (constants_1.ASSOCIATIONS_TITLES_LIST.includes(pascalSectionName)) {
            // Write associations section under page
            fs_1.default.writeFile(`${charDir(pascalPageName)}/${kebabSectionName}.ts`, (0, associations_1.default)(pascalSectionName, sectionName), (err) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(`Section ${pascalSectionName} written successfully`);
                }
            });
        }
        else if (constants_1.ATTRIBUTES_TITLES_LIST.includes(pascalSectionName)) {
            // Write attributes section under page
            fs_1.default.writeFile(`${charDir(pascalPageName)}/${kebabSectionName}.ts`, (0, attributes_1.default)(pascalSectionName, sectionName), (err) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(`Section ${pascalSectionName} written successfully`);
                }
            });
        }
        else if (constants_1.GALLERY_TITLES_LIST.includes(pascalSectionName)) {
            // Write gallery section under page
            fs_1.default.writeFile(`${charDir(pascalPageName)}/${kebabSectionName}.ts`, (0, gallery_1.default)(pascalSectionName, sectionName), (err) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(`Section ${pascalSectionName} written successfully`);
                }
            });
        }
        else {
            // Write generic page section
            fs_1.default.writeFile(`${charDir(pascalPageName)}/${kebabSectionName}.ts`, (0, page_section_1.default)(pascalSectionName), (err) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(`Section "${sectionName}" written successfully`);
                }
            });
        }
    }
}
else if (noteOptions.includes(firstArg)) {
    // When flag is -n or --note
    if (pageOptions.includes(secondArg)) {
        // When second flag is -p or --page
        // Make PageName and PAGE_CONST
        const pascalName = isMultipleWords(pageName) ? toPascalCase(pageName) : titleCase(pageName);
        const pageConst = fromPascalToConstCase(pascalName);
        // Make note directory if does not exist
        fs_1.default.existsSync(noteDir(pascalName)) || fs_1.default.mkdirSync(noteDir(pascalName));
        // Write note page
        fs_1.default.writeFile(`${noteDir(pascalName)}/index.ts`, (0, page_1.default)(pageName, pascalName, pageConst), (err) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log(`Page ${pascalName} written successfully`);
            }
        });
        // Append page id to file
        fs_1.default.appendFile('src-ts/page-ids.ts', (0, page_id_1.default)(pageConst), (err) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log(`ID ${pageConst} created successfully`);
            }
        });
    }
    else if (sectionOptions.includes(secondArg)) {
        // When second flag is -s or --section
        // Make PageName, PageSectionName, and page-section-name
        const pascalPageName = isMultipleWords(pageName) ? toPascalCase(pageName) : titleCase(pageName);
        const pascalSectionName = isMultipleWords(sectionName) ? toPascalCase(sectionName) : titleCase(sectionName);
        const kebabSectionName = fromPascalToKebabCase(pascalSectionName);
        // Make note directory if does not exist
        fs_1.default.existsSync(noteDir(pascalPageName)) || fs_1.default.mkdirSync(noteDir(pascalPageName));
        if (constants_1.ASSOCIATIONS_TITLES_LIST.includes(pascalSectionName)) {
            // Write associations section under page
            fs_1.default.writeFile(`${noteDir(pascalPageName)}/${kebabSectionName}.ts`, (0, associations_1.default)(pascalSectionName, sectionName), (err) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(`Section ${pascalSectionName} written successfully`);
                }
            });
        }
        else if (constants_1.ATTRIBUTES_TITLES_LIST.includes(pascalSectionName)) {
            // Write attributes section under page
            fs_1.default.writeFile(`${noteDir(pascalPageName)}/${kebabSectionName}.ts`, (0, attributes_1.default)(pascalSectionName, sectionName), (err) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(`Section ${pascalSectionName} written successfully`);
                }
            });
        }
        else if (constants_1.GALLERY_TITLES_LIST.includes(pascalSectionName)) {
            // Write gallery section under page
            fs_1.default.writeFile(`${noteDir(pascalPageName)}/${kebabSectionName}.ts`, (0, gallery_1.default)(pascalSectionName, sectionName), (err) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(`Section ${pascalSectionName} written successfully`);
                }
            });
        }
        else {
            // Write generic page section
            fs_1.default.writeFile(`${noteDir(pascalPageName)}/${kebabSectionName}.ts`, (0, page_section_1.default)(pascalSectionName), (err) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(`Section "${sectionName}" written successfully`);
                }
            });
        }
    }
}
