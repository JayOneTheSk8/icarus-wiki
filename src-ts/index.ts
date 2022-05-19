import WikiData from "./WikiData"

const {
    homePage,
    characters,
    notes,
} = WikiData

/* Constants */
const MOBILE_WIDTH_LIMIT: number = 1000

const SECTION_TITLE: string = 'section-title'
const PAGE_OPTION: string = 'page-option'

const MAIN_CLASS: string = 'main'
const PAGE_CONTENT_CLASS: string = 'page-content'
const SECTION_SELECTOR_CLASS: string = 'section-selector'
const PAGE_SELECTOR_CLASS: string = 'page-selector'
const HOME_ICON_CLASS: string = 'home-icon'
const CHARACTER_ICON_CLASS: string = 'character-icon'
const NOTES_ICON_CLASS: string = 'notes-icon'

const PAGE_SELECTOR_MODAL: string = 'page-selector-modal'
const PAGE_SELECTOR_MODAL_SHOW_CLASS: string = 'page-selector-modal-show'
const PAGE_SELECTOR_MODAL_HIDE_CLASS: string = 'page-selector-modal-hide'

const MAIN_MOBILE_CLASS: string = 'main-mobile'
const PAGE_CONTENT_MOBILE_CLASS: string = 'page-content-mobile'
const SECTION_SELECTOR_MOBILE_CLASS: string = 'section-selector-mobile'
const PAGE_SELECTOR_MOBILE_SHOW_CLASS: string = 'page-selector-mobile-show'
const PAGE_SELECTOR_MOBILE_HIDE_CLASS: string = 'page-selector-mobile-hide'
const HOME_ICON_MOBILE_CLASS: string = 'home-icon-mobile'
const CHARACTER_ICON_MOBILE_CLASS: string = 'character-icon-mobile'
const NOTES_ICON_MOBILE_CLASS: string = 'notes-icon-mobile'

/* State Variables */
var usingMobile: boolean = false
var sidebarOpen: boolean = false

/* Get HTML Elements Functions */
const createDiv = (): HTMLElement => document.createElement('div')
const findElement = (id: string): HTMLElement => document.getElementById(id) as HTMLElement

/* DOM Elements */
const mainContent = findElement(MAIN_CLASS)
const pageContent = findElement(PAGE_CONTENT_CLASS)
// Selectors
const sectionSelector = findElement(SECTION_SELECTOR_CLASS)
const pageSelector = findElement(PAGE_SELECTOR_CLASS)
// Modal
const pageSelectorModal = findElement(PAGE_SELECTOR_MODAL)
// Icons
const homeIcon = findElement(HOME_ICON_CLASS)
const characterIcon = findElement(CHARACTER_ICON_CLASS)
const notesIcon = findElement(NOTES_ICON_CLASS)

/* Toggle Dropdown */
const toggleSidebar = (openSidebar: boolean): void => {
    pageSelector.className = openSidebar ? PAGE_SELECTOR_MOBILE_SHOW_CLASS : PAGE_SELECTOR_MOBILE_HIDE_CLASS
    pageSelectorModal.className = openSidebar ? PAGE_SELECTOR_MODAL_SHOW_CLASS : PAGE_SELECTOR_MODAL_HIDE_CLASS
    sidebarOpen = openSidebar
}

/* Change to Mobile */
const changeToMobile = (setMobile: boolean): void => {
    mainContent.className = setMobile ? MAIN_MOBILE_CLASS : MAIN_CLASS
    pageContent.className = setMobile ? PAGE_CONTENT_MOBILE_CLASS : PAGE_CONTENT_CLASS
    sectionSelector.className = setMobile ? SECTION_SELECTOR_MOBILE_CLASS : SECTION_SELECTOR_CLASS
    homeIcon.className = setMobile ? HOME_ICON_MOBILE_CLASS : HOME_ICON_CLASS
    characterIcon.className = setMobile ? CHARACTER_ICON_MOBILE_CLASS : CHARACTER_ICON_CLASS
    notesIcon.className = setMobile ? NOTES_ICON_MOBILE_CLASS : NOTES_ICON_CLASS

    // Default hide page selector on mobile
    pageSelector.className = setMobile ? PAGE_SELECTOR_MOBILE_HIDE_CLASS : PAGE_SELECTOR_CLASS
    // Always hide modal unless toggling sidebar
    pageSelectorModal.className = PAGE_SELECTOR_MODAL_HIDE_CLASS
    // Since sidebar will always be closed on resize, adjust the state
    sidebarOpen = false

    usingMobile = setMobile
}

