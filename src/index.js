"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WikiData_1 = __importDefault(require("./WikiData"));
const { homePage, characters, notes, } = WikiData_1.default;
/* Constants */
const SECTION_TITLE = 'section-title';
const PAGE_OPTION = 'page-option';
const createDiv = () => document.createElement('div');
/* DOM Elements */
const pageSelector = document.getElementById('page-selector');
const homeIcon = document.getElementById('home-icon');
const characterIcon = document.getElementById('character-icon');
const notesIcon = document.getElementById('notes-icon');
/* Set Page Selectors */
const setHomeSelectors = () => pageSelector.replaceChildren(...homePageSelector);
const setCharactersSelectors = () => pageSelector.replaceChildren(...charactersSelector);
const setNotesSelectors = () => pageSelector.replaceChildren(...notesSelector);
/* Home Page Selectors */
const homePageSelector = [];
const homePageTitle = createDiv();
homePageTitle.innerText = homePage.name;
homePageTitle.className = SECTION_TITLE;
homePageSelector.push(homePageTitle);
for (const section of homePage.sections) {
    const selector = createDiv();
    selector.innerText = section.title;
    selector.className = PAGE_OPTION;
    homePageSelector.push(selector);
}
/* Characters Selectors */
const charactersSelector = [];
const charactersTitle = createDiv();
charactersTitle.innerText = 'Characters';
charactersTitle.className = SECTION_TITLE;
charactersSelector.push(charactersTitle);
for (const character of characters) {
    const selector = createDiv();
    selector.innerText = character.name;
    selector.className = PAGE_OPTION;
    charactersSelector.push(selector);
}
/* Notes Selectors */
const notesSelector = [];
const notesTitle = createDiv();
notesTitle.innerText = 'Notes';
notesTitle.className = SECTION_TITLE;
notesSelector.push(notesTitle);
for (const note of notes) {
    const selector = createDiv();
    selector.innerText = note.name;
    selector.className = PAGE_OPTION;
    notesSelector.push(selector);
}
/* Icon Click Functions */
homeIcon.onclick = setHomeSelectors;
characterIcon.onclick = setCharactersSelectors;
notesIcon.onclick = setNotesSelectors;
/* Set Home Page by default */
pageSelector.replaceChildren(...homePageSelector);
