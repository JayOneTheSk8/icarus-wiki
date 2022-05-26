import {
    SECTION_TITLES_LIST,
    ABILITIES,
    APPEARANCE,
    HEADLINE,
    HISTORY,
    DESCRIPTION,
} from '../constants'

// Checks if section is in given titles list
const inSectionTitlesList = (sectionName: string): boolean => SECTION_TITLES_LIST.includes(sectionName)
// Creates import statement for given section
const importSectionTitleConst = (sectionName: string): string => {
    switch (sectionName) {
        case ABILITIES:
            return "import { ABILITIES } from '../../../constants'"
        case APPEARANCE:
            return "import { APPEARANCE } from '../../../constants'"
        case HEADLINE:
            return "import { HEADLINE } from '../../../constants'"
        case HISTORY:
            return "import { HISTORY } from '../../../constants'"
        case DESCRIPTION:
            return "import { DESCRIPTION } from '../../../constants'"
        default:
            return ''
    }
}
// Gets the CONST_NAME of the given section or empty string
const sectionTitleConst = (sectionName: string): string => {
    switch (sectionName) {
        case ABILITIES:
            return 'ABILITIES'
        case APPEARANCE:
            return 'APPEARANCE'
        case HEADLINE:
            return 'HEADLINE'
        case HISTORY:
            return 'HISTORY'
        case DESCRIPTION:
            return 'DESCRIPTION'
        default:
            return ''
    }
}

// Converts string from PascalCase to camelCase
const fromPascalToCamel = (name: string): string => name[0].toLowerCase() + name.slice(1)
// Converts string from PascalCase to Sentence Title Case 
const fromPascalToTitle = (name: string): string => {
    let result = ''
    name.split('').forEach((char, idx) => {
        if (char === char.toUpperCase() && idx !== 0) {
            result += (' ' + char)
        } else {
            result += char
        }
    })

    return result
}

export default (sectionName: string): string => `import { PageSection } from '../../../DataTypes'${
    inSectionTitlesList(sectionName) ? `\n${importSectionTitleConst(sectionName)}` : ''
}

const ${fromPascalToCamel(sectionName)}: PageSection = {
    title: ${sectionTitleConst(sectionName) || `'${fromPascalToTitle(sectionName)}'`},
    body: ''
}

export default ${fromPascalToCamel(sectionName)}
`
