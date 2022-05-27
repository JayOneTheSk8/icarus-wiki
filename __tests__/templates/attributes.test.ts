import attributes from '../../src-ts/templates/attributes'

const importConstAttributesTemplate = `import { AttributesSection } from '../../../DataTypes'
import { ATTRIBUTES } from '../../../constants'

const attributes: AttributesSection = {
    title: ATTRIBUTES,
    attributes: [
        {
            attributeName: '',
            attributeText: ''
        }
    ]
}

export default attributes
`

const noImportAttributesTemplate = `import { AttributesSection } from '../../../DataTypes'

const attributes: AttributesSection = {
    title: 'Attribute',
    attributes: [
        {
            attributeName: '',
            attributeText: ''
        }
    ]
}

export default attributes
`

const noImportMultipleWordsAttributesTemplate = `import { AttributesSection } from '../../../DataTypes'

const attributes: AttributesSection = {
    title: 'Attribute Section',
    attributes: [
        {
            attributeName: '',
            attributeText: ''
        }
    ]
}

export default attributes
`

describe('Attributes Template', () => {
    describe('when passed section matches the ATTRIBUTES constant', () => {
        it('returns a template with the const imported', () => {
            expect(attributes('Attributes', 'Attributes')).toEqual(importConstAttributesTemplate)
        })

        it('does not use the customSectionName parameter', () => {
            expect(attributes('Attributes', '')).toEqual(importConstAttributesTemplate)
        })
    })

    describe('when passed section does not match the ATTRIBUTES constant', () => {

        describe('when passed single word section', () => {
            it('returns the template with the title as the section name', () => {
                expect(attributes('Attribute', 'Attribute')).toEqual(noImportAttributesTemplate)
            })

            it('uses the customSectionName parameter to fill the title', () => {
                expect(attributes('Attributename', 'Attribute')).toEqual(noImportAttributesTemplate)
            })
        })

        describe('when passed multiple word section', () => {
            it('returns the section with the sentence title as the section name', () => {
                expect(attributes('AttributeSection', 'AttributeSection')).toEqual(noImportMultipleWordsAttributesTemplate)
            })

            it('uses the customSectionName parameter to fill the title', () => {
                expect(attributes('Attributename', 'AttributeSection')).toEqual(noImportMultipleWordsAttributesTemplate)
            })
        })
    })
})
