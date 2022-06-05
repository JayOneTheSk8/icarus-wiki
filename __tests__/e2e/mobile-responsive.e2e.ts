import { Selector } from 'testcafe'

import * as appConstants from '../../src-ts/app/app-constants'

fixture`Mobile Responsiveness`.page`../../index.html`

const darkModeToggle = Selector(`#${appConstants.DARK_MODE_TOGGLE}`)

// Fullscreen
const sectionSelector = Selector(`.${appConstants.SECTION_SELECTOR_CLASS}`)
const pageSelector = Selector(`.${appConstants.PAGE_SELECTOR_CLASS}`)

const sectionSelectorDark = Selector(`.${appConstants.SECTION_SELECTOR_DARK_CLASS}`)
const pageSelectorDark = Selector(`.${appConstants.PAGE_SELECTOR_DARK_CLASS}`)

const homeIcon = Selector(`.${appConstants.HOME_ICON_CLASS}`)
const characterIcon = Selector(`.${appConstants.CHARACTER_ICON_CLASS}`)
const notesIcon = Selector(`.${appConstants.NOTES_ICON_CLASS}`)

const main = Selector(`.${appConstants.MAIN_CLASS}`)
const pageContent = Selector(`.${appConstants.PAGE_CONTENT_CLASS}`)

// Mobile
const sectionSelectorMobile = Selector(`.${appConstants.SECTION_SELECTOR_MOBILE_CLASS}`)
const pageSelectorMobile = Selector(`.${appConstants.PAGE_SELECTOR_MOBILE_HIDE_CLASS}`)

const homeIconMobile = Selector(`.${appConstants.HOME_ICON_MOBILE_CLASS}`)
const characterIconMobile = Selector(`.${appConstants.CHARACTER_ICON_MOBILE_CLASS}`)
const notesIconMobile = Selector(`.${appConstants.NOTES_ICON_MOBILE_CLASS}`)

const mainMobile = Selector(`.${appConstants.MAIN_MOBILE_CLASS}`)
const pageContentMobile = Selector(`.${appConstants.PAGE_CONTENT_MOBILE_CLASS}`)

const sectionSelectorMobileDark = Selector(`.${appConstants.SECTION_SELECTOR_MOBILE_DARK_CLASS}`)
const pageSelectorMobileDark = Selector(`.${appConstants.PAGE_SELECTOR_MOBILE_HIDE_CLASS}`)

test('Window resizing to mobile creates mobile elements', async (t) => {
    await t
        .maximizeWindow()

        .expect(sectionSelector.visible).ok()
        .expect(pageSelector.visible).ok()

        .expect(homeIcon.visible).ok()
        .expect(characterIcon.visible).ok()
        .expect(notesIcon.visible).ok()

        .expect(main.visible).ok()
        .expect(pageContent.visible).ok()

        .resizeWindow(500, 500)

        .expect(sectionSelectorMobile.visible).ok()
        .expect(pageSelectorMobile.exists).ok()

        .expect(homeIconMobile.visible).ok()
        .expect(characterIconMobile.visible).ok()
        .expect(notesIconMobile.visible).ok()

        .expect(mainMobile.visible).ok()
        .expect(pageContentMobile.visible).ok()
})

test('Window maximizing to fullscreen creates fullscreen elements',async (t) => {
    await t
        .resizeWindow(500, 500)

        .expect(sectionSelectorMobile.visible).ok()
        .expect(pageSelectorMobile.exists).ok()

        .expect(homeIconMobile.visible).ok()
        .expect(characterIconMobile.visible).ok()
        .expect(notesIconMobile.visible).ok()

        .expect(mainMobile.visible).ok()
        .expect(pageContentMobile.visible).ok()

        .maximizeWindow()

        .expect(sectionSelector.visible).ok()
        .expect(pageSelector.visible).ok()

        .expect(homeIcon.visible).ok()
        .expect(characterIcon.visible).ok()
        .expect(notesIcon.visible).ok()

        .expect(main.visible).ok()
        .expect(pageContent.visible).ok()
})

test('DARK MODE: Window resizing to mobile creates mobile elements', async (t) => {
    await t
        .maximizeWindow()

        .click(darkModeToggle)

        .expect(sectionSelectorDark.visible).ok()
        .expect(pageSelectorDark.visible).ok()

        .expect(homeIcon.visible).ok()
        .expect(characterIcon.visible).ok()
        .expect(notesIcon.visible).ok()

        .expect(main.visible).ok()
        .expect(pageContent.visible).ok()

        .resizeWindow(500, 500)

        .expect(sectionSelectorMobileDark.visible).ok()
        .expect(pageSelectorMobileDark.exists).ok()

        .expect(homeIconMobile.visible).ok()
        .expect(characterIconMobile.visible).ok()
        .expect(notesIconMobile.visible).ok()

        .expect(mainMobile.visible).ok()
        .expect(pageContentMobile.visible).ok()
})

test('DARK MODE: Window maximizing to fullscreen creates fullscreen elements',async (t) => {
    await t
        .resizeWindow(500, 500)

        .click(darkModeToggle)

        .expect(sectionSelectorMobileDark.visible).ok()
        .expect(pageSelectorMobileDark.exists).ok()

        .expect(homeIconMobile.visible).ok()
        .expect(characterIconMobile.visible).ok()
        .expect(notesIconMobile.visible).ok()

        .expect(mainMobile.visible).ok()
        .expect(pageContentMobile.visible).ok()

        .maximizeWindow()

        .expect(sectionSelectorDark.visible).ok()
        .expect(pageSelectorDark.visible).ok()

        .expect(homeIcon.visible).ok()
        .expect(characterIcon.visible).ok()
        .expect(notesIcon.visible).ok()

        .expect(main.visible).ok()
        .expect(pageContent.visible).ok()
})
