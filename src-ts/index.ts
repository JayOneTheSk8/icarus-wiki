import WikiData from "./WikiData"

const {
    homePage,
    characters,
    notes,
} = WikiData

/* Constants */
const SECTION_TITLE: string = 'section-title'
const PAGE_OPTION: string = 'page-option'

const createDiv = (): HTMLElement => document.createElement('div')

/* DOM Elements */
const pageSelector = document.getElementById('page-selector') as HTMLElement
const homeIcon = document.getElementById('home-icon') as HTMLElement
const characterIcon = document.getElementById('character-icon') as HTMLElement
const notesIcon = document.getElementById('notes-icon') as HTMLElement

/* Set Page Selectors */
const setHomeSelectors = (): void => pageSelector.replaceChildren(...homePageSelector)
const setCharactersSelectors = (): void => pageSelector.replaceChildren(...charactersSelector)
const setNotesSelectors = (): void => pageSelector.replaceChildren(...notesSelector)

/* Home Page Selectors */
const homePageSelector: Array<HTMLElement> = []

const homePageTitle = createDiv()
homePageTitle.innerText = homePage.name
homePageTitle.className = SECTION_TITLE
homePageSelector.push(homePageTitle)

for (const section of homePage.sections) {
    const selector = createDiv()
    selector.innerText = section.title
    selector.className = PAGE_OPTION
    homePageSelector.push(selector)
}

/* Characters Selectors */
const charactersSelector: Array<HTMLElement> = []

const charactersTitle = createDiv()
charactersTitle.innerText = 'Characters'
charactersTitle.className = SECTION_TITLE
charactersSelector.push(charactersTitle)

for (const character of characters) {
    const selector = createDiv()
    selector.innerText = character.name
    selector.className = PAGE_OPTION
    charactersSelector.push(selector)
}

/* Notes Selectors */
const notesSelector: Array<HTMLElement> = []

const notesTitle = createDiv()
notesTitle.innerText = 'Notes'
notesTitle.className = SECTION_TITLE
notesSelector.push(notesTitle)

for (const note of notes) {
    const selector = createDiv()
    selector.innerText = note.name
    selector.className = PAGE_OPTION
    notesSelector.push(selector)
}

/* Icon Click Functions */
homeIcon.onclick = setHomeSelectors
characterIcon.onclick = setCharactersSelectors
notesIcon.onclick = setNotesSelectors

/* Set Home Page by default */
pageSelector.replaceChildren(...homePageSelector)
