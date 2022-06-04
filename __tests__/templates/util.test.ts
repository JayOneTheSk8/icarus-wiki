import {
    isMultipleWords,
    titleCase,
    toPascalCase,
    fromPascalToConstCase,
    fromPascalToKebabCase,
    fromPascalToCamel,
    fromPascalToTitle,
    inSectionTitlesList,
    importSectionTitleConst,
    sectionTitleConst,
} from '../../src-ts/templates/util'

import {
    ABILITIES,
    APPEARANCE,
    HEADLINE,
    HISTORY,
    DESCRIPTION,
    SECTION_TITLES_LIST,
} from '../../src-ts/constants'

describe('Template Utils', () => {
    describe('isMultipleWords', () => {
        describe('when single word in string', () => {
            it('returns false', () => {
                expect(isMultipleWords('singleword')).toBe(false)
            })
        })

        describe('when multiple words separated by space in string', () => {
            it('returns true', () => {
                expect(isMultipleWords('single word')).toBe(true)
            })
        })
    })

    describe('titleCase', () => {
        describe('when word in string is all lowercased', () => {
            it('returns the string with a captialised first letter', () => {
                expect(titleCase('cool')).toEqual('Cool')
            })
        })

        describe('when word in string is all uppercased', () => {
            it('returns the string with a captialised first letter', () => {
                expect(titleCase('COOL')).toEqual('COOL')
            })
        })

        describe('when casing in string is both upper and lower cased', () => {
            it('returns the string with a captialised first letter', () => {
                expect(titleCase('someThingOrNothing')).toEqual('SomeThingOrNothing')
            })
        })
    })

    describe('toPascalCase', () => {
        describe('when single word in string', () => {
            it('returns the string with the first letter capitalised', () => {
                expect(toPascalCase('string')).toEqual('String')
            })

        })
        describe('when multiple words in string', () => {
            it('returns a single string in PascalCase', () => {
                expect(toPascalCase('some spaced string')).toEqual('SomeSpacedString')
            })

            describe('when string has multiple cases', () => {
                it('Does not interfere with already pascal cased words', () => {
                    expect(toPascalCase('SomeSpaced string')).toEqual('SomeSpacedString')
                    expect(toPascalCase('Some SpacedString')).toEqual('SomeSpacedString')
                })

                it('Uppercases first letter of camel case words', () => {
                    expect(toPascalCase('some spacedString')).toEqual('SomeSpacedString')
                    expect(toPascalCase('someSpaced string')).toEqual('SomeSpacedString')
                })

            })
        })
    })

    describe('fromPascalToConstCase', () => {
        describe('when sinlge word', () => {
            it('returns the string uppercased', () => {
                expect(fromPascalToConstCase('Cool')).toEqual('COOL')
            })
        })

        describe('when multiple words', () => {
            it('returns the string in CONST_CASE', () => {
                expect(fromPascalToConstCase('CoolCasing')).toEqual('COOL_CASING')
            })
        })
    })

    describe('fromPascalToKebabCase', () => {
        describe('when sinlge word', () => {
            it('returns the string lowercased', () => {
                expect(fromPascalToKebabCase('Cool')).toEqual('cool')
            })
        })

        describe('when multiple words', () => {
            it('returns the string in kebab-case', () => {
                expect(fromPascalToKebabCase('CoolCasing')).toEqual('cool-casing')
            })
        })
    })

    describe('fromPascalToCamel', () => {
        describe('when sinlge word', () => {
            it('returns the string lowercased', () => {
                expect(fromPascalToCamel('Cool')).toEqual('cool')
            })
        })

        describe('when multiple words', () => {
            it('returns the string in camelCase', () => {
                expect(fromPascalToCamel('CoolCasing')).toEqual('coolCasing')
            })
        })
    })

    describe('fromPascalToTitle', () => {
        describe('when sinlge word', () => {
            it('returns the string Titlecased', () => {
                expect(fromPascalToTitle('Cool')).toEqual('Cool')
            })
        })

        describe('when multiple words', () => {
            it('returns the string in Title Sentence Case', () => {
                expect(fromPascalToTitle('CoolCasing')).toEqual('Cool Casing')
            })
        })
    })

    describe('inSectionTitlesList', () => {
        describe('when string is in SECTION_TITLES_LIST', () => {
            it('returns true', () => {
                expect(SECTION_TITLES_LIST.length).toEqual(5)
                expect(inSectionTitlesList(ABILITIES)).toBe(true)
                expect(inSectionTitlesList(APPEARANCE)).toBe(true)
                expect(inSectionTitlesList(HEADLINE)).toBe(true)
                expect(inSectionTitlesList(HISTORY)).toBe(true)
                expect(inSectionTitlesList(DESCRIPTION)).toBe(true)
            })
        })

        describe('when string is not in SECTION_TITLES_LIST', () => {
            expect(inSectionTitlesList('Powers')).toBe(false)
        })
    })

    describe('importSectionTitleConst', () => {
        describe('when string is one of the given constants', () => {
            it('returns a string import statement of the constant', () => {
                expect(importSectionTitleConst(ABILITIES)).toEqual("import { ABILITIES } from '../../../constants'")
                expect(importSectionTitleConst(APPEARANCE)).toEqual("import { APPEARANCE } from '../../../constants'")
                expect(importSectionTitleConst(HEADLINE)).toEqual("import { HEADLINE } from '../../../constants'")
                expect(importSectionTitleConst(HISTORY)).toEqual("import { HISTORY } from '../../../constants'")
                expect(importSectionTitleConst(DESCRIPTION)).toEqual("import { DESCRIPTION } from '../../../constants'")
            })
        })

        describe('when string is not one of the given constants', () => {
            it('returns an empty string', () => {
                expect(importSectionTitleConst('Powers')).toEqual('')
            })
        })
    })

    describe('sectionTitleConst', () => {
        describe('when string is one of the given constants', () => {
            it('returns a string import statement of the constant', () => {
                expect(sectionTitleConst(ABILITIES)).toEqual('ABILITIES')
                expect(sectionTitleConst(APPEARANCE)).toEqual('APPEARANCE')
                expect(sectionTitleConst(HEADLINE)).toEqual('HEADLINE')
                expect(sectionTitleConst(HISTORY)).toEqual('HISTORY')
                expect(sectionTitleConst(DESCRIPTION)).toEqual('DESCRIPTION')
            })
        })

        describe('when string is not one of the given constants', () => {
            it('returns an empty string', () => {
                expect(sectionTitleConst('Powers')).toEqual('')
            })
        })
    })
})
