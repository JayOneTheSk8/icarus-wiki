import {
    ABILITIES,
    APPEARANCE,
    HEADLINE,
    HISTORY,
    DESCRIPTION,
    SECTION_TITLES_LIST,
} from '../constants'

// Checks if passed name is multiple words
export const isMultipleWords = (name: string): boolean => name.indexOf(' ') !== -1

// Capitalises first character in string (assumes remaining is pascalcased)
export const titleCase = (name: string): string => name[0].toUpperCase() + name.slice(1)

// Converts multiple words in string to PascalCase
export const toPascalCase = (name: string): string => {
    const parts = name.split(' ').map((n) => {
        return titleCase(n)
    })
    return parts.join('')
}

// Converts pascal/titlecase string to CONST_CASE
export const fromPascalToConstCase = (pascalStr: string): string => {
    let result = ''
    // Keep reference of uppercase letters
    const upperedPascal = pascalStr.toUpperCase()

    pascalStr.split('').forEach((char, idx) => {
        // If the current char is uppercase and it's not at the first idx
        if (char === char.toUpperCase() && idx !== 0) {
            // Add an underscore and the uppercased letter
            result += ('_' + upperedPascal[idx])
        } else {
            // Otherwise, just add the uppercased letter
            result += upperedPascal[idx]
        }
    })

    return result
}

// Converts pascal case string to kebab-case
export const fromPascalToKebabCase = (pascalStr: string): string => {
    let result = ''
    // Keep reference of lowercase letters
    const loweredPascal = pascalStr.toLowerCase()

    pascalStr.split('').forEach((char, idx) => {
        // If the current char is uppercase and it's not at the first idx
        if (char === char.toUpperCase() && idx !== 0) {
            // Add a hyphen and the lowercased letter
            result += ('-' + loweredPascal[idx])
        } else {
            // Otherwise, just add the lowercased letter
            result += loweredPascal[idx]
        }
    })

    return result
}

// Converts string from PascalCase to camelCase
export const fromPascalToCamel = (name: string): string => name[0].toLowerCase() + name.slice(1)

// Converts string from PascalCase to Sentence Title Case
export const fromPascalToTitle = (name: string): string => {
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

// Checks if section is in given titles list
export const inSectionTitlesList = (sectionName: string): boolean => SECTION_TITLES_LIST.includes(sectionName)

// Creates import statement for given section
export const importSectionTitleConst = (sectionName: string): string => {
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
export const sectionTitleConst = (sectionName: string): string => {
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
