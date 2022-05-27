import pageSection from '../../src-ts/templates/page-section'

import { fromPascalToCamel, importSectionTitleConst, sectionTitleConst } from '../../src-ts/templates/util'
import {
    SECTION_TITLES_LIST,
    ABILITIES,
    APPEARANCE,
    HEADLINE,
    HISTORY,
    DESCRIPTION,
} from '../../src-ts/constants'

const importSectionTemplate = (sectionName: string): string => `import { PageSection } from '../../../DataTypes'
${importSectionTitleConst(sectionName)}

const ${fromPascalToCamel(sectionName)}: PageSection = {
    title: ${sectionTitleConst(sectionName)},
    body: ''
}

export default ${fromPascalToCamel(sectionName)}
`

const noImportSectionTemplate = `import { PageSection } from '../../../DataTypes'

const section: PageSection = {
    title: 'Section',
    body: ''
}

export default section
`

const noImportMultiWordSectionTemplate = `import { PageSection } from '../../../DataTypes'

const sectionName: PageSection = {
    title: 'Section Name',
    body: ''
}

export default sectionName
`

describe('Page Section Template', () => {
    describe('when section is in given section constants', () => {
        test('it returns a page section template with imports', () => {
            expect(SECTION_TITLES_LIST.length).toEqual(5)
            expect(pageSection(ABILITIES)).toEqual(importSectionTemplate(ABILITIES))
            expect(pageSection(APPEARANCE)).toEqual(importSectionTemplate(APPEARANCE))
            expect(pageSection(HEADLINE)).toEqual(importSectionTemplate(HEADLINE))
            expect(pageSection(HISTORY)).toEqual(importSectionTemplate(HISTORY))
            expect(pageSection(DESCRIPTION)).toEqual(importSectionTemplate(DESCRIPTION))
        })
    })

    describe('when section is not in given section constants', () => {
        describe('when single word section', () => {
            test('it returns string as the title', () => {
                expect(pageSection('Section')).toEqual(noImportSectionTemplate)
            })
        })

        describe('when multiple word section', () => {
            test('it camelCases the variable name and sentence title cases the title', () => {
                expect(pageSection('SectionName')).toEqual(noImportMultiWordSectionTemplate)
            })
        })
    })
})
