import { CHARACTERS_PAGE_TYPE, NOTES_PAGE_TYPE } from '../../src-ts/constants'
import page from '../../src-ts/templates/page'

const singleNameCharacterPage = `import { Page } from '../../../DataTypes'
import { CHARACTERS_PAGE_TYPE } from '../../../constants'
import { PERSON_PAGE_ID } from '../../../page-ids'

const Person: Page = {
    id: PERSON_PAGE_ID,
    type: CHARACTERS_PAGE_TYPE,
    name: 'Person',
    sections: []
}

export default Person
`

const multiNameCharacterPage = `import { Page } from '../../../DataTypes'
import { CHARACTERS_PAGE_TYPE } from '../../../constants'
import { PERSON_ONE_PAGE_ID } from '../../../page-ids'

const PersonOne: Page = {
    id: PERSON_ONE_PAGE_ID,
    type: CHARACTERS_PAGE_TYPE,
    name: 'Person One',
    sections: []
}

export default PersonOne
`

const singleNameNotePage = `import { Page } from '../../../DataTypes'
import { NOTES_PAGE_TYPE } from '../../../constants'
import { NOTE_PAGE_ID } from '../../../page-ids'

const Note: Page = {
    id: NOTE_PAGE_ID,
    type: NOTES_PAGE_TYPE,
    name: 'Note',
    sections: []
}

export default Note
`

const multiNameNotePage = `import { Page } from '../../../DataTypes'
import { NOTES_PAGE_TYPE } from '../../../constants'
import { NOTE_ONE_PAGE_ID } from '../../../page-ids'

const NoteOne: Page = {
    id: NOTE_ONE_PAGE_ID,
    type: NOTES_PAGE_TYPE,
    name: 'Note One',
    sections: []
}

export default NoteOne
`

describe('Page Template', () => {
    describe('when creating character page', () => {
        describe('when single name page', () => {
            test("it returns the page name template with the page's ID imported", () => {
                expect(page('Person', 'PERSON', CHARACTERS_PAGE_TYPE)).toEqual(singleNameCharacterPage)
            })
        })

        describe('when multiple name page', () => {
            it('returns the page name template with the name sentence title case', () => {
                expect(page('PersonOne', 'PERSON_ONE', CHARACTERS_PAGE_TYPE)).toEqual(multiNameCharacterPage)
            })
        })
    })

    describe('when creating note page', () => {
        describe('when single name page', () => {
            test("it returns the page name template with the page's ID imported", () => {
                expect(page('Note', 'NOTE', NOTES_PAGE_TYPE)).toEqual(singleNameNotePage)
            })
        })

        describe('when multiple name page', () => {
            it('returns the page name template with the name sentence title case', () => {
                expect(page('NoteOne', 'NOTE_ONE', NOTES_PAGE_TYPE)).toEqual(multiNameNotePage)
            })
        })
    })
})
