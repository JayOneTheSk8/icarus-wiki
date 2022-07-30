import fs from 'fs'

/* Templates */
import associations from './associations'
import attributes from './attributes'
import gallery from './gallery'
import pageId from './page-id'
import pageSection from './page-section'
import page from './page'

/* Sections */
import {
    ASSOCIATIONS_TITLES_LIST,
    ATTRIBUTES_TITLES_LIST,
    GALLERY_TITLES_LIST,
    CHARACTERS_PAGE_TYPE,
    NOTES_PAGE_TYPE,
} from '../constants'

/* Text Functions */
import {
    isMultipleWords,
    titleCase,
    toPascalCase,
    fromPascalToConstCase,
    fromPascalToKebabCase,
} from './util'

/* Flags */
const helpOptions: Array<string> = ['-h', '--help']
const characterOptions: Array<string> = ['-c', '--char']
const noteOptions: Array<string> = ['-n', '--note']

const pageOptions: Array<string> = ['-p', '--page']
const sectionOptions: Array<string> = ['-s', '--section']

/* File Directories */
export const charDir = (charPageName: string): string => `src-ts/WikiData/characters/${charPageName}`
export const noteDir = (notePageName: string): string => `src-ts/WikiData/notes/${notePageName}`

export const generate = (firstArg: string, secondArg: string, pageName: string, sectionName: string): void => {
    // When asking for help
    if (!firstArg || helpOptions.includes(firstArg)) {
        /* eslint no-console: "off" */
        console.log('Simple template generation script')

        console.log('WARNING: Will overwrite same file if created\n')
        console.log(`Usage: 'npm run generate -- [Page Type Flag] [Page or Section Flag] [name of page] [name of section]'\n`)
        console.log('   -h, --help                          Access this menu\n')

        console.log('Page Type Flags:')
        console.log('   -c, --char                          Character Page')
        console.log('   -n, --note                          Note Page\n')

        console.log('Page/Section Flags:')
        console.log('   -p, --page                          Create Page')
        console.log('   -s, --section                       Create Section\n')

        console.log('Example:')
        console.log('   npm run g -- -c -p "Character One"')
        console.log('   --or--')
        console.log('   npm run g -- -char -page CharacterOne')
        console.log('   creates new character page template and page ID for "Character One"')
        console.log('   (note: must be PascalCase or separated String)\n')

        console.log('   npm run g -- -char -s CharacterOne attributes')
        console.log('   creates new character attributes section template for "Character One"')

        console.log('Also:')
        console.log('   npm run gen-char-page -- CharacterOne')
        console.log('   npm run gen-char-sect -- CharacterOne gallery')
        console.log('   npm run gen-note-page -- "Reindeer Games"')
        console.log('   npm run gen-note-sect -- "Reindeer Games" appearance')

    } else if (characterOptions.includes(firstArg)) {
        // When flag is -c or --char
        if (pageOptions.includes(secondArg)) {
            // When second flag is -p or --page

            // If page name is passed
            if (pageName) {
                // Make PageName and PAGE_CONST
                const pascalName = isMultipleWords(pageName) ? toPascalCase(pageName) : titleCase(pageName)
                const pageConst = fromPascalToConstCase(pascalName)

                // Make character directory if does not exist
                fs.existsSync(charDir(pascalName)) || fs.mkdirSync(charDir(pascalName))

                // Write file with page template
                fs.writeFile(`${charDir(pascalName)}/index.ts`, page(pascalName, pageConst, CHARACTERS_PAGE_TYPE), (err) => {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log(`Page ${pascalName} written successfully`)
                    }
                })

                // Append page id to file
                fs.appendFile('src-ts/page-ids.ts', pageId(pageConst), (err) => {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log(`ID ${pageConst} created successfully`)
                    }

                })
            }

        } else if (sectionOptions.includes(secondArg)) {
            // When second flag is -s or --section

            // If page name and section name are passed
            if (pageName && sectionName) {
                // Make PageName, PageSectionName, and page-section-name
                const pascalPageName = isMultipleWords(pageName) ? toPascalCase(pageName) : titleCase(pageName)
                const pascalSectionName = isMultipleWords(sectionName) ? toPascalCase(sectionName) : titleCase(sectionName)
                const kebabSectionName = fromPascalToKebabCase(pascalSectionName)

                // Make page directory if does not exist
                fs.existsSync(charDir(pascalPageName)) || fs.mkdirSync(charDir(pascalPageName))

                if (ASSOCIATIONS_TITLES_LIST.includes(pascalSectionName)) {
                    // Write associations section under page
                    fs.writeFile(
                        `${charDir(pascalPageName)}/${kebabSectionName}.ts`,
                        associations(pascalSectionName, sectionName),
                        (err) => {
                            if (err) {
                                console.log(err)
                            } else {
                                console.log(`Section ${pascalSectionName} written successfully`)
                            }
                        }
                    )

                } else if (ATTRIBUTES_TITLES_LIST.includes(pascalSectionName)) {
                    // Write attributes section under page
                    fs.writeFile(
                        `${charDir(pascalPageName)}/${kebabSectionName}.ts`,
                        attributes(pascalSectionName, sectionName),
                        (err) => {
                            if (err) {
                                console.log(err)
                            } else {
                                console.log(`Section ${pascalSectionName} written successfully`)
                            }
                        }
                    )

                } else if (GALLERY_TITLES_LIST.includes(pascalSectionName)) {
                    // Write gallery section under page
                    fs.writeFile(
                        `${charDir(pascalPageName)}/${kebabSectionName}.ts`,
                        gallery(pascalSectionName, sectionName),
                        (err) => {
                            if (err) {
                                console.log(err)
                            } else {
                                console.log(`Section ${pascalSectionName} written successfully`)
                            }
                        }
                    )

                } else {
                    // Write generic page section
                    fs.writeFile(
                        `${charDir(pascalPageName)}/${kebabSectionName}.ts`,
                        pageSection(pascalSectionName),
                        (err) => {
                            if (err) {
                                console.log(err)
                            } else {
                                console.log(`Section "${sectionName}" written successfully`)
                            }
                        }
                    )
                }
            }

        }

    } else if (noteOptions.includes(firstArg)) {
        // When flag is -n or --note
        if (pageOptions.includes(secondArg)) {
            // When second flag is -p or --page

            // If page name is passed
            if (pageName) {
                // Make PageName and PAGE_CONST
                const pascalName = isMultipleWords(pageName) ? toPascalCase(pageName) : titleCase(pageName)
                const pageConst = fromPascalToConstCase(pascalName)

                // Make note directory if does not exist
                fs.existsSync(noteDir(pascalName)) || fs.mkdirSync(noteDir(pascalName))

                // Write note page
                fs.writeFile(`${noteDir(pascalName)}/index.ts`, page(pascalName, pageConst, NOTES_PAGE_TYPE), (err) => {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log(`Page ${pascalName} written successfully`)
                    }
                })

                // Append page id to file
                fs.appendFile('src-ts/page-ids.ts', pageId(pageConst), (err) => {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log(`ID ${pageConst} created successfully`)
                    }

                })
            }

        } else if (sectionOptions.includes(secondArg)) {
            // When second flag is -s or --section

            // If page name and section name are passed
            if (pageName && sectionName) {
                // Make PageName, PageSectionName, and page-section-name
                const pascalPageName = isMultipleWords(pageName) ? toPascalCase(pageName) : titleCase(pageName)
                const pascalSectionName = isMultipleWords(sectionName) ? toPascalCase(sectionName) : titleCase(sectionName)
                const kebabSectionName = fromPascalToKebabCase(pascalSectionName)

                // Make note directory if does not exist
                fs.existsSync(noteDir(pascalPageName)) || fs.mkdirSync(noteDir(pascalPageName))

                if (ASSOCIATIONS_TITLES_LIST.includes(pascalSectionName)) {
                    // Write associations section under page
                    fs.writeFile(
                        `${noteDir(pascalPageName)}/${kebabSectionName}.ts`,
                        associations(pascalSectionName, sectionName),
                        (err) => {
                            if (err) {
                                console.log(err)
                            } else {
                                console.log(`Section ${pascalSectionName} written successfully`)
                            }
                        }
                    )

                } else if (ATTRIBUTES_TITLES_LIST.includes(pascalSectionName)) {
                    // Write attributes section under page
                    fs.writeFile(
                        `${noteDir(pascalPageName)}/${kebabSectionName}.ts`,
                        attributes(pascalSectionName, sectionName),
                        (err) => {
                            if (err) {
                                console.log(err)
                            } else {
                                console.log(`Section ${pascalSectionName} written successfully`)
                            }
                        }
                    )

                } else if (GALLERY_TITLES_LIST.includes(pascalSectionName)) {
                    // Write gallery section under page
                    fs.writeFile(
                        `${noteDir(pascalPageName)}/${kebabSectionName}.ts`,
                        gallery(pascalSectionName, sectionName),
                        (err) => {
                            if (err) {
                                console.log(err)
                            } else {
                                console.log(`Section ${pascalSectionName} written successfully`)
                            }
                        }
                    )

                } else {
                    // Write generic page section
                    fs.writeFile(
                        `${noteDir(pascalPageName)}/${kebabSectionName}.ts`,
                        pageSection(pascalSectionName),
                        (err) => {
                            if (err) {
                                console.log(err)
                            } else {
                                console.log(`Section "${sectionName}" written successfully`)
                            }
                        }
                    )
                }
            }
        }
    }
}

process.argv[2] === 'run' && generate(process.argv[3], process.argv[4], process.argv[5], process.argv[6])
