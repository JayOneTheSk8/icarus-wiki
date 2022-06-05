import { Selector } from 'testcafe'

import * as appConstants from '../../src-ts/app/app-constants'

fixture`Dark Mode`.page `../../index.html`

const darkModeToggle = Selector(`#${appConstants.DARK_MODE_TOGGLE}`)
const homeIcon = Selector(`.${appConstants.HOME_ICON_MOBILE_CLASS}`)

// Primary Mode
const primaryBody = Selector(`.${appConstants.PRIMARY_MODE_CLASS}`)
const sectionSelector = Selector(`.${appConstants.SECTION_SELECTOR_CLASS}`)
const pageSelector = Selector(`.${appConstants.PAGE_SELECTOR_CLASS}`)
const spaceBlock = Selector(`.${appConstants.SPACE_BLOCK_CLASS}`)

const sectionSelectorMobile = Selector(`.${appConstants.SECTION_SELECTOR_MOBILE_CLASS}`)
const pageSelectorMobile = Selector(`.${appConstants.PAGE_SELECTOR_MOBILE_SHOW_CLASS}`)

// Dark Mode
const darkBody = Selector(`.${appConstants.DARK_MODE_CLASS}`)
const sectionSelectorDark = Selector(`.${appConstants.SECTION_SELECTOR_DARK_CLASS}`)
const pageSelectorDark = Selector(`.${appConstants.PAGE_SELECTOR_DARK_CLASS}`)
const spaceBlockDark = Selector(`.${appConstants.SPACE_BLOCK_DARK_CLASS}`)

const sectionSelectorMobileDark = Selector(`.${appConstants.SECTION_SELECTOR_MOBILE_DARK_CLASS}`)
const pageSelectorMobileDark = Selector(`.${appConstants.PAGE_SELECTOR_MOBILE_SHOW_DARK_CLASS}`)

test('Dark Mode Toggle is functional', async (t) => {
    await t
        .maximizeWindow()

        .expect(darkModeToggle.checked).notOk()

        .expect(primaryBody.visible).ok()
        .expect(sectionSelector.visible).ok()
        .expect(pageSelector.visible).ok()
        .expect(spaceBlock.visible).ok()

        .click(darkModeToggle)

        .expect(darkModeToggle.checked).ok()

        .expect(darkBody.visible).ok()
        .expect(sectionSelectorDark.visible).ok()
        .expect(pageSelectorDark.visible).ok()
        .expect(spaceBlockDark.visible).ok()
})

test('Mobile Dark Mode Toggle is functional', async (t) => {
    await t
        .resizeWindow(500, 500)

        // Open selector
        .click(homeIcon)

        .expect(darkModeToggle.checked).notOk()

        .expect(primaryBody.visible).ok()
        .expect(sectionSelectorMobile.visible).ok()
        .expect(pageSelectorMobile.visible).ok()
        .expect(spaceBlock.visible).ok()

        .click(darkModeToggle)

        .expect(darkModeToggle.checked).ok()

        .expect(darkBody.visible).ok()
        .expect(sectionSelectorMobileDark.visible).ok()
        .expect(pageSelectorMobileDark.visible).ok()
        .expect(spaceBlockDark.visible).ok()
})
