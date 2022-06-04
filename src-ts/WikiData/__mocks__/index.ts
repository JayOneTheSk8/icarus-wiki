import { CHARACTERS_PAGE_TYPE, HOME_PAGE_TYPE, NOTES_PAGE_TYPE } from '../../constants'
import { BlogData, Page } from '../../DataTypes'

const homePage: Page = {
    id: 'home_page',
    name: 'Home Page',
    type: HOME_PAGE_TYPE,
    sections: [
        {
            title: 'Wiki Data',
            body: 'Stub of WikiData'
        }
    ]
}

const characterOne: Page = {
    id: 'character_one',
    name: 'Character One',
    type: CHARACTERS_PAGE_TYPE,
    sections: [
        {
            title: 'Character One',
            body: 'Character one body'
        }
    ],
    tags: new Set(['tagOne', 'tagTwo'])
}

const characterTwo: Page = {
    id: 'character_two',
    name: 'Character Two',
    type: CHARACTERS_PAGE_TYPE,
    sections: [
        {
            title: 'Character Two',
            body: 'Character two body'
        }
    ],
    tags: new Set(['oneTag'])
}

const noteOne: Page = {
    id: 'note_one',
    name: 'Note One',
    type: NOTES_PAGE_TYPE,
    sections: [
        {
            title: 'Note One',
            body: 'Note one body'
        }
    ],
    tags: new Set(['noteTagOne', 'noteTagTwo'])
}

const noteTwo: Page = {
    id: 'note_two',
    name: 'Note Two',
    type: NOTES_PAGE_TYPE,
    sections: [
        {
            title: 'Note Two',
            body: 'Note two body'
        }
    ],
    tags: new Set(['oneTagNote'])
}

const WikiData: BlogData = {
    homePage,
    characters: [
        characterOne,
        characterTwo
    ],
    notes: [
        noteOne,
        noteTwo
    ]
}

export default WikiData
