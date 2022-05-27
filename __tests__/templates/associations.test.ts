import associations from '../../src-ts/templates/associations'

const importConstAssociationsTemplate = `import { AssociationsSection } from '../../../DataTypes'
import { ASSOCIATIONS } from '../../../constants'

const associations: AssociationsSection = {
    title: ASSOCIATIONS,
    associations: [
        {
            associationName: '',
            associationPageIds: []
        }
    ]
}

export default associations
`

const noImportAssociationsTemplate = `import { AssociationsSection } from '../../../DataTypes'

const associations: AssociationsSection = {
    title: 'Association',
    associations: [
        {
            associationName: '',
            associationPageIds: []
        }
    ]
}

export default associations
`

const noImportMultipleWordsAssociationsTemplate = `import { AssociationsSection } from '../../../DataTypes'

const associations: AssociationsSection = {
    title: 'Association Section',
    associations: [
        {
            associationName: '',
            associationPageIds: []
        }
    ]
}

export default associations
`

describe('Associations Template', () => {
    describe('when passed section matches the ASSOCIATIONS constant', () => {
        test('it returns a template with the const imported', () => {
            expect(associations('Associations', 'Associations')).toEqual(importConstAssociationsTemplate)
        })

        test('it does not use the customSectionName parameter', () => {
            expect(associations('Associations', '')).toEqual(importConstAssociationsTemplate)
        })
    })

    describe('when passed section does not match the ASSOCIATIONS constant', () => {

        describe('when passed single word section', () => {
            test('it returns the template with the title as the section name', () => {
                expect(associations('Association', 'Association')).toEqual(noImportAssociationsTemplate)
            })

            test('it uses the customSectionName parameter to fill the title', () => {
                expect(associations('Associationname', 'Association')).toEqual(noImportAssociationsTemplate)
            })
        })

        describe('when passed multiple word section', () => {
            test('it returns the section with the sentence title as the section name', () => {
                expect(associations('AssociationSection', 'AssociationSection')).toEqual(noImportMultipleWordsAssociationsTemplate)
            })

            test('it uses the customSectionName parameter to fill the title', () => {
                expect(associations('Associationname', 'AssociationSection')).toEqual(noImportMultipleWordsAssociationsTemplate)
            })
        })
    })
})
