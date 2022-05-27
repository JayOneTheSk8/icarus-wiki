import page from '../../src-ts/templates/page'

const singleNamePage = `import { Page } from '../../../DataTypes'
import { PERSON_PAGE_ID } from '../../../page-ids'

const Person: Page = {
    id: PERSON_PAGE_ID,
    name: 'Person',
    sections: []
}

export default Person
`

const multiNamePage = `import { Page } from '../../../DataTypes'
import { PERSON_ONE_PAGE_ID } from '../../../page-ids'

const PersonOne: Page = {
    id: PERSON_ONE_PAGE_ID,
    name: 'Person One',
    sections: []
}

export default PersonOne
`

describe('Page Template', () => {
    describe('when single name page', () => {
        test("it returns the page name template with the page's ID imported", () => {
            expect(page('Person', 'PERSON')).toEqual(singleNamePage)
        })
    })

    describe('when multiple name page', () => {
        test('it returns the page name template with the name sentence title case', () => {
            expect(page('PersonOne', 'PERSON_ONE')).toEqual(multiNamePage)
        })
    })
})
