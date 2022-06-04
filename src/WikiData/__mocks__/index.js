"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../constants");
const homePage = {
    id: 'home_page',
    name: 'Home Page',
    type: constants_1.HOME_PAGE_TYPE,
    sections: [
        {
            title: 'Wiki Data',
            body: 'Stub of WikiData'
        }
    ]
};
const characterOne = {
    id: 'character_one',
    name: 'Character One',
    type: constants_1.CHARACTERS_PAGE_TYPE,
    sections: [
        {
            title: 'Character One',
            body: 'Character one body'
        }
    ],
    tags: new Set(['tagOne', 'tagTwo'])
};
const characterTwo = {
    id: 'character_two',
    name: 'Character Two',
    type: constants_1.CHARACTERS_PAGE_TYPE,
    sections: [
        {
            title: 'Character Two',
            body: 'Character two body'
        }
    ],
    tags: new Set(['oneTag'])
};
const noteOne = {
    id: 'note_one',
    name: 'Note One',
    type: constants_1.NOTES_PAGE_TYPE,
    sections: [
        {
            title: 'Note One',
            body: 'Note one body'
        }
    ],
    tags: new Set(['noteTagOne', 'noteTagTwo'])
};
const noteTwo = {
    id: 'note_two',
    name: 'Note Two',
    type: constants_1.NOTES_PAGE_TYPE,
    sections: [
        {
            title: 'Note Two',
            body: 'Note two body'
        }
    ],
    tags: new Set(['oneTagNote'])
};
const WikiData = {
    homePage,
    characters: [
        characterOne,
        characterTwo
    ],
    notes: [
        noteOne,
        noteTwo
    ]
};
exports.default = WikiData;