/* Set Page Selectors */
const setHomeSelectors = (): void => {
    pageSelector.replaceChildren(...homePageSelector)
    usingMobile && toggleSidebar(true)
}

const setCharactersSelectors = (): void => {
    pageSelector.replaceChildren(...charactersSelector)
    usingMobile && toggleSidebar(true)
}

const setNotesSelectors = (): void => {
    pageSelector.replaceChildren(...notesSelector)
    usingMobile && toggleSidebar(true)
}

/* Open Page */
const openHomePage = () => {
    return (): void => {
        pageContent.innerHTML = `<div>${JSON.stringify(homePage)}</div>`
        sidebarOpen && toggleSidebar(false)
    }
}

const openCharacterPage = (index: number) => {
    return (): void => {
        pageContent.innerHTML = `<div>${JSON.stringify(characters[index])}</div>`
        sidebarOpen && toggleSidebar(false)
    }
}

const openNotesPage = (index: number) => {
    return (): void => {
        pageContent.innerHTML = `<div>${JSON.stringify(notes[index])}</div>`
        sidebarOpen && toggleSidebar(false)
    }
}

/* Event Functions */
const handleResize = (): void => {
    // If the width is below the limit and we aren't using mobile elements
    if (window.innerWidth < MOBILE_WIDTH_LIMIT && !usingMobile) {
        // Switch to mobile view
        changeToMobile(true)
    } else if (window.innerWidth >= MOBILE_WIDTH_LIMIT && usingMobile) {
        // Otherwise if width is above the limit and we are using mobile
        // Turn off mobile view
        changeToMobile(false)
    }
}

/* Home Page Selectors */
const homePageSelector: Array<HTMLElement> = []

const homePageTitle = createDiv()
homePageTitle.innerText = homePage.name
homePageTitle.className = SECTION_TITLE
homePageSelector.push(homePageTitle)

homePage.sections.forEach((section) => {
    const selector = createDiv()
    selector.innerText = section.title
    selector.className = PAGE_OPTION
    selector.onclick = openHomePage()
    homePageSelector.push(selector)
})

/* Characters Selectors */
const charactersSelector: Array<HTMLElement> = []

const charactersTitle = createDiv()
charactersTitle.innerText = 'Characters'
charactersTitle.className = SECTION_TITLE
charactersSelector.push(charactersTitle)

characters.forEach((character, idx) => {
    const selector = createDiv()
    selector.innerText = character.name
    selector.className = PAGE_OPTION
    selector.onclick = openCharacterPage(idx)
    charactersSelector.push(selector)
})

/* Notes Selectors */
const notesSelector: Array<HTMLElement> = []

const notesTitle = createDiv()
notesTitle.innerText = 'Notes'
notesTitle.className = SECTION_TITLE
notesSelector.push(notesTitle)

notes.forEach((note, idx) => {
    const selector = createDiv()
    selector.innerText = note.name
    selector.className = PAGE_OPTION
    selector.onclick = openNotesPage(idx)
    notesSelector.push(selector)
})

/* Icon Click Functions */
homeIcon.onclick = setHomeSelectors
characterIcon.onclick = setCharactersSelectors
notesIcon.onclick = setNotesSelectors

/* Page Selector Modal Click Function */
pageSelectorModal.onclick = (): void => toggleSidebar(false)

/* Set Home Page by default */
pageSelector.replaceChildren(...homePageSelector)

/* Add Event Listener for resizing */
window.addEventListener('resize', handleResize)

/* Check if mobile and set */
if (window.innerWidth < MOBILE_WIDTH_LIMIT) { changeToMobile(true) }

/* Default to Home Page */
pageContent.innerHTML = `<div>${JSON.stringify(homePage)}</div>`
