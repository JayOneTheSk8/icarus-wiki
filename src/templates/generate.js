"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
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
/* Text Functions */
const util_1 = require("./util");
/* Flags */
const helpOptions = ['-h', '--help'];
const characterOptions = ['-c', '--char'];
const noteOptions = ['-n', '--note'];
const pageOptions = ['-p', '--page'];
const sectionOptions = ['-s', '--section'];
/* File Directories */
const charDir = (charPageName) => `src-ts/WikiData/characters/${charPageName}`;
const noteDir = (notePageName) => `src-ts/WikiData/notes/${notePageName}`;
const generate = (firstArg, secondArg, pageName, sectionName) => {
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
        console.log('   creates new character page template and page ID for "Character One"');
        console.log('   (note: must be PascalCase or separated String)\n');
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
            const pascalName = (0, util_1.isMultipleWords)(pageName) ? (0, util_1.toPascalCase)(pageName) : (0, util_1.titleCase)(pageName);
            const pageConst = (0, util_1.fromPascalToConstCase)(pascalName);
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
            const pascalPageName = (0, util_1.isMultipleWords)(pageName) ? (0, util_1.toPascalCase)(pageName) : (0, util_1.titleCase)(pageName);
            const pascalSectionName = (0, util_1.isMultipleWords)(sectionName) ? (0, util_1.toPascalCase)(sectionName) : (0, util_1.titleCase)(sectionName);
            const kebabSectionName = (0, util_1.fromPascalToKebabCase)(pascalSectionName);
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
            const pascalName = (0, util_1.isMultipleWords)(pageName) ? (0, util_1.toPascalCase)(pageName) : (0, util_1.titleCase)(pageName);
            const pageConst = (0, util_1.fromPascalToConstCase)(pascalName);
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
            const pascalPageName = (0, util_1.isMultipleWords)(pageName) ? (0, util_1.toPascalCase)(pageName) : (0, util_1.titleCase)(pageName);
            const pascalSectionName = (0, util_1.isMultipleWords)(sectionName) ? (0, util_1.toPascalCase)(sectionName) : (0, util_1.titleCase)(sectionName);
            const kebabSectionName = (0, util_1.fromPascalToKebabCase)(pascalSectionName);
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
};
exports.generate = generate;
(0, exports.generate)(process.argv[2], process.argv[3], process.argv[4], process.argv[5]);
