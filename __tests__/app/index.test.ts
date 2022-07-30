import App from '../../src-ts/app'
import * as appConstants from '../../src-ts/app/app-constants'
import WikiData from '../../src-ts/WikiData/__mocks__'

import {
    AssociationsSection,
    AttributesSection,
    GallerySection,
    Page,
    PageSection,
    SubSection,
} from '../../src-ts/DataTypes'
import {
    ASSOCIATIONS_TITLES_LIST,
    ATTRIBUTES_TITLES_LIST,
    CHARACTERS_PAGE_TYPE,
    GALLERY_TITLES_LIST,
    HOME_PAGE_TYPE,
    NOTES_PAGE_TYPE,
} from '../../src-ts/constants'

const documentBody = `<body class="${appConstants.PRIMARY_MODE_CLASS}">
    <div class="dark-mode-toggle-area">
        <label for="${appConstants.DARK_MODE_TOGGLE}" class="dark-mode-label"></label>
        <input id="${appConstants.DARK_MODE_TOGGLE}" class="${appConstants.DARK_MODE_TOGGLE}" type="checkbox" />
    </div>

    <div id="${appConstants.ZOOMED_IMAGE_SECTION}" class="${appConstants.ZOOMED_IMAGE_SECTION_HIDE}"></div>
    <div id="${appConstants.ZOOMED_IMAGE_MODAL}" class="${appConstants.ZOOMED_IMAGE_MODAL_HIDE}"></div>

    <div id="${appConstants.MAIN_CLASS}" class="${appConstants.MAIN_CLASS}">
        <div id="${appConstants.SECTION_SELECTOR_CLASS}" class="${appConstants.SECTION_SELECTOR_CLASS}">
            <div id="${appConstants.HOME_ICON_CLASS}" class="${appConstants.HOME_ICON_CLASS}"></div>
            <div id="${appConstants.CHARACTER_ICON_CLASS}" class="${appConstants.CHARACTER_ICON_CLASS}"></div>
            <div id="${appConstants.NOTES_ICON_CLASS}" class="${appConstants.NOTES_ICON_CLASS}"></div>
        </div>

        <div id="${appConstants.PAGE_SELECTOR_CLASS}" class="${appConstants.PAGE_SELECTOR_CLASS}"></div>
        <div id="${appConstants.PAGE_SELECTOR_MODAL}" class="${appConstants.PAGE_SELECTOR_MODAL_HIDE_CLASS}" ></div>
        <div id="${appConstants.PAGE_CONTENT_CLASS}" class="${appConstants.PAGE_CONTENT_CLASS}">
            <div class="space-block"></div>
        </div>
    </div>
</body>
`

jest.mock('../../src-ts/WikiData')

describe('App', () => {
    describe('constructor', () => {
        document.body.outerHTML = documentBody

        it('builds an app connected to the DOM', () => {
            const app = new App()

            expect(app.mainContent).toBeInstanceOf(HTMLElement)
            expect(app.mainContent.id).toEqual(appConstants.MAIN_CLASS)

            expect(app.pageContent).toBeInstanceOf(HTMLElement)
            expect(app.pageContent.id).toEqual(appConstants.PAGE_CONTENT_CLASS)

            expect(app.sectionSelector).toBeInstanceOf(HTMLElement)
            expect(app.sectionSelector.id).toEqual(appConstants.SECTION_SELECTOR_CLASS)

            expect(app.pageSelector).toBeInstanceOf(HTMLElement)
            expect(app.pageSelector.id).toEqual(appConstants.PAGE_SELECTOR_CLASS)

            expect(app.pageSelectorModal).toBeInstanceOf(HTMLElement)
            expect(app.pageSelectorModal.id).toEqual(appConstants.PAGE_SELECTOR_MODAL)

            expect(app.homeIcon).toBeInstanceOf(HTMLElement)
            expect(app.homeIcon.id).toEqual(appConstants.HOME_ICON_CLASS)

            expect(app.characterIcon).toBeInstanceOf(HTMLElement)
            expect(app.characterIcon.id).toEqual(appConstants.CHARACTER_ICON_CLASS)

            expect(app.notesIcon).toBeInstanceOf(HTMLElement)
            expect(app.notesIcon.id).toEqual(appConstants.NOTES_ICON_CLASS)

            expect(app.zoomedImageSection).toBeInstanceOf(HTMLElement)
            expect(app.zoomedImageSection.id).toEqual(appConstants.ZOOMED_IMAGE_SECTION)

            expect(app.zoomedModal).toBeInstanceOf(HTMLElement)
            expect(app.zoomedModal.id).toEqual(appConstants.ZOOMED_IMAGE_MODAL)

            expect(app.darkModeToggle).toBeInstanceOf(HTMLElement)
            expect(app.darkModeToggle.id).toEqual(appConstants.DARK_MODE_TOGGLE)

        })
    })

    describe('createDiv', () => {
        document.body.outerHTML = documentBody

        it('creates a DIV HTMLElement', () => {
            const element = document.createElement('div')
            const app = new App()
            expect(app.createDiv()).toEqual(element)
        })
    })

    describe('createImg', () => {
        document.body.outerHTML = documentBody

        it('creates an IMG HTMLElement', () => {
            const element = document.createElement('img')
            const app = new App()
            expect(app.createImg()).toEqual(element)
        })
    })

    describe('createInput', () => {
        document.body.outerHTML = documentBody

        it('creates a Input HTMLElement', () => {
            const element = document.createElement('input')
            const app = new App()
            expect(app.createInput()).toEqual(element)
        })
    })

    describe('findElement', () => {
        document.body.outerHTML = documentBody

        it('gets an element by its ID', () => {
            const element = document.getElementById(appConstants.MAIN_CLASS)
            const app = new App()
            expect(app.findElement(appConstants.MAIN_CLASS)).toEqual(element)
        })
    })

    /* Toggle Sidebar */
    describe('toggleSidebar', () => {
        describe('when not using mobile', () => {
            document.body.outerHTML = documentBody

            it('does not alter the app state', () => {
                const app = new App()
                app.usingMobile = false

                const ogPageSelectorClass = app.pageSelector.className
                const ogPageSelectorModalClass = app.pageSelectorModal.className
                const ogSidebarState = app.sidebarOpen

                app.toggleSidebar(true)
                expect(app.pageSelector.className).toEqual(ogPageSelectorClass)
                expect(app.pageSelectorModal.className).toEqual(ogPageSelectorModalClass)
                expect(app.sidebarOpen).toEqual(ogSidebarState)

                app.toggleSidebar(false)
                expect(app.pageSelector.className).toEqual(ogPageSelectorClass)
                expect(app.pageSelectorModal.className).toEqual(ogPageSelectorModalClass)
                expect(app.sidebarOpen).toEqual(ogSidebarState)
            })
        })

        describe('when in primary colour mode', () => {
            describe('when opening sidebar', () => {
                let app: App

                beforeAll(() => {
                    document.body.outerHTML = documentBody
                    app = new App()
                    app.darkMode = false
                    app.usingMobile = true
                    app.toggleSidebar(true)
                })

                it('opens the page selector sidebar with a modal', () => {
                    expect(app.pageSelector.className).toEqual(appConstants.PAGE_SELECTOR_MOBILE_SHOW_CLASS)
                    expect(app.pageSelectorModal.className).toEqual(appConstants.PAGE_SELECTOR_MODAL_SHOW_CLASS)
                })

                it('sets the sidebarOpen state variable to true', () => {
                    expect(app.sidebarOpen).toBe(true)
                })
            })

            describe('when closing sidebar', () => {
                let app: App

                beforeAll(() => {
                    document.body.outerHTML = documentBody
                    app = new App()
                    app.darkMode = false
                    app.usingMobile = true
                    app.toggleSidebar(false)
                })

                it('closes the page selector sidebar and hides the modal', () => {
                    expect(app.pageSelector.className).toEqual(appConstants.PAGE_SELECTOR_MOBILE_HIDE_CLASS)
                    expect(app.pageSelectorModal.className).toEqual(appConstants.PAGE_SELECTOR_MODAL_HIDE_CLASS)
                })

                it('sets the sidebarOpen state variable to false', () => {
                    expect(app.sidebarOpen).toBe(false)
                })
            })
        })

        describe('when in dark mode', () => {
            describe('when opening sidebar', () => {
                let app: App

                beforeAll(() => {
                    document.body.outerHTML = documentBody
                    app = new App()
                    app.darkMode = true
                    app.usingMobile = true
                    app.toggleSidebar(true)
                })

                it('opens the page selector sidebar in dark mode with a modal', () => {
                    expect(app.pageSelector.className).toEqual(appConstants.PAGE_SELECTOR_MOBILE_SHOW_DARK_CLASS)
                    expect(app.pageSelectorModal.className).toEqual(appConstants.PAGE_SELECTOR_MODAL_SHOW_CLASS)
                })

                it('sets the sidebarOpen state variable to true', () => {
                    expect(app.sidebarOpen).toBe(true)
                })
            })

            describe('when closing sidebar', () => {
                let app: App

                beforeAll(() => {
                    document.body.outerHTML = documentBody
                    app = new App()
                    app.darkMode = true
                    app.usingMobile = true
                    app.toggleSidebar(false)
                })

                it('closes the page selector sidebar and hides the modal', () => {
                    expect(app.pageSelector.className).toEqual(appConstants.PAGE_SELECTOR_MOBILE_HIDE_CLASS)
                    expect(app.pageSelectorModal.className).toEqual(appConstants.PAGE_SELECTOR_MODAL_HIDE_CLASS)
                })

                it('sets the sidebarOpen state variable to false', () => {
                    expect(app.sidebarOpen).toBe(false)
                })
            })
        })
    })

    /* Change to Mobile */
    describe('changeToMobile', () => {
        describe('when setting app to mobile state', () => {
            describe('when in primary colours mode', () => {
                let app: App

                beforeAll(() => {
                    document.body.outerHTML = documentBody
                    app = new App()
                    app.darkMode = false
                    app.changeToMobile(true)
                })

                it('changes the section selector to mobile class', () => {
                    expect(app.sectionSelector.className).toEqual(appConstants.SECTION_SELECTOR_MOBILE_CLASS)
                })

                it('changes the section selector icons to mobile classes', () => {
                    expect(app.homeIcon.className).toEqual(appConstants.HOME_ICON_MOBILE_CLASS)
                    expect(app.characterIcon.className).toEqual(appConstants.CHARACTER_ICON_MOBILE_CLASS)
                    expect(app.notesIcon.className).toEqual(appConstants.NOTES_ICON_MOBILE_CLASS)
                })

                it('hides the page selector', () => {
                    expect(app.pageSelector.className).toEqual(appConstants.PAGE_SELECTOR_MOBILE_HIDE_CLASS)
                })

                it('keeps the modal hidden', () => {
                    expect(app.pageSelectorModal.className).toEqual(appConstants.PAGE_SELECTOR_MODAL_HIDE_CLASS)
                })

                it('adjusts the page and main content', () => {
                    expect(app.mainContent.className).toEqual(appConstants.MAIN_MOBILE_CLASS)
                    expect(app.pageContent.className).toEqual(appConstants.PAGE_CONTENT_MOBILE_CLASS)
                })

                it('sets the sidebarOpen state to false', () => {
                    expect(app.sidebarOpen).toBe(false)
                })

                it('sets the usingMobile state to true', () => {
                    expect(app.usingMobile).toBe(true)
                })
            })

            describe('when in dark mode', () => {
                let app: App

                beforeAll(() => {
                    document.body.outerHTML = documentBody
                    app = new App()
                    app.darkMode = true
                    app.changeToMobile(true)
                })

                it('changes the section selector to mobile dark class', () => {
                    expect(app.sectionSelector.className).toEqual(appConstants.SECTION_SELECTOR_MOBILE_DARK_CLASS)
                })

                it('changes the section selector icons to mobile classes', () => {
                    expect(app.homeIcon.className).toEqual(appConstants.HOME_ICON_MOBILE_CLASS)
                    expect(app.characterIcon.className).toEqual(appConstants.CHARACTER_ICON_MOBILE_CLASS)
                    expect(app.notesIcon.className).toEqual(appConstants.NOTES_ICON_MOBILE_CLASS)
                })

                it('hides the page selector', () => {
                    expect(app.pageSelector.className).toEqual(appConstants.PAGE_SELECTOR_MOBILE_HIDE_CLASS)
                })

                it('keeps the modal hidden', () => {
                    expect(app.pageSelectorModal.className).toEqual(appConstants.PAGE_SELECTOR_MODAL_HIDE_CLASS)
                })

                it('adjusts the page and main content', () => {
                    expect(app.mainContent.className).toEqual(appConstants.MAIN_MOBILE_CLASS)
                    expect(app.pageContent.className).toEqual(appConstants.PAGE_CONTENT_MOBILE_CLASS)
                })

                it('sets the sidebarOpen state to false', () => {
                    expect(app.sidebarOpen).toBe(false)
                })

                it('sets the usingMobile state to true', () => {
                    expect(app.usingMobile).toBe(true)
                })
            })
        })

        describe('when setting app to widescreen state', () => {
            describe('when in primary colours mode', () => {
                let app: App

                beforeAll(() => {
                    document.body.outerHTML = documentBody
                    app = new App()
                    app.darkMode = false
                    app.changeToMobile(false)
                })

                it('changes the section selector to widescreen class', () => {
                    expect(app.sectionSelector.className).toEqual(appConstants.SECTION_SELECTOR_CLASS)
                })

                it('changes the section selector icons to widescreen classes', () => {
                    expect(app.homeIcon.className).toEqual(appConstants.HOME_ICON_CLASS)
                    expect(app.characterIcon.className).toEqual(appConstants.CHARACTER_ICON_CLASS)
                    expect(app.notesIcon.className).toEqual(appConstants.NOTES_ICON_CLASS)
                })

                it('shows the page selector in widescreen primary colours', () => {
                    expect(app.pageSelector.className).toEqual(appConstants.PAGE_SELECTOR_CLASS)
                })

                it('keeps the modal hidden', () => {
                    expect(app.pageSelectorModal.className).toEqual(appConstants.PAGE_SELECTOR_MODAL_HIDE_CLASS)
                })

                it('adjusts the page and main content', () => {
                    expect(app.mainContent.className).toEqual(appConstants.MAIN_CLASS)
                    expect(app.pageContent.className).toEqual(appConstants.PAGE_CONTENT_CLASS)
                })

                it('sets the sidebarOpen state to false', () => {
                    expect(app.sidebarOpen).toBe(false)
                })

                it('sets the usingMobile state to false', () => {
                    expect(app.usingMobile).toBe(false)
                })
            })

            describe('when in dark mode', () => {
                let app: App

                beforeAll(() => {
                    document.body.outerHTML = documentBody
                    app = new App()
                    app.darkMode = true
                    app.changeToMobile(false)
                })

                it('changes the section selector to widescreen dark class', () => {
                    expect(app.sectionSelector.className).toEqual(appConstants.SECTION_SELECTOR_DARK_CLASS)
                })

                it('changes the section selector icons to widescreen classes', () => {
                    expect(app.homeIcon.className).toEqual(appConstants.HOME_ICON_CLASS)
                    expect(app.characterIcon.className).toEqual(appConstants.CHARACTER_ICON_CLASS)
                    expect(app.notesIcon.className).toEqual(appConstants.NOTES_ICON_CLASS)
                })

                it('shows the page selector in widescreen dark mode', () => {
                    expect(app.pageSelector.className).toEqual(appConstants.PAGE_SELECTOR_DARK_CLASS)
                })

                it('keeps the modal hidden', () => {
                    expect(app.pageSelectorModal.className).toEqual(appConstants.PAGE_SELECTOR_MODAL_HIDE_CLASS)
                })

                it('adjusts the page and main content', () => {
                    expect(app.mainContent.className).toEqual(appConstants.MAIN_CLASS)
                    expect(app.pageContent.className).toEqual(appConstants.PAGE_CONTENT_CLASS)
                })

                it('sets the sidebarOpen state to false', () => {
                    expect(app.sidebarOpen).toBe(false)
                })

                it('sets the usingMobile state to false', () => {
                    expect(app.usingMobile).toBe(false)
                })
            })
        })
    })

    /* Change to Dark Mode */
    describe('changeToDarkMode', () => {
        describe('when changing to dark mode', () => {
            describe('when in widescreen mode', () => {
                let app: App

                beforeAll(() => {
                    document.body.outerHTML = documentBody
                    app = new App()
                    app.changeToDarkMode(true)
                })

                it('changes the body to dark mode', () => {
                    const body = document.getElementsByTagName('body')[0]
                    expect(body.className).toEqual(appConstants.DARK_MODE_CLASS)
                })

                it('changes the section selector to dark mode', () => {
                    expect(app.sectionSelector.className).toEqual(appConstants.SECTION_SELECTOR_DARK_CLASS)
                })

                it('changes the page selector to dark mode', () => {
                    expect(app.pageSelector.className).toEqual(appConstants.PAGE_SELECTOR_DARK_CLASS)
                })

                it('changes the space block to dark mode', () => {
                    const spaceBlock = document.getElementsByClassName(appConstants.SPACE_BLOCK_DARK_CLASS)[0]
                    expect(spaceBlock).toBeTruthy()
                })

                it('sets the darkMode state to true', () => {
                    expect(app.darkMode).toBe(true)
                })
            })

            describe('when in mobile', () => {
                let app: App

                beforeAll(() => {
                    document.body.outerHTML = documentBody
                    app = new App()
                    app.changeToMobile(true)
                    app.toggleSidebar(true) // open sidebar to check for class
                    app.changeToDarkMode(true)
                })

                it('changes the body to dark mode', () => {
                    const body = document.getElementsByTagName('body')[0]
                    expect(body.className).toEqual(appConstants.DARK_MODE_CLASS)
                })

                it('changes the section selector to mobile dark mode', () => {
                    expect(app.sectionSelector.className).toEqual(appConstants.SECTION_SELECTOR_MOBILE_DARK_CLASS)
                })

                it("changes the page selector to mobile dark mode if it's showing", () => {
                    expect(app.pageSelector.className).toEqual(appConstants.PAGE_SELECTOR_MOBILE_SHOW_DARK_CLASS)
                })

                it('changes the space block to dark mode', () => {
                    const spaceBlock = document.getElementsByClassName(appConstants.SPACE_BLOCK_DARK_CLASS)[0]
                    expect(spaceBlock).toBeTruthy()
                })

                it('sets the darkMode state to true', () => {
                    expect(app.darkMode).toBe(true)
                })

                describe('when mobile sidebar is not opened', () => {
                    beforeAll(() => {
                        document.body.outerHTML = documentBody
                        app = new App()
                        app.changeToMobile(true)
                        app.changeToDarkMode(true)
                    })

                    it('does not reveal the sidebar', () => {
                        expect(app.pageSelector.className).toEqual(appConstants.PAGE_SELECTOR_MOBILE_HIDE_CLASS)
                    })
                })
            })
        })

        describe('when changing to primary mode', () => {
            describe('when in widescreen mode', () => {
                let app: App

                beforeAll(() => {
                    document.body.outerHTML = documentBody
                    app = new App()
                    app.changeToDarkMode(false)
                })

                it('changes the body to primary colours', () => {
                    const body = document.getElementsByTagName('body')[0]
                    expect(body.className).toEqual(appConstants.PRIMARY_MODE_CLASS)
                })

                it('changes the section selector to primary colours', () => {
                    expect(app.sectionSelector.className).toEqual(appConstants.SECTION_SELECTOR_CLASS)
                })

                it('changes the page selector to primary colours', () => {
                    expect(app.pageSelector.className).toEqual(appConstants.PAGE_SELECTOR_CLASS)
                })

                it('changes the space block to primary colours', () => {
                    const spaceBlock = document.getElementsByClassName(appConstants.SPACE_BLOCK_CLASS)[0]
                    expect(spaceBlock).toBeTruthy()
                })

                it('sets the darkMode state to false', () => {
                    expect(app.darkMode).toBe(false)
                })
            })

            describe('when in mobile', () => {
                let app: App

                beforeAll(() => {
                    document.body.outerHTML = documentBody
                    app = new App()
                    app.changeToMobile(true)
                    app.toggleSidebar(true) // open sidebar to check for class
                    app.changeToDarkMode(false)
                })

                it('changes the body to primary colours', () => {
                    const body = document.getElementsByTagName('body')[0]
                    expect(body.className).toEqual(appConstants.PRIMARY_MODE_CLASS)
                })

                it('changes the section selector to mobile primary colours', () => {
                    expect(app.sectionSelector.className).toEqual(appConstants.SECTION_SELECTOR_MOBILE_CLASS)
                })

                it("changes the page selector to mobile primary colours if it's showing", () => {
                    expect(app.pageSelector.className).toEqual(appConstants.PAGE_SELECTOR_MOBILE_SHOW_CLASS)
                })

                it('changes the space block to primary colours', () => {
                    const spaceBlock = document.getElementsByClassName(appConstants.SPACE_BLOCK_CLASS)[0]
                    expect(spaceBlock).toBeTruthy()
                })

                it('sets the darkMode state to false', () => {
                    expect(app.darkMode).toBe(false)
                })

                describe('when mobile sidebar is not opened', () => {
                    beforeAll(() => {
                        document.body.outerHTML = documentBody
                        app = new App()
                        app.changeToMobile(true)
                        app.changeToDarkMode(true)
                    })

                    it('does not reveal the sidebar', () => {
                        expect(app.pageSelector.className).toEqual(appConstants.PAGE_SELECTOR_MOBILE_HIDE_CLASS)
                    })
                })
            })
        })
    })

    /* Set Page Selectors */
    describe('setHomeSelectors', () => {
        let app: App
        let testElement: HTMLDivElement

        beforeEach(() => {
            document.body.outerHTML = documentBody
            app = new App()

            testElement = document.createElement('div')
            testElement.id = 'test-element'
            app.homePageSelector = [testElement]
        })

        describe('when in widescreen mode', () => {
            beforeEach(() => {
                app.setHomeSelectors()
            })

            it('updates the page selector with the elements in the home page selector', () => {
                expect(app.pageSelector.children).toContain(testElement)
            })

            it('does not open the sidebar', () => {
                expect(app.sidebarOpen).toBe(false)
            })
        })

        describe('when in mobile', () => {
            beforeEach(() => {
                app.changeToMobile(true)
                app.setHomeSelectors()
            })

            it('updates the page selector with the elements in the home page selector', () => {
                expect(app.pageSelector.children).toContain(testElement)
            })

            it('opens the sidebar', () => {
                expect(app.sidebarOpen).toBe(true)
            })
        })
    })

    describe('setCharactersSelectors', () => {
        let app: App
        let testElement: HTMLDivElement

        beforeEach(() => {
            document.body.outerHTML = documentBody
            app = new App()

            testElement = document.createElement('div')
            testElement.id = 'test-element'
            app.charactersSelector = [testElement]
        })

        describe('when in widescreen mode', () => {
            beforeEach(() => {
                app.setCharactersSelectors()
            })

            it('updates the page selector with the elements in the character page selector', () => {
                expect(app.pageSelector.children).toContain(testElement)
            })

            it('does not open the sidebar', () => {
                expect(app.sidebarOpen).toBe(false)
            })
        })

        describe('when in mobile', () => {
            beforeEach(() => {
                app.changeToMobile(true)
                app.setCharactersSelectors()
            })

            it('updates the page selector with the elements in the character page selector', () => {
                expect(app.pageSelector.children).toContain(testElement)
            })

            it('opens the sidebar', () => {
                expect(app.sidebarOpen).toBe(true)
            })
        })
    })

    describe('setNotesSelectors', () => {
        let app: App
        let testElement: HTMLDivElement

        beforeEach(() => {
            document.body.outerHTML = documentBody
            app = new App()

            testElement = document.createElement('div')
            testElement.id = 'test-element'
            app.notesSelector = [testElement]
        })

        describe('when in widescreen mode', () => {
            beforeEach(() => {
                app.setNotesSelectors()
            })

            it('updates the page selector with the elements in the note page selector', () => {
                expect(app.pageSelector.children).toContain(testElement)
            })

            it('does not open the sidebar', () => {
                expect(app.sidebarOpen).toBe(false)
            })
        })

        describe('when in mobile', () => {
            beforeEach(() => {
                app.changeToMobile(true)
                app.setNotesSelectors()
            })

            it('updates the page selector with the elements in the note page selector', () => {
                expect(app.pageSelector.children).toContain(testElement)
            })

            it('opens the sidebar', () => {
                expect(app.sidebarOpen).toBe(true)
            })
        })
    })

    describe('removeTag', () => {
        it('returns a function', () => {
            const app = new App()
            expect(app.removeTag(new Set())).toBeInstanceOf(Function)
        })

        describe('when event function is run', () => {
            it('removes tag from results in DOM and memory then adjusts the page selectors', () => {
                document.body.outerHTML = documentBody

                // Create selected results div
                const selectedResultsHTML = document.createElement('div')
                selectedResultsHTML.className = appConstants.SELECTED_TAG_RESULTS

                // Tag names
                const firstTag = 'firstTag'
                const secondTag = 'secondTag'
                const thirdTag = 'thirdTag'

                // Create tag divs
                const firstTagEl = document.createElement('div')
                firstTagEl.innerHTML = firstTag
                const secondTagEl = document.createElement('div')
                secondTagEl.innerHTML = secondTag
                const thirdTagEl = document.createElement('div')
                thirdTagEl.innerHTML = thirdTag

                // Add tag divs to selected results div
                selectedResultsHTML.appendChild(firstTagEl)
                selectedResultsHTML.appendChild(secondTagEl)
                selectedResultsHTML.appendChild(thirdTagEl)

                // Find the page selector and add the selected results to the DOM
                const pageSelector = document.getElementById(appConstants.PAGE_SELECTOR_CLASS)
                pageSelector?.appendChild(selectedResultsHTML)

                // Mock selected tags in memory
                const selectedTags = new Set([firstTag, secondTag, thirdTag])

                // Create the app
                const app = new App()

                // Spy on adjustment method
                jest.spyOn(app, 'adjustPageSelectorsToTags').mockImplementation(() => true)

                // Call removeTag event function on click
                secondTagEl.onclick = app.removeTag(selectedTags)
                secondTagEl.click()

                // Selected tags in memory should remove secondTag
                expect(selectedTags.size).toEqual(2)
                expect(selectedTags).toContain(firstTag)
                expect(selectedTags).not.toContain(secondTag)
                expect(selectedTags).toContain(thirdTag)

                // DOM should remove secondTagEl
                expect(selectedResultsHTML.children.length).toEqual(2)
                expect(selectedResultsHTML.children).toContain(firstTagEl)
                expect(selectedResultsHTML.children).not.toContain(secondTagEl)
                expect(selectedResultsHTML.children).toContain(thirdTagEl)

                // Adjustment function should have been called
                expect(app.adjustPageSelectorsToTags).toHaveBeenCalled()
            })
        })
    })

    describe('pickTag', () => {
        it('returns a function', () => {
            const app = new App()
            expect(app.removeTag(new Set())).toBeInstanceOf(Function)
        })

        describe('when event function is run', () => {
            let sectionTitle: HTMLElement
            let tagResults: HTMLElement
            let selectedTagResults: HTMLElement
            let sectionTagSearch: HTMLInputElement
            let selectedTags: Set<string>

            const firstTag = 'firstTag'
            const secondTag = 'secondTag'
            const thirdTag = 'thirdTag'

            beforeEach(() => {
                document.body.outerHTML = documentBody

                // Create search tag results DIV
                tagResults = document.createElement('div')
                tagResults.className = appConstants.TAG_RESULTS

                // Add single element to search results
                const tagResult = document.createElement('div')
                tagResults.appendChild(tagResult)

                // Create blank section title
                sectionTitle = document.createElement('div')
                sectionTitle.className = appConstants.SECTION_TITLE

                // Create selected tag results
                selectedTagResults = document.createElement('div')
                selectedTagResults.className = appConstants.SELECTED_TAG_RESULTS

                // Add search tag search input
                sectionTagSearch = document.createElement('input')
                sectionTagSearch.className = appConstants.SECTION_TAG_SEARCH
                sectionTagSearch.value = 'testsearch'

                // Add elements to DOM under page selector
                const pageSelector = document.getElementById(appConstants.PAGE_SELECTOR_CLASS)

                pageSelector?.appendChild(tagResults)
                pageSelector?.appendChild(sectionTitle)
                pageSelector?.appendChild(selectedTagResults)
                pageSelector?.appendChild(sectionTagSearch)

                // Create selected tags in memory
                selectedTags = new Set([firstTag, secondTag, thirdTag])
            })

            describe('when section title is not characters or note type', () => {
                let app: App
                let tagEl: HTMLElement

                beforeEach(() => {
                    app = new App()
                    jest.spyOn(app, 'adjustPageSelectorsToTags').mockImplementation(() => true)

                    // Create tag to be clicked on
                    tagEl = document.createElement('div')
                    tagEl.innerHTML = 'fourthTag'

                    // Set function to run onclick
                    tagEl.onclick = app.pickTag(selectedTags)
                    tagEl.click()
                })

                it('does not alter the selected tags', () => {
                    expect(selectedTags.size).toEqual(3)
                    expect(selectedTags).toContain(firstTag)
                    expect(selectedTags).toContain(secondTag)
                    expect(selectedTags).toContain(thirdTag)
                })

                it('does not add to the selected tag results in the DOM', () => {
                    expect(selectedTagResults.children).toHaveLength(0)
                })

                it('does not clear the search input', () => {
                    expect(sectionTagSearch.value).toEqual('testsearch')
                })

                it('does not clear the found tag results in the DOM', () => {
                    expect(tagResults.children).toHaveLength(1)
                })

                it('does not adjust the page selectors', () => {
                    expect(app.adjustPageSelectorsToTags).not.toHaveBeenCalled()
                })
            })

            describe('when current tag set is empty', () => {
                let app: App
                let tagEl: HTMLElement

                beforeEach(() => {
                    app = new App()
                    jest.spyOn(app, 'adjustPageSelectorsToTags').mockImplementation(() => true)

                    // Set proper section title
                    sectionTitle.innerHTML = CHARACTERS_PAGE_TYPE

                    // Set empty tags for section
                    app.ALL_CHARACTER_TAGS = new Set()

                    // Create tag to be clicked on
                    tagEl = document.createElement('div')
                    tagEl.innerHTML = 'fourthTag'

                    // Set function to run onclick
                    tagEl.onclick = app.pickTag(selectedTags)
                    tagEl.click()
                })

                it('does not alter the selected tags', () => {
                    expect(selectedTags.size).toEqual(3)
                    expect(selectedTags).toContain(firstTag)
                    expect(selectedTags).toContain(secondTag)
                    expect(selectedTags).toContain(thirdTag)
                })

                it('does not add to the selected tag results in the DOM', () => {
                    expect(selectedTagResults.children).toHaveLength(0)
                })

                it('does not clear the search input', () => {
                    expect(sectionTagSearch.value).toEqual('testsearch')
                })

                it('does not clear the found tag results in the DOM', () => {
                    expect(tagResults.children).toHaveLength(1)
                })

                it('does not adjust the page selectors', () => {
                    expect(app.adjustPageSelectorsToTags).not.toHaveBeenCalled()
                })
            })

            describe('when current tag set does not have the target text', () => {
                let app: App
                let tagEl: HTMLElement

                beforeEach(() => {
                    app = new App()
                    jest.spyOn(app, 'adjustPageSelectorsToTags').mockImplementation(() => true)

                    // Set proper section title
                    sectionTitle.innerHTML = CHARACTERS_PAGE_TYPE

                    // Set tags without target text
                    app.ALL_CHARACTER_TAGS = new Set(['someTag', 'anotherTag'])

                    // Create tag to be clicked on
                    tagEl = document.createElement('div')
                    tagEl.innerHTML = 'fourthTag'

                    // Set function to run onclick
                    tagEl.onclick = app.pickTag(selectedTags)
                    tagEl.click()
                })

                it('does not alter the selected tags', () => {
                    expect(selectedTags.size).toEqual(3)
                    expect(selectedTags).toContain(firstTag)
                    expect(selectedTags).toContain(secondTag)
                    expect(selectedTags).toContain(thirdTag)
                })

                it('does not add to the selected tag results in the DOM', () => {
                    expect(selectedTagResults.children).toHaveLength(0)
                })

                it('does not clear the search input', () => {
                    expect(sectionTagSearch.value).toEqual('testsearch')
                })

                it('does not clear the found tag results in the DOM', () => {
                    expect(tagResults.children).toHaveLength(1)
                })

                it('does not adjust the page selectors', () => {
                    expect(app.adjustPageSelectorsToTags).not.toHaveBeenCalled()
                })
            })

            describe('when current tag is already selected', () => {
                let app: App
                let tagEl: HTMLElement
                const fourthTag = 'fourthTag'

                beforeEach(() => {
                    app = new App()
                    jest.spyOn(app, 'adjustPageSelectorsToTags').mockImplementation(() => true)

                    // Set proper section title
                    sectionTitle.innerHTML = CHARACTERS_PAGE_TYPE

                    // Set tags with target text
                    app.ALL_CHARACTER_TAGS = new Set([fourthTag])

                    // Add target text to selected tags in memory
                    selectedTags.add(fourthTag)

                    // Create tag to be clicked on
                    tagEl = document.createElement('div')
                    tagEl.innerHTML = fourthTag

                    // Set function to run onclick
                    tagEl.onclick = app.pickTag(selectedTags)
                    tagEl.click()
                })

                it('does not alter the selected tags', () => {
                    expect(selectedTags.size).toEqual(4)
                    expect(selectedTags).toContain(firstTag)
                    expect(selectedTags).toContain(secondTag)
                    expect(selectedTags).toContain(thirdTag)
                    expect(selectedTags).toContain(fourthTag)
                })

                it('does not add to the selected tag results in the DOM', () => {
                    expect(selectedTagResults.children).toHaveLength(0)
                })

                it('does not clear the search input', () => {
                    expect(sectionTagSearch.value).toEqual('testsearch')
                })

                it('does not clear the found tag results in the DOM', () => {
                    expect(tagResults.children).toHaveLength(1)
                })

                it('does not adjust the page selectors', () => {
                    expect(app.adjustPageSelectorsToTags).not.toHaveBeenCalled()
                })
            })

            describe('when current tag set has the target test and the tag is not already selected', () => {
                let app: App
                let tagEl: HTMLElement
                const fourthTag = 'fourthTag'

                beforeEach(() => {
                    app = new App()
                    jest.spyOn(app, 'adjustPageSelectorsToTags').mockImplementation(() => true)

                    // Set proper section title
                    sectionTitle.innerHTML = CHARACTERS_PAGE_TYPE

                    // Set tags with target text
                    app.ALL_CHARACTER_TAGS = new Set([fourthTag])

                    // Create tag to be clicked on
                    tagEl = document.createElement('div')
                    tagEl.innerHTML = fourthTag

                    // Set function to run onclick
                    tagEl.onclick = app.pickTag(selectedTags)
                    tagEl.click()
                })

                it('adds the new tag to the selected tags', () => {
                    expect(selectedTags.size).toEqual(4)
                    expect(selectedTags).toContain(firstTag)
                    expect(selectedTags).toContain(secondTag)
                    expect(selectedTags).toContain(thirdTag)
                    expect(selectedTags).toContain(fourthTag)
                })

                it('adds to the selected tag results in the DOM', () => {
                    expect(selectedTagResults.children).toHaveLength(1)
                })

                it('clears the search input', () => {
                    expect(sectionTagSearch.value).toEqual('')
                })

                it('clears the found tag results in the DOM', () => {
                    expect(tagResults.children).toHaveLength(0)
                })

                it('adjusts the page selectors', () => {
                    expect(app.adjustPageSelectorsToTags).toHaveBeenCalled()
                })
            })
        })
    })

    describe('searchForTags', () => {
        it('returns a function', () => {
            const app = new App()
            expect(app.searchForTags(CHARACTERS_PAGE_TYPE)).toBeInstanceOf(Function)
        })

        describe('when event function is run', () => {
            describe('when input is empty', () => {
                let app: App
                let tagResults: HTMLElement

                beforeEach(() => {
                    document.body.outerHTML = documentBody
                    app = new App()

                    // Create valid tags to find
                    app.ALL_CHARACTER_TAGS = new Set(['tagOne', 'tagTwo'])
                    app.SELECTED_CHARACTER_TAGS = new Set(['tagTwo'])

                    // Create tag results DIV
                    tagResults = document.createElement('div')
                    tagResults.className = appConstants.TAG_RESULTS

                    // Add dummy tag to search results
                    const dummyTagResult = document.createElement('div')
                    tagResults.appendChild(dummyTagResult)

                    // Create search input with empty value
                    const searchInput = document.createElement('input')
                    searchInput.value = ''

                    // Add search event function on click
                    searchInput.onclick = app.searchForTags(CHARACTERS_PAGE_TYPE)

                    // Add elements to DOM
                    const pageSelector = document.getElementById(appConstants.PAGE_SELECTOR_CLASS)
                    pageSelector?.appendChild(tagResults)
                    pageSelector?.appendChild(searchInput)

                    // Click input to run event function
                    searchInput.click()
                })

                it('clears the search tag results in the DOM', () => {
                    expect(tagResults.children).toHaveLength(0)
                })
            })

            describe('when unable to find tags that match', () => {
                let app: App
                let tagResults: HTMLElement

                beforeEach(() => {
                    document.body.outerHTML = documentBody
                    app = new App()

                    // Create valid tags to find
                    app.ALL_CHARACTER_TAGS = new Set(['tagOne', 'tagTwo'])
                    app.SELECTED_CHARACTER_TAGS = new Set(['tagTwo'])

                    // Create tag results DIV
                    tagResults = document.createElement('div')
                    tagResults.className = appConstants.TAG_RESULTS

                    // Add dummy tag to search results
                    const dummyTagResult = document.createElement('div')
                    tagResults.appendChild(dummyTagResult)

                    // Create search input that should not find a tag
                    const searchInput = document.createElement('input')
                    searchInput.value = 'zyx'

                    // Add search event function on click
                    searchInput.onclick = app.searchForTags(CHARACTERS_PAGE_TYPE)

                    // Add elements to DOM
                    const pageSelector = document.getElementById(appConstants.PAGE_SELECTOR_CLASS)
                    pageSelector?.appendChild(tagResults)
                    pageSelector?.appendChild(searchInput)

                    // Click input to run event function
                    searchInput.click()
                })

                it('clears the search tag results in the DOM', () => {
                    expect(tagResults.children).toHaveLength(0)
                })
            })

            describe('when able to find tags that match', () => {
                let app: App
                let tagResults: HTMLElement
                let searchInput: HTMLInputElement

                beforeEach(() => {
                    document.body.outerHTML = documentBody
                    app = new App()

                    // Create valid tags to find
                    app.ALL_CHARACTER_TAGS = new Set(['tagOne', 'tag Two', 'tag-Three'])
                    app.SELECTED_CHARACTER_TAGS = new Set(['tagTwo'])

                    // Create empty tag results DIV
                    tagResults = document.createElement('div')
                    tagResults.className = appConstants.TAG_RESULTS

                    // Create search input
                    searchInput = document.createElement('input')

                    // Add search event function on click
                    searchInput.onclick = app.searchForTags(CHARACTERS_PAGE_TYPE)

                    // Add elements to DOM
                    const pageSelector = document.getElementById(appConstants.PAGE_SELECTOR_CLASS)
                    pageSelector?.appendChild(tagResults)
                    pageSelector?.appendChild(searchInput)
                })

                it('adds the matching tags to the DOM', () => {
                    jest.spyOn(app, 'pickTag')

                    searchInput.value = 'tagO'
                    searchInput.click()

                    const tagEls = [...tagResults.children]
                    tagEls.forEach((el) => {
                        const tagEl = el as HTMLElement
                        expect(tagEl.innerHTML).toEqual('tagOne')
                        expect(tagEl.onclick).toBeTruthy()
                        expect(tagEl.onclick).toBeInstanceOf(Function)
                    })

                    expect(tagResults.children).toHaveLength(1)

                    expect(app.pickTag).toHaveBeenCalledTimes(1)
                    expect(app.pickTag).toHaveBeenCalledWith(app.SELECTED_CHARACTER_TAGS)
                })

                it('ignores non alphanumeric characters', () => {
                    jest.spyOn(app, 'pickTag')

                    searchInput.value = 'tagT'
                    searchInput.click()

                    const tagEls = [...tagResults.children]
                    const tagNames = tagEls.map(t => t.innerHTML)

                    tagEls.forEach((el) => {
                        const tagEl = el as HTMLElement
                        expect(tagEl.onclick).toBeTruthy()
                        expect(tagEl.onclick).toBeInstanceOf(Function)
                    })

                    expect(tagResults.children).toHaveLength(2)

                    expect(tagNames).toContain('tag Two')
                    expect(tagNames).toContain('tag-Three')

                    expect(app.pickTag).toHaveBeenCalledTimes(2)
                    expect(app.pickTag).toHaveBeenCalledWith(app.SELECTED_CHARACTER_TAGS)
                })

                it('is case insensitive', () => {
                    jest.spyOn(app, 'pickTag')

                    searchInput.value = 'tagt'
                    searchInput.click()

                    const tagEls = [...tagResults.children]
                    const tagNames = tagEls.map(t => t.innerHTML)

                    tagEls.forEach((el) => {
                        const tagEl = el as HTMLElement
                        expect(tagEl.onclick).toBeTruthy()
                        expect(tagEl.onclick).toBeInstanceOf(Function)
                    })

                    expect(tagResults.children).toHaveLength(2)

                    expect(tagNames).toContain('tag Two')
                    expect(tagNames).toContain('tag-Three')

                    expect(app.pickTag).toHaveBeenCalledTimes(2)
                    expect(app.pickTag).toHaveBeenCalledWith(app.SELECTED_CHARACTER_TAGS)
                })
            })
        })
    })

    describe('addPageTags', () => {
        describe('when page has no tags', () => {
            let characterPage: Page
            let notePage: Page

            beforeEach(() => {
                characterPage = {
                    id: 'some_page',
                    type: CHARACTERS_PAGE_TYPE,
                    name: 'Some Page',
                    sections: []
                }
                notePage = {
                    id: 'some_page',
                    type: CHARACTERS_PAGE_TYPE,
                    name: 'Some Page',
                    sections: []
                }
            })

            it('adds the page to memory with the tags as the key', () => {
                const app = new App()
                app.addPageTags(characterPage)
                app.addPageTags(notePage)

                expect(Object.keys(app.taggedCharacterPages).length).toEqual(0)
                expect(Object.keys(app.taggedNotePages).length).toEqual(0)
            })
        })

        describe('when page is a character type page', () => {
            let page: Page
            beforeEach(() => {
                page = {
                    id: 'some_page',
                    type: CHARACTERS_PAGE_TYPE,
                    name: 'Some Page',
                    sections: [],
                    tags: new Set(['tagOne', 'tagTwo', 'tagThree'])
                }
            })

            it('adds the page to memory with the tags as the key', () => {
                const app = new App()
                app.addPageTags(page)

                expect(Object.keys(app.taggedCharacterPages).length).toEqual(3)
                expect(app.taggedCharacterPages['tagOne']).toContain(page)
                expect(app.taggedCharacterPages['tagTwo']).toContain(page)
                expect(app.taggedCharacterPages['tagThree']).toContain(page)
            })
        })

        describe('when page is a note type page', () => {
            let page: Page
            beforeEach(() => {
                page = {
                    id: 'some_page',
                    type: NOTES_PAGE_TYPE,
                    name: 'Some Page',
                    sections: [],
                    tags: new Set(['tagOne', 'tagTwo', 'tagThree'])
                }
            })

            it('adds the page to memory with the tags as the key', () => {
                const app = new App()
                app.addPageTags(page)

                expect(Object.keys(app.taggedNotePages).length).toEqual(3)
                expect(app.taggedNotePages['tagOne']).toContain(page)
                expect(app.taggedNotePages['tagTwo']).toContain(page)
                expect(app.taggedNotePages['tagThree']).toContain(page)
            })
        })
    })

    describe('resetPageSelectors', () => {
        let app: App
        let defaultCharactersOption: HTMLElement
        let defaultNotesOption: HTMLElement

        beforeEach(() => {
            app = new App()

            defaultCharactersOption = document.createElement('div')
            defaultCharactersOption.innerHTML = 'charOne'
            app.DEFAULT_CHARACTERS_OPTIONS = [defaultCharactersOption]

            defaultNotesOption = document.createElement('div')
            defaultNotesOption.innerHTML = 'noteOne'
            app.DEFAULT_NOTES_OPTIONS = [defaultNotesOption]
        })

        describe('when section title is not for "Characters" or "Notes"', () => {
            it('does not add anything to the container', () => {
                const pageOptionContainer = document.createElement('div')
                const sectionTitle = document.createElement('div')
                sectionTitle.innerHTML = 'Another Section'

                app.resetPageSelectors(pageOptionContainer, sectionTitle)

                expect(pageOptionContainer.children).toHaveLength(0)
                expect(pageOptionContainer.children).not.toContain(defaultCharactersOption)
                expect(pageOptionContainer.children).not.toContain(defaultNotesOption)
            })
        })

        describe('when section title is for "Characters"', () => {
            it('adds the default characters options to the container', () => {
                const pageOptionContainer = document.createElement('div')
                const sectionTitle = document.createElement('div')
                sectionTitle.innerHTML = CHARACTERS_PAGE_TYPE

                app.resetPageSelectors(pageOptionContainer, sectionTitle)

                expect(pageOptionContainer.children).toHaveLength(1)
                expect(pageOptionContainer.children).toContain(defaultCharactersOption)
                expect(pageOptionContainer.children).not.toContain(defaultNotesOption)
            })
        })

        describe('when section title is for "Notes"', () => {
            it('adds the default notes options to the container', () => {
                const pageOptionContainer = document.createElement('div')
                const sectionTitle = document.createElement('div')
                sectionTitle.innerHTML = NOTES_PAGE_TYPE

                app.resetPageSelectors(pageOptionContainer, sectionTitle)

                expect(pageOptionContainer.children).toHaveLength(1)
                expect(pageOptionContainer.children).toContain(defaultNotesOption)
                expect(pageOptionContainer.children).not.toContain(defaultCharactersOption)
            })
        })
    })

    describe('getInitialTaggedPages', () => {
        describe('when passed tagged list is empty', () => {
            let app: App
            let charPage: Page
            let notePage: Page
            let charSectionTitle: HTMLElement
            let noteSectionTitle: HTMLElement

            beforeEach(() => {
                charPage = {
                    id: 'char_page',
                    type: CHARACTERS_PAGE_TYPE,
                    name: 'Char Page',
                    sections: [],
                    tags: new Set(['charTagOne', 'charTagTwo'])
                }
                notePage = {
                    id: 'note_page',
                    type: NOTES_PAGE_TYPE,
                    name: 'Note Page',
                    sections: [],
                    tags: new Set(['noteTagOne', 'noteTagTwo'])
                }

                app = new App()
                app.taggedCharacterPages = {
                    charTagOne: [charPage],
                    charTagTwo: [charPage]
                }
                app.taggedNotePages = {
                    noteTagOne: [notePage],
                    noteTagTwo: [notePage]
                }

                charSectionTitle = document.createElement('div')
                charSectionTitle.innerHTML = CHARACTERS_PAGE_TYPE

                noteSectionTitle = document.createElement('div')
                noteSectionTitle.innerHTML = NOTES_PAGE_TYPE
            })

            it('returns an empty array', () => {
                expect(app.getInitialTaggedPages(charSectionTitle, [])).toHaveLength(0)
                expect(app.getInitialTaggedPages(noteSectionTitle, [])).toHaveLength(0)
            })
        })

        describe('when section title is not "Characters" or "Notes"', () => {
            let app: App
            let charPage: Page
            let notePage: Page
            let sectionTitle: HTMLElement

            beforeEach(() => {
                charPage = {
                    id: 'char_page',
                    type: CHARACTERS_PAGE_TYPE,
                    name: 'Char Page',
                    sections: [],
                    tags: new Set(['charTagOne', 'charTagTwo'])
                }
                notePage = {
                    id: 'note_page',
                    type: NOTES_PAGE_TYPE,
                    name: 'Note Page',
                    sections: [],
                    tags: new Set(['noteTagOne', 'noteTagTwo'])
                }

                app = new App()
                app.taggedCharacterPages = {
                    charTagOne: [charPage],
                    charTagTwo: [charPage]
                }
                app.taggedNotePages = {
                    noteTagOne: [notePage],
                    noteTagTwo: [notePage]
                }

                sectionTitle = document.createElement('div')
                sectionTitle.innerHTML = 'Some Section'
            })

            it('returns an empty array', () => {
                expect(app.getInitialTaggedPages(sectionTitle, ['charTagOne', 'charTagTwo'])).toHaveLength(0)
                expect(app.getInitialTaggedPages(sectionTitle, ['noteTagOne', 'noteTagTwo'])).toHaveLength(0)
            })
        })

        describe('when "Characters" section title', () => {
            let app: App
            let charPage: Page
            let sectionTitle: HTMLElement

            beforeEach(() => {
                charPage = {
                    id: 'char_page',
                    type: CHARACTERS_PAGE_TYPE,
                    name: 'Char Page',
                    sections: [],
                    tags: new Set(['charTagOne', 'charTagTwo'])
                }

                app = new App()
                app.taggedCharacterPages = {
                    charTagOne: [charPage],
                    charTagTwo: [charPage]
                }

                sectionTitle = document.createElement('div')
                sectionTitle.innerHTML = CHARACTERS_PAGE_TYPE
            })

            describe('when first tag in list is not in the tagged character pages',  () => {
                it('returns an empty array', () => {
                    expect(app.getInitialTaggedPages(sectionTitle, ['charTagThree', 'charTagOne'])).toHaveLength(0)
                })
            })

            describe('when first tag in list is in the tagged character pages',  () => {
                it('returns the list of character pages under the first tag', () => {
                    const pagesResult = app.getInitialTaggedPages(sectionTitle, ['charTagOne', 'charTagThree'])
                    expect(pagesResult).toHaveLength(1)
                    expect(pagesResult[0]).toEqual(charPage)
                })
            })
        })

        describe('when "Notes" section title', () => {
            let app: App
            let notePage: Page
            let sectionTitle: HTMLElement

            beforeEach(() => {
                notePage = {
                    id: 'note_page',
                    type: NOTES_PAGE_TYPE,
                    name: 'Note Page',
                    sections: [],
                    tags: new Set(['noteTagOne', 'noteTagTwo'])
                }

                app = new App()
                app.taggedNotePages = {
                    noteTagOne: [notePage],
                    noteTagTwo: [notePage]
                }

                sectionTitle = document.createElement('div')
                sectionTitle.innerHTML = NOTES_PAGE_TYPE
            })

            describe('when first tag in list is not in the tagged note pages',  () => {
                it('returns an empty array', () => {
                    expect(app.getInitialTaggedPages(sectionTitle, ['noteTagThree', 'noteTagOne'])).toHaveLength(0)
                })
            })

            describe('when first tag in list is in the tagged note pages',  () => {
                it('returns the list of note pages under the first tag', () => {
                    const pagesResult = app.getInitialTaggedPages(sectionTitle, ['noteTagOne', 'noteTagThree'])
                    expect(pagesResult).toHaveLength(1)
                    expect(pagesResult[0]).toEqual(notePage)
                })
            })
        })
    })

    describe('adjustPageSelectorsToTags', () => {
        let selectedTagResults: HTMLElement
        let pageOptionContainer: HTMLElement
        let sectionTitle: HTMLElement

        beforeEach(() => {
            document.body.outerHTML = documentBody

            selectedTagResults = document.createElement('div')
            selectedTagResults.className = appConstants.SELECTED_TAG_RESULTS

            pageOptionContainer = document.createElement('div')
            pageOptionContainer.className = appConstants.PAGE_OPTION_CONTAINER

            sectionTitle = document.createElement('div')
            sectionTitle.className = appConstants.SECTION_TITLE

            const pageSelector = document.getElementById(appConstants.PAGE_SELECTOR_CLASS)
            pageSelector?.appendChild(selectedTagResults)
            pageSelector?.appendChild(pageOptionContainer)
            pageSelector?.appendChild(sectionTitle)
        })

        describe('when no selected tags are in the DOM', () => {
            it('resets the page selectors', () => {
                const app = new App()
                jest.spyOn(app, 'resetPageSelectors')
                app.adjustPageSelectorsToTags()
                expect(app.resetPageSelectors).toHaveBeenCalledWith(pageOptionContainer, sectionTitle)
            })
        })

        describe('when selected tags are in the DOM', () => {
            let app: App
            let tagOneEl: HTMLElement
            let tagTwoEl: HTMLElement
            let pageOne: Page
            let pageTwo: Page
            const tagOne = 'tagOne'
            const tagTwo = 'tagTwo'

            beforeEach(() => {
                tagOneEl = document.createElement('div')
                tagOneEl.innerHTML = tagOne

                tagTwoEl = document.createElement('div')
                tagTwoEl.innerHTML = tagTwo

                selectedTagResults.appendChild(tagOneEl)
                selectedTagResults.appendChild(tagTwoEl)

                pageOne = {
                    id: 'page_one',
                    type: CHARACTERS_PAGE_TYPE,
                    name: 'Page One',
                    sections: [],
                    tags: new Set([tagOne, tagTwo])
                }

                pageTwo = {
                    id: 'page_one',
                    type: CHARACTERS_PAGE_TYPE,
                    name: 'Page One',
                    sections: [],
                    tags: new Set([tagOne, 'tagThree'])
                }
                app = new App()
            })

            it('gets the initial tagged pages', () => {
                jest.spyOn(app, 'getInitialTaggedPages')
                app.adjustPageSelectorsToTags()
                expect(app.getInitialTaggedPages).toHaveBeenCalledWith(sectionTitle, [tagOne, tagTwo])
            })

            it('filters out pages from the initial pages based on selected tags', () => {
                jest.spyOn(app, 'getInitialTaggedPages').mockImplementation(() => [pageOne, pageTwo])
                app.adjustPageSelectorsToTags()

                const children = [...pageOptionContainer.children]
                children.forEach((el) => {
                    const selector = el as HTMLElement
                    expect(selector.innerHTML).toEqual(pageOne.name)
                    expect(selector.onclick).toBeTruthy()
                    expect(selector.onclick).toBeInstanceOf(Function)
                })

                expect(children).toHaveLength(1)
            })

            it('adds openPage click functions', () => {
                jest.spyOn(app, 'getInitialTaggedPages').mockImplementation(() => [pageOne, pageTwo])
                jest.spyOn(app, 'openPage')
                app.adjustPageSelectorsToTags()
                expect(app.openPage).toHaveBeenCalledWith(pageOne)
            })
        })
    })

    describe('findOrientation', () => {
        const app = new App()

        describe('when img is portrait orientation', () => {
            it('returns "portrait"', () => {
                const img = document.createElement('img')
                img.setAttribute('height', '100')

                expect(app.findOrientation(img)).toEqual('portrait')
            })
        })

        describe('when img is landscape orientation', () => {
            it('returns "landscape"', () => {
                const img = document.createElement('img')
                img.setAttribute('width', '100')

                expect(app.findOrientation(img)).toEqual('landscape')
            })
        })
    })

    describe('zoomInImage', () => {
        let app: App

        beforeEach(() => {
            document.body.outerHTML = documentBody
            app = new App()
        })

        it('returns a function', () => {
            expect(app.zoomInImage('testimage')).toBeInstanceOf(Function)
        })

        describe('when event function is run', () => {
            it('shows the zoomed image section with a modal', () => {
                app.zoomInImage('testimage')()
                expect(app.zoomedImageSection.className).toEqual(appConstants.ZOOMED_IMAGE_SECTION_SHOW)
                expect(app.zoomedModal.className).toEqual(appConstants.ZOOMED_IMAGE_MODAL_SHOW)
            })

            describe('when image is portrait orientation', () => {
                it('adds a zoomed portrait image to the zoomed image section', () => {
                    jest.spyOn(app, 'findOrientation').mockImplementation(() => 'portrait')
                    app.zoomInImage('testimage')()

                    expect(app.findOrientation).toHaveBeenCalledTimes(1)
                    expect(app.zoomedImageSection.children).toHaveLength(1)
                    expect(app.zoomedImageSection.children[0].className).toEqual(appConstants.zoomedImageClass('portrait'))
                })
            })

            describe('when image is landscape orientation', () => {
                it('adds a zoomed landscape image to the zoomed image section', () => {
                    jest.spyOn(app, 'findOrientation').mockImplementation(() => 'landscape')
                    app.zoomInImage('testimage')()

                    expect(app.findOrientation).toHaveBeenCalledTimes(1)
                    expect(app.zoomedImageSection.children).toHaveLength(1)
                    expect(app.zoomedImageSection.children[0].className).toEqual(appConstants.zoomedImageClass('landscape'))
                })
            })
        })
    })

    describe('closeZoomModal', () => {
        const app = new App()

        beforeEach(() => {
            app.zoomInImage('testimage')()
            app.closeZoomModal()
        })

        it('clears the zoomedImageSection in the DOM', () => {
            expect(app.zoomedImageSection.children).toHaveLength(0)
        })

        it('hides the zoomedImageSection and zoomedModal', () => {
            expect(app.zoomedImageSection.className).toEqual(appConstants.ZOOMED_IMAGE_SECTION_HIDE)
            expect(app.zoomedModal.className).toEqual(appConstants.ZOOMED_IMAGE_MODAL_HIDE)
        })
    })

    describe('getGalleryContents', () => {
        const app = new App()
        jest.spyOn(app, 'zoomInImage').mockImplementation(() => () => null)
        const gallerySection: GallerySection = {
            title: GALLERY_TITLES_LIST[0],
            gallery: [
                {
                    url: 'testimage1',
                    caption: 'Test Image 1'
                },
                {
                    url: 'testimage2'
                }
            ]
        }
        const gallerySectionEl = app.getGalleryContents(gallerySection)

        it('creates a gallery image list', () => {
            expect(gallerySectionEl.className).toEqual(appConstants.GALLERY_IMAGE_LIST)
        })

        it('creates a section for every image', () => {
            expect(gallerySectionEl.children).toHaveLength(2)

            const imageSections = [...gallerySectionEl.children]
            imageSections.forEach((section) => {
                expect(section.className).toEqual(appConstants.GALLERY_IMAGE_SECTION)
            })
        })

        it('puts images in every image section', () => {
            const imageSections = [...gallerySectionEl.children]
            imageSections.forEach((section) => {
                expect(section.children[0].tagName).toEqual('IMG')
                expect(section.children[0].className).toEqual(appConstants.GALLERY_IMAGE)
            })

            const firstImageEl = imageSections[0].children[0] as HTMLImageElement
            const secondImageEl = imageSections[1].children[0] as HTMLImageElement

            expect(firstImageEl.src.endsWith('testimage1')).toBeTruthy()
            expect(firstImageEl.onclick).toBeTruthy()

            expect(secondImageEl.src.endsWith('testimage2')).toBeTruthy()
            expect(secondImageEl.onclick).toBeTruthy()
        })

        it('adds a zoom-in event function', () => {
            expect(app.zoomInImage).toHaveBeenCalledTimes(2)
        })

        it('adds captions when necessary', () => {
            const firstImageCaption = gallerySectionEl.children[0].children[1]
            const secondImageCaption = gallerySectionEl.children[1].children[1]

            expect(firstImageCaption).toBeTruthy()
            expect(firstImageCaption.className).toEqual(appConstants.GALLERY_IMAGE_CAPTION)
            expect(firstImageCaption.innerHTML).toEqual('Test Image 1')

            expect(secondImageCaption).toBeFalsy()
        })
    })

    describe('getAttributesContents', () => {
        const app = new App()
        const attributesSection: AttributesSection = {
            title: ASSOCIATIONS_TITLES_LIST[0],
            attributes: [
                {
                    attributeName: 'Attr1',
                    attributeText: 'attr1text'
                },
                {
                    attributeName: 'Attr2',
                    attributeText: 'attr2text'
                }
            ]
        }
        const attributesSectionEl = app.getAttributesContents(attributesSection)

        it('creates an attribute list element', () => {
            expect(attributesSectionEl.className).toEqual(appConstants.ATTRIBUTES_LIST)
        })

        it('creates an attribute section for every attribute', () => {
            expect(attributesSectionEl.children).toHaveLength(2)
            expect(attributesSectionEl.children[0].className).toEqual(appConstants.ATTRIBUTE)
            expect(attributesSectionEl.children[1].className).toEqual(appConstants.ATTRIBUTE)
        })

        it('create an attribute title and value element based on section', () => {
            const attrSectionOne = attributesSectionEl.children[0]
            const attrSectionTwo = attributesSectionEl.children[1]

            expect(attrSectionOne.children[0].className).toEqual(appConstants.ATTRIBUTE_TITLE)
            expect(attrSectionOne.children[0].innerHTML).toEqual('Attr1')

            expect(attrSectionOne.children[1].className).toEqual(appConstants.ATTRIBUTE_VALUE)
            expect(attrSectionOne.children[1].innerHTML).toEqual('attr1text')

            expect(attrSectionTwo.children[0].className).toEqual(appConstants.ATTRIBUTE_TITLE)
            expect(attrSectionTwo.children[0].innerHTML).toEqual('Attr2')

            expect(attrSectionTwo.children[1].className).toEqual(appConstants.ATTRIBUTE_VALUE)
            expect(attrSectionTwo.children[1].innerHTML).toEqual('attr2text')
        })
    })

    describe('getAssociationsContents', () => {
        const openedPageId = 'opened_page'
        const siblingPageId = 'associated_sibling_page'
        const friendPageId1 = 'associated_friend_page_1'
        const friendPageId2 = 'associated_friend_page_2'

        const openedPage: Page = {
            id: 'opened_page',
            type: CHARACTERS_PAGE_TYPE,
            name: 'Opened Page',
            sections: [
                {
                    title: ASSOCIATIONS_TITLES_LIST[0],
                    associations: [
                        {
                            associationName: 'Siblings',
                            associationPageIds: [
                                siblingPageId
                            ]
                        },
                        {
                            associationName: 'Friends',
                            associationPageIds: [
                                friendPageId1,
                                friendPageId2
                            ]
                        }
                    ]
                }
            ]
        }
        const associatedSiblingPage: Page = {
            id: siblingPageId,
            type: CHARACTERS_PAGE_TYPE,
            name: 'Sibling Page',
            sections: []
        }
        const associatedFriendPage1: Page = {
            id: friendPageId1,
            type: CHARACTERS_PAGE_TYPE,
            name: 'Friend Page 1',
            sections: []
        }
        const associatedFriendPage2: Page = {
            id: friendPageId2,
            type: CHARACTERS_PAGE_TYPE,
            name: 'Friend Page 2',
            sections: []
        }

        const app = new App()
        app.PAGE_MAP = {
            [openedPageId]: openedPage,
            [siblingPageId]: associatedSiblingPage,
            [friendPageId1]: associatedFriendPage1,
            [friendPageId2]: associatedFriendPage2
        }

        const associationsSectionEl = app.getAssociationsContents(openedPage.sections[0] as AssociationsSection)

        it('creates an associations section', () => {
            expect(associationsSectionEl.className).toEqual(appConstants.ASSOCIATIONS_SECTION)
        })

        it('creates a group for each association', () => {
            const associationGroup = [...associationsSectionEl.children]

            expect(associationGroup).toHaveLength(2)
            expect(associationGroup[0].className).toEqual(appConstants.ASSOCIATION_GROUP)
            expect(associationGroup[1].className).toEqual(appConstants.ASSOCIATION_GROUP)
        })

        it('creates a title for each association group', () => {
            const siblingsGroup = associationsSectionEl.children[0]
            const friendsGroup = associationsSectionEl.children[1]

            expect(siblingsGroup.children[0].className).toEqual(appConstants.ASSOCIATION_TITLE)
            expect(siblingsGroup.children[0].innerHTML).toEqual('Siblings')

            expect(friendsGroup.children[0].className).toEqual(appConstants.ASSOCIATION_TITLE)
            expect(friendsGroup.children[0].innerHTML).toEqual('Friends')
        })

        it('adds each association page in its given association group', () => {
            const siblingsGroup = associationsSectionEl.children[0]
            const friendsGroup = associationsSectionEl.children[1]

            const siblingAssociation = siblingsGroup.children[1] as HTMLElement
            const friendAssociation1 = friendsGroup.children[1] as HTMLElement
            const friendAssociation2 = friendsGroup.children[2] as HTMLElement

            expect(siblingAssociation.className).toEqual(appConstants.ASSOCIATED_PAGE)
            expect(siblingAssociation.innerHTML).toEqual('Sibling Page')
            expect(siblingAssociation.onclick).toBeTruthy()

            expect(friendAssociation1.className).toEqual(appConstants.ASSOCIATED_PAGE)
            expect(friendAssociation1.innerHTML).toEqual('Friend Page 1')
            expect(friendAssociation1.onclick).toBeTruthy()

            expect(friendAssociation2.className).toEqual(appConstants.ASSOCIATED_PAGE)
            expect(friendAssociation2.innerHTML).toEqual('Friend Page 2')
            expect(friendAssociation2.onclick).toBeTruthy()
        })
    })

    describe('addPageSectionToContents', () => {
        const app = new App()
        const genericSectionTitle = 'Generic Page Section'
        jest.spyOn(app, 'zoomInImage').mockImplementation(() => () => null)

        beforeEach(() => {
            jest.clearAllMocks()
        })

        describe('when page section has text body', () => {
            const textBody = 'Text Body Here'
            const pageSection: PageSection = {
                title: genericSectionTitle,
                body: textBody
            }

            it('adds only the body of the section to the passed contents array', () => {
                const contents: Array<HTMLElement> = []
                app.addPageSectionToContents(contents, pageSection)

                expect(contents).toHaveLength(1)
                expect(contents[0].className).toEqual(appConstants.PAGE_SECTION_TEXT_BODY)
                expect(contents[0].innerHTML).toEqual(textBody)
            })

            describe('when page section has an image', () => {
                const imageUrl = 'imageurl'
                const pageSectionWithImage: PageSection = {
                    title: genericSectionTitle,
                    sectionImage: {
                        url: imageUrl
                    },
                    body: textBody
                }

                it('adds the image section to the passed contents array first', () => {
                    const contents: Array<HTMLElement> = []
                    app.addPageSectionToContents(contents, pageSectionWithImage)

                    const imageSection = contents[0]

                    expect(contents).toHaveLength(2)
                    expect(imageSection.children).toHaveLength(1)
                    expect(imageSection.className).toEqual(appConstants.PAGE_SECTION_IMAGE_SECTION)
                })

                it('adds the image as a child of the section', () => {
                    const contents: Array<HTMLElement> = []
                    app.addPageSectionToContents(contents, pageSectionWithImage)

                    const image = contents[0].children[0] as HTMLImageElement

                    expect(image.tagName).toEqual('IMG')
                    expect(image.className).toEqual(appConstants.PAGE_SECTION_IMAGE)
                    expect(image.src.endsWith(imageUrl)).toBeTruthy()
                    expect(image.onclick).toBeTruthy()

                    expect(app.zoomInImage).toHaveBeenCalledTimes(1)
                })

                it('adds the body of the PageSection last', () => {
                    const contents: Array<HTMLElement> = []
                    app.addPageSectionToContents(contents, pageSectionWithImage)

                    expect(contents[1].className).toEqual(appConstants.PAGE_SECTION_TEXT_BODY)
                    expect(contents[1].innerHTML).toEqual(textBody)
                })

                describe('when image has caption', () => {
                    const imageCaption = 'image-caption'
                    const pageSectionWithImageCaption: PageSection = {
                        title: genericSectionTitle,
                        sectionImage: {
                            url: imageUrl,
                            caption: imageCaption
                        },
                        body: textBody
                    }

                    it('adds the image section to the passed contents array first', () => {
                        const contents: Array<HTMLElement> = []
                        app.addPageSectionToContents(contents, pageSectionWithImageCaption)

                        const imageSection = contents[0]

                        expect(contents).toHaveLength(2)
                        expect(imageSection.children).toHaveLength(2)
                        expect(imageSection.className).toEqual(appConstants.PAGE_SECTION_IMAGE_SECTION)
                    })

                    it('adds the image as the first child of the image section element', () => {
                        const contents: Array<HTMLElement> = []
                        app.addPageSectionToContents(contents, pageSectionWithImageCaption)

                        const image = contents[0].children[0] as HTMLImageElement

                        expect(image.tagName).toEqual('IMG')
                        expect(image.className).toEqual(appConstants.PAGE_SECTION_IMAGE)
                        expect(image.src.endsWith(imageUrl)).toBeTruthy()
                        expect(image.onclick).toBeTruthy()

                        expect(app.zoomInImage).toHaveBeenCalledTimes(1)
                    })

                    it('adds the image caption as the second child of the image section element', () => {
                        const contents: Array<HTMLElement> = []
                        app.addPageSectionToContents(contents, pageSectionWithImageCaption)

                        const caption = contents[0].children[1] as HTMLElement

                        expect(caption.className).toEqual(appConstants.PAGE_SECTION_IMAGE_CAPTION)
                        expect(caption.innerHTML).toEqual(imageCaption)
                    })

                    it('adds the body of the PageSection last', () => {
                        const contents: Array<HTMLElement> = []
                        app.addPageSectionToContents(contents, pageSectionWithImage)

                        expect(contents[1].className).toEqual(appConstants.PAGE_SECTION_TEXT_BODY)
                        expect(contents[1].innerHTML).toEqual(textBody)
                    })
                })
            })
        })

        describe('when page section has subsections', () => {
            const subSectionTitle = 'Subsection Here'
            const subSectionBody = 'Subsection Body Text'
            const pageSection: PageSection = {
                title: genericSectionTitle,
                body: [
                    {
                        subSectionTitle: subSectionTitle,
                        subSectionText: subSectionBody
                    }
                ]
            }

            it('adds the subsection title to the passed contents array first', () => {
                const contents: Array<HTMLElement> = []
                app.addPageSectionToContents(contents, pageSection)

                expect(contents).toHaveLength(2)
                expect(contents[0].className).toEqual(appConstants.PAGE_SUBSECTION_TITLE)
                expect(contents[0].innerHTML).toEqual(subSectionTitle)
            })

            it('adds the subsection text to the array last', () => {
                const contents: Array<HTMLElement> = []
                app.addPageSectionToContents(contents, pageSection)

                expect(contents[1].className).toEqual(appConstants.PAGE_SUBSECTION_TEXT_BODY)
                expect(contents[1].innerHTML).toEqual(subSectionBody)
            })

            describe('when subsection has an image', () => {
                const subSectionImageUrl = 'subsectionimageurl'
                const pageSectionWithSubImage: PageSection = {
                    title: genericSectionTitle,
                    body: [
                        {
                            subSectionTitle: subSectionTitle,
                            subSectionText: subSectionBody,
                            subSectionImage: {
                                url: subSectionImageUrl
                            }
                        }
                    ]
                }

                it('adds the subsection title to the passed contents array first', () => {
                    const contents: Array<HTMLElement> = []
                    app.addPageSectionToContents(contents, pageSectionWithSubImage)

                    expect(contents).toHaveLength(2)
                    expect(contents[0].className).toEqual(appConstants.PAGE_SUBSECTION_TITLE)
                    expect(contents[0].innerHTML).toEqual(subSectionTitle)
                })

                it('adds the subsection text to the array last', () => {
                    const contents: Array<HTMLElement> = []
                    app.addPageSectionToContents(contents, pageSectionWithSubImage)

                    expect(contents[1].className).toEqual(appConstants.PAGE_SUBSECTION_TEXT_BODY)
                    expect(contents[1].innerHTML.startsWith(subSectionBody)).toBeTruthy()
                })

                it('adds the subsection image section as a child of the text element', () => {
                    const contents: Array<HTMLElement> = []
                    app.addPageSectionToContents(contents, pageSectionWithSubImage)

                    const imageSection = contents[1].children[0]

                    expect(imageSection.className).toEqual(appConstants.PAGE_SUBSECTION_IMAGE_SECTION)
                    expect(imageSection.children).toHaveLength(1)
                })

                it('adds the subsection image as a child of the image section element', () => {
                    const contents: Array<HTMLElement> = []
                    app.addPageSectionToContents(contents, pageSectionWithSubImage)

                    const image = contents[1].children[0].children[0] as HTMLImageElement

                    expect(image.tagName).toEqual('IMG')
                    expect(image.className).toEqual(appConstants.PAGE_SUBSECTION_IMAGE)
                    expect(image.src.endsWith(subSectionImageUrl)).toBeTruthy()
                    expect(image.onclick).toBeTruthy()

                    expect(app.zoomInImage).toHaveBeenCalledTimes(1)
                })

                describe('when image has caption', () => {
                    const imageCaption = 'subsection-caption'
                    const pageSectionWithSubImageCaption: PageSection = {
                        title: genericSectionTitle,
                        body: [
                            {
                                subSectionTitle: subSectionTitle,
                                subSectionText: subSectionBody,
                                subSectionImage: {
                                    url: subSectionImageUrl,
                                    caption: imageCaption
                                }
                            }
                        ]
                    }

                    it('adds the subsection title to the passed contents array first', () => {
                        const contents: Array<HTMLElement> = []
                        app.addPageSectionToContents(contents, pageSectionWithSubImageCaption)

                        expect(contents).toHaveLength(2)
                        expect(contents[0].className).toEqual(appConstants.PAGE_SUBSECTION_TITLE)
                        expect(contents[0].innerHTML).toEqual(subSectionTitle)
                    })

                    it('adds the subsection text to the array last', () => {
                        const contents: Array<HTMLElement> = []
                        app.addPageSectionToContents(contents, pageSectionWithSubImageCaption)

                        expect(contents[1].className).toEqual(appConstants.PAGE_SUBSECTION_TEXT_BODY)
                        expect(contents[1].innerHTML.startsWith(subSectionBody)).toBeTruthy()
                    })

                    it('adds the subsection image section as a child of the text element', () => {
                        const contents: Array<HTMLElement> = []
                        app.addPageSectionToContents(contents, pageSectionWithSubImageCaption)

                        const imageSection = contents[1].children[0]

                        expect(imageSection.className).toEqual(appConstants.PAGE_SUBSECTION_IMAGE_SECTION)
                        expect(imageSection.children).toHaveLength(2)
                    })

                    it('adds the subsection image as the first child of the image section element', () => {
                        const contents: Array<HTMLElement> = []
                        app.addPageSectionToContents(contents, pageSectionWithSubImageCaption)

                        const image = contents[1].children[0].children[0] as HTMLImageElement

                        expect(image.tagName).toEqual('IMG')
                        expect(image.className).toEqual(appConstants.PAGE_SUBSECTION_IMAGE)
                        expect(image.src.endsWith(subSectionImageUrl)).toBeTruthy()
                        expect(image.onclick).toBeTruthy()

                        expect(app.zoomInImage).toHaveBeenCalledTimes(1)
                    })

                    it('adds the subsection image caption as the second child of the image section element', () => {
                        const contents: Array<HTMLElement> = []
                        app.addPageSectionToContents(contents, pageSectionWithSubImageCaption)

                        const caption = contents[1].children[0].children[1]

                        expect(caption.className).toEqual(appConstants.PAGE_SUBSECTION_IMAGE_CAPTION)
                        expect(caption.innerHTML).toEqual(imageCaption)
                    })
                })
            })
        })
    })

    describe('getPageHTMLContents', () => {
        const emptyPageName = 'Empty Page'
        const emptyPage: Page = {
            name: emptyPageName,
            id: 'empty_page',
            type: CHARACTERS_PAGE_TYPE,
            sections: []
        }

        beforeEach(() => {
            jest.clearAllMocks()
        })

        it("adds the Page's title first", () => {
            const contents = new App().getPageHTMLContents(emptyPage)
            expect(contents).toHaveLength(2)
            expect(contents[0].className).toEqual(appConstants.PAGE_TITLE)
            expect(contents[0].innerHTML).toEqual(emptyPageName)
        })

        it('adds a space block last', () => {
            const contents = new App().getPageHTMLContents(emptyPage)
            expect(contents[1].className).toEqual('space-block')
        })

        it('darkens the space block in dark mode', () => {
            const app = new App()
            app.darkMode = true

            const contents = app.getPageHTMLContents(emptyPage)
            expect(contents[1].className).toEqual('space-block-dark')
        })

        describe('when Page has a pageImage', () => {
            const pageWithImageName = 'Page with Image'
            const pageImageUrl = 'pageimage'

            const pageWithImage: Page = {
                name: pageWithImageName,
                id: 'empty_page',
                type: CHARACTERS_PAGE_TYPE,
                pageImage: {
                    url: pageImageUrl
                },
                sections: []
            }

            it("adds the Page's title first", () => {
                const contents = new App().getPageHTMLContents(pageWithImage)
                expect(contents).toHaveLength(3)
                expect(contents[0].className).toEqual(appConstants.PAGE_TITLE)
                expect(contents[0].innerHTML).toEqual(pageWithImageName)
            })

            it('adds an image section below the title', () => {
                const contents = new App().getPageHTMLContents(pageWithImage)
                expect(contents[1].children).toHaveLength(1)
                expect(contents[1].className).toEqual(appConstants.PAGE_IMAGE_SECTION)
            })

            it('adds an image as a child of the image section', () => {
                const app = new App()
                jest.spyOn(app, 'zoomInImage')

                const contents = app.getPageHTMLContents(pageWithImage)

                const image = contents[1].children[0] as HTMLImageElement
                expect(image.className).toEqual(appConstants.PAGE_IMAGE)
                expect(image.src.endsWith(pageImageUrl)).toBeTruthy()
                expect(image.onclick).toBeTruthy()

                expect(app.zoomInImage).toHaveBeenCalledTimes(1)
            })

            it('adds a space block last', () => {
                const contents = new App().getPageHTMLContents(pageWithImage)
                expect(contents[2].className).toEqual('space-block')
            })

            describe('when pageImage has a caption', () => {
                const imageCaption = 'image-caption'
                const pageWithImageCaption: Page = {
                    name: pageWithImageName,
                    id: 'empty_page',
                    type: CHARACTERS_PAGE_TYPE,
                    pageImage: {
                        url: pageImageUrl,
                        caption: imageCaption
                    },
                    sections: []
                }

                it("adds the Page's title first", () => {
                    const contents = new App().getPageHTMLContents(pageWithImageCaption)
                    expect(contents).toHaveLength(3)
                    expect(contents[0].className).toEqual(appConstants.PAGE_TITLE)
                    expect(contents[0].innerHTML).toEqual(pageWithImageName)
                })

                it('adds an image section below the title', () => {
                    const contents = new App().getPageHTMLContents(pageWithImageCaption)
                    expect(contents[1].children).toHaveLength(2)
                    expect(contents[1].className).toEqual(appConstants.PAGE_IMAGE_SECTION)
                })

                it('adds an image as the first child of the image section', () => {
                    const app = new App()
                    jest.spyOn(app, 'zoomInImage')

                    const contents = app.getPageHTMLContents(pageWithImageCaption)

                    const image = contents[1].children[0] as HTMLImageElement
                    expect(image.className).toEqual(appConstants.PAGE_IMAGE)
                    expect(image.src.endsWith(pageImageUrl)).toBeTruthy()
                    expect(image.onclick).toBeTruthy()

                    expect(app.zoomInImage).toHaveBeenCalledTimes(1)
                })

                it('adds an caption as the last child of the image section', () => {
                    const contents = new App().getPageHTMLContents(pageWithImageCaption)
                    const caption = contents[1].children[1]
                    expect(caption.className).toEqual(appConstants.PAGE_IMAGE_CAPTION)
                    expect(caption.innerHTML).toEqual(imageCaption)
                })

                it('adds a space block last', () => {
                    const contents = new App().getPageHTMLContents(pageWithImageCaption)
                    expect(contents[2].className).toEqual('space-block')
                })
            })
        })

        describe('when Page has sections', () => {
            describe('when sections are a PageSection', () => {
                const pageWithPageSectionName = 'Page with PageSection'
                const sectionTitle = 'Section'
                const sectionBody = 'Stub Body'

                const sectionPage: Page = {
                    name: pageWithPageSectionName,
                    id: 'page_w_page_section',
                    type: CHARACTERS_PAGE_TYPE,
                    sections: [
                        {
                            title: sectionTitle,
                            body: sectionBody
                        }
                    ]
                }

                it("adds the Page's title first", () => {
                    const contents = new App().getPageHTMLContents(sectionPage)
                    expect(contents).toHaveLength(4)
                    expect(contents[0].className).toEqual(appConstants.PAGE_TITLE)
                    expect(contents[0].innerHTML).toEqual(pageWithPageSectionName)
                })

                it("adds the PageSection's title second", () => {
                    const contents = new App().getPageHTMLContents(sectionPage)
                    expect(contents[1].className).toEqual(appConstants.PAGE_SECTION_TITLE)
                    expect(contents[1].innerHTML).toEqual(sectionTitle)
                })

                it("adds the PageSection's contents third", () => {
                    const app = new App()
                    jest.spyOn(app, 'addPageSectionToContents')
                    const contents = app.getPageHTMLContents(sectionPage)

                    expect(contents[2].className).toEqual(appConstants.PAGE_SECTION_TEXT_BODY)
                    expect(contents[2].innerHTML).toEqual(sectionBody)
                    expect(app.addPageSectionToContents).toHaveBeenCalledTimes(1)
                })

                it('adds a space block last', () => {
                    const contents = new App().getPageHTMLContents(sectionPage)
                    expect(contents[3].className).toEqual('space-block')
                })
            })

            describe('when sections are a GallerySection', () => {
                const pageWithGallerySectionName = 'Page with GallerySection'

                const gallerySection: GallerySection = {
                    title: GALLERY_TITLES_LIST[0],
                    gallery: [
                        {
                            url: 'imageurl',
                            caption: 'imagecaption'
                        }
                    ]
                }

                const gallerySectionPage: Page = {
                    name: pageWithGallerySectionName,
                    id: 'page_w_page_section',
                    type: CHARACTERS_PAGE_TYPE,
                    sections: [gallerySection]
                }

                it("adds the Page's title first", () => {
                    const contents = new App().getPageHTMLContents(gallerySectionPage)
                    expect(contents).toHaveLength(4)
                    expect(contents[0].className).toEqual(appConstants.PAGE_TITLE)
                    expect(contents[0].innerHTML).toEqual(pageWithGallerySectionName)
                })

                it("adds the GallerySection's title second", () => {
                    const contents = new App().getPageHTMLContents(gallerySectionPage)
                    expect(contents[1].className).toEqual(appConstants.PAGE_SECTION_TITLE)
                    expect(contents[1].innerHTML).toEqual(GALLERY_TITLES_LIST[0])
                })

                it("adds the GallerySection's contents third", () => {
                    const app = new App()
                    jest.spyOn(app, 'getGalleryContents')
                    const contents = app.getPageHTMLContents(gallerySectionPage)

                    expect(contents[2].className).toEqual(appConstants.GALLERY_IMAGE_LIST)
                    expect(app.getGalleryContents).toHaveBeenCalledTimes(1)
                })

                it('adds a space block last', () => {
                    const contents = new App().getPageHTMLContents(gallerySectionPage)
                    expect(contents[3].className).toEqual('space-block')
                })
            })

            describe('when sections are an AttributesSection', () => {
                const pageWithAttributesSectionName = 'Page with AttributesSection'

                const attributesSection: AttributesSection = {
                    title: ATTRIBUTES_TITLES_LIST[0],
                    attributes: [
                        {
                            attributeName: 'Full Name',
                            attributeText: 'Jon Doe'
                        }
                    ]
                }

                const attributesSectionPage: Page = {
                    name: pageWithAttributesSectionName,
                    id: 'page_w_page_section',
                    type: CHARACTERS_PAGE_TYPE,
                    sections: [attributesSection]
                }

                it("adds the Page's title first", () => {
                    const contents = new App().getPageHTMLContents(attributesSectionPage)
                    expect(contents).toHaveLength(4)
                    expect(contents[0].className).toEqual(appConstants.PAGE_TITLE)
                    expect(contents[0].innerHTML).toEqual(pageWithAttributesSectionName)
                })

                it("adds the AttributesSection's title second", () => {
                    const contents = new App().getPageHTMLContents(attributesSectionPage)
                    expect(contents[1].className).toEqual(appConstants.PAGE_SECTION_TITLE)
                    expect(contents[1].innerHTML).toEqual(ATTRIBUTES_TITLES_LIST[0])
                })

                it("adds the AttributesSection's contents third", () => {
                    const app = new App()
                    jest.spyOn(app, 'getAttributesContents')
                    const contents = app.getPageHTMLContents(attributesSectionPage)

                    expect(contents[2].className).toEqual(appConstants.ATTRIBUTES_LIST)
                    expect(app.getAttributesContents).toHaveBeenCalledTimes(1)
                })

                it('adds a space block last', () => {
                    const contents = new App().getPageHTMLContents(attributesSectionPage)
                    expect(contents[3].className).toEqual('space-block')
                })
            })

            describe('when sections are an AssociationsSection', () => {
                const pageWithAssociationsSectionName = 'Page with AssociationsSection'

                const pageOneId = 'page_one'
                const pageTwoId = 'page_two'

                const pageOne: Page = {
                    name: 'Page One',
                    id: pageOneId,
                    type: CHARACTERS_PAGE_TYPE,
                    sections: []
                }

                const pageTwo: Page = {
                    name: 'Page Two',
                    id: pageTwoId,
                    type: CHARACTERS_PAGE_TYPE,
                    sections: []
                }

                const associationsSection: AssociationsSection = {
                    title: ASSOCIATIONS_TITLES_LIST[0],
                    associations: [
                        {
                            associationName: 'Association',
                            associationPageIds: [pageOneId, pageTwoId]
                        }
                    ]
                }

                const associationsSectionPage: Page = {
                    name: pageWithAssociationsSectionName,
                    id: 'page_w_page_section',
                    type: CHARACTERS_PAGE_TYPE,
                    sections: [associationsSection]
                }

                const app = new App()
                app.PAGE_MAP = {
                    [pageOneId]: pageOne,
                    [pageTwoId]: pageTwo
                }

                it("adds the Page's title first", () => {
                    const contents = app.getPageHTMLContents(associationsSectionPage)
                    expect(contents).toHaveLength(4)
                    expect(contents[0].className).toEqual(appConstants.PAGE_TITLE)
                    expect(contents[0].innerHTML).toEqual(pageWithAssociationsSectionName)
                })

                it("adds the AssociationsSection's title second", () => {
                    const contents = app.getPageHTMLContents(associationsSectionPage)
                    expect(contents[1].className).toEqual(appConstants.PAGE_SECTION_TITLE)
                    expect(contents[1].innerHTML).toEqual(ASSOCIATIONS_TITLES_LIST[0])
                })

                it("adds the AssociationsSection's contents third", () => {
                    jest.spyOn(app, 'getAssociationsContents')
                    const contents = app.getPageHTMLContents(associationsSectionPage)

                    expect(contents[2].className).toEqual(appConstants.ASSOCIATIONS_SECTION)
                    expect(app.getAssociationsContents).toHaveBeenCalledTimes(1)
                })

                it('adds a space block last', () => {
                    const contents = app.getPageHTMLContents(associationsSectionPage)
                    expect(contents[3].className).toEqual('space-block')
                })
            })
        })

        describe('when Page has tags', () => {
            describe('when it is a "Characters" page', () => {
                const characterPageWithTagsName = 'Character Page with Tags'
                const characterPageWithTags: Page = {
                    name: characterPageWithTagsName,
                    id: 'character_page',
                    type: CHARACTERS_PAGE_TYPE,
                    sections: [],
                    tags: new Set(['tagOne', 'tagTwo'])
                }

                it("adds the Page's title first", () => {
                    const contents = new App().getPageHTMLContents(characterPageWithTags)
                    expect(contents).toHaveLength(3)
                    expect(contents[0].className).toEqual(appConstants.PAGE_TITLE)
                    expect(contents[0].innerHTML).toEqual(characterPageWithTagsName)
                })

                it("adds the Page's tags list second", () => {
                    const contents = new App().getPageHTMLContents(characterPageWithTags)
                    expect(contents[1].className).toEqual(appConstants.PAGE_TAGS_LIST)
                    expect(contents[1].children).toHaveLength(2)
                })

                it("adds the Page's tags as children of the tags list second", () => {
                    const contents = new App().getPageHTMLContents(characterPageWithTags)
                    const tagOneEl  = contents[1].children[0] as HTMLElement
                    const tagTwoEl = contents[1].children[1] as HTMLElement

                    expect(tagOneEl.className).toEqual(appConstants.PAGE_TAG)
                    expect(tagOneEl.innerHTML).toEqual('tagOne')
                    expect(tagOneEl.onclick).toBeTruthy()

                    expect(tagTwoEl.className).toEqual(appConstants.PAGE_TAG)
                    expect(tagTwoEl.innerHTML).toEqual('tagTwo')
                    expect(tagTwoEl.onclick).toBeTruthy()
                })

                it("uses the 'pickTag' returned function using the App's SELECTED_CHARACTER_TAGS", () => {
                    const app = new App()
                    app.SELECTED_CHARACTER_TAGS = new Set(['tagThree'])

                    jest.spyOn(app, 'pickTag')
                    app.getPageHTMLContents(characterPageWithTags)

                    expect(app.pickTag).toHaveBeenCalledTimes(2)
                    expect(app.pickTag).toHaveBeenCalledWith(app.SELECTED_CHARACTER_TAGS)
                    expect(app.pickTag).not.toHaveBeenCalledWith(app.SELECTED_NOTE_TAGS)
                })

                it('adds a space block last', () => {
                    const contents = new App().getPageHTMLContents(characterPageWithTags)
                    expect(contents[2].className).toEqual('space-block')
                })
            })

            describe('when it is a "Notes" page', () => {
                const notePageWithTagsName = 'Note Page with Tags'
                const notePageWithTags: Page = {
                    name: notePageWithTagsName,
                    id: 'note_page',
                    type: NOTES_PAGE_TYPE,
                    sections: [],
                    tags: new Set(['tagOne', 'tagTwo'])
                }

                it("adds the Page's title first", () => {
                    const contents = new App().getPageHTMLContents(notePageWithTags)
                    expect(contents).toHaveLength(3)
                    expect(contents[0].className).toEqual(appConstants.PAGE_TITLE)
                    expect(contents[0].innerHTML).toEqual(notePageWithTagsName)
                })

                it("adds the Page's tags list second", () => {
                    const contents = new App().getPageHTMLContents(notePageWithTags)
                    expect(contents[1].className).toEqual(appConstants.PAGE_TAGS_LIST)
                    expect(contents[1].children).toHaveLength(2)
                })

                it("adds the Page's tags as children of the tags list second", () => {
                    const contents = new App().getPageHTMLContents(notePageWithTags)
                    const tagOneEl  = contents[1].children[0] as HTMLElement
                    const tagTwoEl = contents[1].children[1] as HTMLElement

                    expect(tagOneEl.className).toEqual(appConstants.PAGE_TAG)
                    expect(tagOneEl.innerHTML).toEqual('tagOne')
                    expect(tagOneEl.onclick).toBeTruthy()

                    expect(tagTwoEl.className).toEqual(appConstants.PAGE_TAG)
                    expect(tagTwoEl.innerHTML).toEqual('tagTwo')
                    expect(tagTwoEl.onclick).toBeTruthy()
                })

                it("uses the 'pickTag' returned function using the App's SELECTED_NOTE_TAGS", () => {
                    const app = new App()
                    app.SELECTED_NOTE_TAGS = new Set(['tagThree'])

                    jest.spyOn(app, 'pickTag')
                    app.getPageHTMLContents(notePageWithTags)

                    expect(app.pickTag).toHaveBeenCalledTimes(2)
                    expect(app.pickTag).toHaveBeenCalledWith(app.SELECTED_NOTE_TAGS)
                    expect(app.pickTag).not.toHaveBeenCalledWith(app.SELECTED_CHARACTER_TAGS)
                })

                it('adds a space block last', () => {
                    const contents = new App().getPageHTMLContents(notePageWithTags)
                    expect(contents[2].className).toEqual('space-block')
                })
            })
        })

        describe('when the Page has all parts', () => {
            const pageTitle = 'Full Page'

            const fullImageLink = 'fullimagelink'
            const fullImageComment = 'image caption'

            const sectionOneName = 'Section One'
            const sectionOneBody = 'Section one body'

            const sectionTwoName = 'Section Two'
            const sectionTwoBody = 'Section two body'

            const fullPage: Page = {
                name: pageTitle,
                id: 'full_page',
                type: CHARACTERS_PAGE_TYPE,
                pageImage: {
                    url: fullImageLink,
                    caption: fullImageComment
                },
                sections: [
                    {
                        title: sectionOneName,
                        body: sectionOneBody
                    },
                    {
                        title: sectionTwoName,
                        body: sectionTwoBody
                    }
                ],
                tags: new Set(['tagOne'])
            }

            it("adds the Page's title first", () => {
                const contents = new App().getPageHTMLContents(fullPage)
                expect(contents).toHaveLength(8)
                expect(contents[0].className).toEqual(appConstants.PAGE_TITLE)
                expect(contents[0].innerHTML).toEqual(pageTitle)
            })

            it('adds an image section below the title', () => {
                const contents = new App().getPageHTMLContents(fullPage)
                expect(contents[1].children).toHaveLength(2)
                expect(contents[1].className).toEqual(appConstants.PAGE_IMAGE_SECTION)
            })

            it('adds an image as the first child of the image section', () => {
                const app = new App()
                jest.spyOn(app, 'zoomInImage')

                const contents = app.getPageHTMLContents(fullPage)

                const image = contents[1].children[0] as HTMLImageElement
                expect(image.className).toEqual(appConstants.PAGE_IMAGE)
                expect(image.src.endsWith(fullImageLink)).toBeTruthy()
                expect(image.onclick).toBeTruthy()

                expect(app.zoomInImage).toHaveBeenCalledTimes(1)
            })

            it('adds an caption as the last child of the image section', () => {
                const contents = new App().getPageHTMLContents(fullPage)
                const caption = contents[1].children[1]
                expect(caption.className).toEqual(appConstants.PAGE_IMAGE_CAPTION)
                expect(caption.innerHTML).toEqual(fullImageComment)
            })

            it("adds the first sections's title below the image section", () => {
                const contents = new App().getPageHTMLContents(fullPage)
                expect(contents[2].className).toEqual(appConstants.PAGE_SECTION_TITLE)
                expect(contents[2].innerHTML).toEqual(sectionOneName)
            })

            it("adds the the first sections's contents below its title", () => {
                const app = new App()
                jest.spyOn(app, 'addPageSectionToContents')
                const contents = app.getPageHTMLContents(fullPage)

                expect(contents[3].className).toEqual(appConstants.PAGE_SECTION_TEXT_BODY)
                expect(contents[3].innerHTML).toEqual(sectionOneBody)
                expect(app.addPageSectionToContents).toHaveBeenCalledTimes(2)
            })

            it("adds the second sections's title below the first section's contents", () => {
                const contents = new App().getPageHTMLContents(fullPage)
                expect(contents[4].className).toEqual(appConstants.PAGE_SECTION_TITLE)
                expect(contents[4].innerHTML).toEqual(sectionTwoName)
            })

            it("adds the the second sections's contents below its title", () => {
                const app = new App()
                jest.spyOn(app, 'addPageSectionToContents')
                const contents = app.getPageHTMLContents(fullPage)

                expect(contents[5].className).toEqual(appConstants.PAGE_SECTION_TEXT_BODY)
                expect(contents[5].innerHTML).toEqual(sectionTwoBody)
                expect(app.addPageSectionToContents).toHaveBeenCalledTimes(2)
            })

            it("adds the Page's tags before the last section's contents", () => {
                const contents = new App().getPageHTMLContents(fullPage)
                expect(contents[6].className).toEqual(appConstants.PAGE_TAGS_LIST)
                expect(contents[6].children).toHaveLength(1)
            })

            it('adds a space block last', () => {
                const contents = new App().getPageHTMLContents(fullPage)
                expect(contents[7].className).toEqual('space-block')
            })
        })
    })

    describe('preloadGalleryImages', () => {
        describe('when GallerySection has no images', () => {
            const gallerySection: GallerySection = {
                title: GALLERY_TITLES_LIST[0],
                gallery: []
            }

            it('does not preload any images', () => {
                const app = new App()
                jest.spyOn(app, 'createImg')
                app.preloadGalleryImages(gallerySection)
                expect(app.createImg).not.toHaveBeenCalled()
            })
        })

        describe('when GallerySection has images', () => {
            const gallerySection: GallerySection = {
                title: GALLERY_TITLES_LIST[0],
                gallery: [
                    {
                        url: 'testimage1'
                    },
                    {
                        url: 'testimage2'
                    },
                ]
            }

            it("preloads the images' src", () => {
                const app = new App()
                jest.spyOn(app, 'createImg')
                app.preloadGalleryImages(gallerySection)
                expect(app.createImg).toHaveBeenCalledTimes(2)
            })
        })
    })

    describe('preloadSubSectionImage', () => {
        describe('when SubSection has no images', () => {
            const subSection: SubSection = {
                subSectionTitle: 'Subsection',
                subSectionText: 'Subsection text'
            }

            it('does not preload any images', () => {
                const app = new App()
                jest.spyOn(app, 'createImg')
                app.preloadSubSectionImage(subSection)
                expect(app.createImg).not.toHaveBeenCalled()
            })
        })

        describe('when SubSection has an image', () => {
            const subSection: SubSection = {
                subSectionTitle: 'Subsection',
                subSectionText: 'Subsection text',
                subSectionImage: {
                    url: 'subsection'
                }
            }

            it("preloads the image's src", () => {
                const app = new App()
                jest.spyOn(app, 'createImg')
                app.preloadSubSectionImage(subSection)
                expect(app.createImg).toHaveBeenCalledTimes(1)
            })
        })
    })

    describe('preloadPageSectionImage', () => {
        describe('when PageSection has no images', () => {
            const pageSection: PageSection = {
                title: 'Page Section',
                body: 'Page section body'
            }

            it('does not load any images', () => {
                const app = new App()
                jest.spyOn(app, 'createImg')
                app.preloadPageSectionImage(pageSection)
                expect(app.createImg).not.toHaveBeenCalled()
            })
        })

        describe('when PageSection has an image', () => {
            const pageSection: PageSection = {
                title: 'Page Section',
                body: 'Page section body',
                sectionImage: {
                    url: 'pagesectionimage'
                }
            }

            it("preloads the image's src", () => {
                const app = new App()
                jest.spyOn(app, 'createImg')
                app.preloadPageSectionImage(pageSection)
                expect(app.createImg).toHaveBeenCalledTimes(1)
            })
        })

        describe('when PageSection has a SubSection with an image', () => {
            const pageSection: PageSection = {
                title: 'Page Section',
                body: [
                    {
                        subSectionTitle: 'Subsection Title',
                        subSectionText: 'Subsection Body',
                        subSectionImage: {
                            url: 'subsectionimage'
                        }
                    }
                ]
            }

            it("preloads the image's src", () => {
                const app = new App()
                jest.spyOn(app, 'createImg')
                app.preloadPageSectionImage(pageSection)
                expect(app.createImg).toHaveBeenCalledTimes(1)
            })
        })

        describe('when PageSection and SubSection have images', () => {
            const pageSection: PageSection = {
                title: 'Page Section',
                body: [
                    {
                        subSectionTitle: 'Subsection Title',
                        subSectionText: 'Subsection Body',
                        subSectionImage: {
                            url: 'subsectionimage'
                        }
                    }
                ],
                sectionImage: {
                    url: 'pagesectionimage'
                }
            }

            it("preloads the image's src", () => {
                const app = new App()
                jest.spyOn(app, 'createImg')
                app.preloadPageSectionImage(pageSection)
                expect(app.createImg).toHaveBeenCalledTimes(2)
            })
        })
    })

    describe('preloadPageImage', () => {
        describe('when Page has no image', () => {
            const page: Page = {
                name: 'Page One',
                id: 'page_one',
                type: CHARACTERS_PAGE_TYPE,
                sections: []
            }

            it('does not load any images', () => {
                const app = new App()
                jest.spyOn(app, 'createImg')
                app.preloadPageImage(page)
                expect(app.createImg).not.toHaveBeenCalled()
            })
        })

        describe('when Page has an image', () => {
            const page: Page = {
                name: 'Page One',
                id: 'page_one',
                type: CHARACTERS_PAGE_TYPE,
                sections: [],
                pageImage: {
                    url: 'pageimage'
                }
            }

            it("preloads the image's src", () => {
                const app = new App()
                jest.spyOn(app, 'createImg')
                app.preloadPageImage(page)
                expect(app.createImg).toHaveBeenCalledTimes(1)
            })
        })

        describe('when Page has sections', () => {
            describe('when section is AttributesSection', () => {
                const page: Page = {
                    name: 'Page One',
                    id: 'page_one',
                    type: CHARACTERS_PAGE_TYPE,
                    sections: [
                        {
                            title: ATTRIBUTES_TITLES_LIST[0],
                            attributes: [
                                {
                                    attributeName: 'Page Name',
                                    attributeText: 'attribute text'
                                }
                            ]
                        }
                    ]
                }

                it('does not load any images', () => {
                    const app = new App()
                    jest.spyOn(app, 'createImg')
                    app.preloadPageImage(page)
                    expect(app.createImg).not.toHaveBeenCalled()
                })
            })

            describe('when section is AssociationsSection', () => {
                const page: Page = {
                    name: 'Page One',
                    id: 'page_one',
                    type: CHARACTERS_PAGE_TYPE,
                    sections: [
                        {
                            title: ASSOCIATIONS_TITLES_LIST[0],
                            associations: [
                                {
                                    associationName: 'Association',
                                    associationPageIds: ['page_two']
                                }
                            ]
                        }
                    ]
                }

                it('does not load any images', () => {
                    const app = new App()
                    jest.spyOn(app, 'createImg')
                    app.preloadPageImage(page)
                    expect(app.createImg).not.toHaveBeenCalled()
                })
            })

            describe('when section is GallerySection', () => {
                const page: Page = {
                    name: 'Page One',
                    id: 'page_one',
                    type: CHARACTERS_PAGE_TYPE,
                    sections: [
                        {
                            title: GALLERY_TITLES_LIST[0],
                            gallery: [
                                {
                                    url: 'galleryimg1',
                                },
                                {
                                    url: 'galleryimg2',
                                }
                            ]
                        }
                    ]
                }

                it('calls preloadGalleryImages', () => {
                    const app = new App()
                    jest.spyOn(app, 'preloadGalleryImages')
                    app.preloadPageImage(page)
                    expect(app.preloadGalleryImages).toHaveBeenCalledTimes(1)
                })
            })

            describe('when section is PageSection', () => {
                const page: Page = {
                    name: 'Page One',
                    id: 'page_one',
                    type: CHARACTERS_PAGE_TYPE,
                    sections: [
                        {
                            title: 'Generic Section',
                            body: 'Generic body'
                        }
                    ]
                }

                it('calls preloadPageSectionImage', () => {
                    const app = new App()
                    jest.spyOn(app, 'preloadPageSectionImage')
                    app.preloadPageImage(page)
                    expect(app.preloadPageSectionImage).toHaveBeenCalledTimes(1)
                })
            })
        })
    })

    describe('preloadImages', () => {
        const app = new App()
        jest.spyOn(app, 'preloadPageImage')

        it("loads the Home, Character, and Note Pages' Images", () => {
            app.preloadImages()
            // 5 Pages in mock WikiData
            expect(app.preloadPageImage).toHaveBeenCalledTimes(5)
        })
    })

    describe('displayPage', () => {
        window.scrollTo = jest.fn()

        const contents: Array<HTMLElement> = []
        const element = document.createElement('div')
        element.id = 'testelement'
        contents.push(element)

        it('adds the passed contents to the pageContent element', () => {
            const app = new App()
            app.displayPage(contents)

            expect(app.pageContent.children).toHaveLength(1)
            expect(app.pageContent.children[0]).toEqual(element)
        })

        it('scrolls the window to the top', () => {
            const app = new App()
            app.displayPage(contents)

            expect(window.scrollTo).toHaveBeenCalledWith(0, 0)
        })
    })

    describe('openPage', () => {
        const page: Page = {
            id: 'page',
            name: 'Page',
            type: CHARACTERS_PAGE_TYPE,
            sections: []
        }

        it('returns a function', () => {
            expect(new App().openPage(page)).toBeInstanceOf(Function)
        })

        describe('when returned function is called', () => {
            beforeEach(() => {
                document.body.outerHTML = documentBody
            })

            describe("when the target Page's title is already displayed", () => {
                let pageTitle: HTMLElement

                beforeEach(() => {
                    pageTitle = document.createElement('div')
                    pageTitle.className = appConstants.PAGE_TITLE
                    pageTitle.innerHTML = 'Page'

                    const pageContent = document.getElementById(appConstants.PAGE_CONTENT_CLASS)
                    pageContent?.appendChild(pageTitle)
                })

                it('does not display the target Page', () => {
                    const app = new App()

                    jest.spyOn(app, 'getPageHTMLContents')
                    jest.spyOn(app, 'displayPage')
                    jest.spyOn(app, 'toggleSidebar')

                    app.openPage(page)()

                    expect(app.getPageHTMLContents).not.toHaveBeenCalled()
                    expect(app.displayPage).not.toHaveBeenCalled()
                    expect(app.toggleSidebar).not.toHaveBeenCalled()
                })

                describe('when the sideBar is open', () => {
                    it('closes the sideBar', () => {
                        const app = new App()
                        app.sidebarOpen = true
                        jest.spyOn(app, 'toggleSidebar')

                        app.openPage(page)()

                        expect(app.toggleSidebar).toHaveBeenCalledWith(false)
                    })
                })
            })

            describe('when there is no page-title set', () => {
                it('displays the target Page', () => {
                    const app = new App()

                    jest.spyOn(app, 'displayPage')
                    jest.spyOn(app, 'getPageHTMLContents')
                    jest.spyOn(app, 'toggleSidebar')

                    app.openPage(page)()

                    expect(app.getPageHTMLContents).toHaveBeenCalledWith(page)
                    expect(app.displayPage).toHaveBeenCalled()
                    expect(app.toggleSidebar).not.toHaveBeenCalled()
                })

                describe('when the sideBar is open', () => {
                    it('closes the sideBar', () => {
                        const app = new App()
                        app.sidebarOpen = true
                        jest.spyOn(app, 'toggleSidebar')

                        app.openPage(page)()

                        expect(app.toggleSidebar).toHaveBeenCalledWith(false)
                    })
                })
            })

            describe("when the current title is different from the target Page's", () => {
                let pageTitle: HTMLElement

                beforeEach(() => {
                    pageTitle = document.createElement('div')
                    pageTitle.className = appConstants.PAGE_TITLE
                    pageTitle.innerHTML = 'DifferentPage'

                    const pageContent = document.getElementById(appConstants.PAGE_CONTENT_CLASS)
                    pageContent?.appendChild(pageTitle)
                })

                it('displays the target Page', () => {
                    const app = new App()

                    jest.spyOn(app, 'displayPage')
                    jest.spyOn(app, 'getPageHTMLContents')
                    jest.spyOn(app, 'toggleSidebar')

                    app.openPage(page)()

                    expect(app.getPageHTMLContents).toHaveBeenCalledWith(page)
                    expect(app.displayPage).toHaveBeenCalled()
                    expect(app.toggleSidebar).not.toHaveBeenCalled()
                })

                describe('when the sideBar is open', () => {
                    it('closes the sideBar', () => {
                        const app = new App()
                        app.sidebarOpen = true
                        jest.spyOn(app, 'toggleSidebar')

                        app.openPage(page)()

                        expect(app.toggleSidebar).toHaveBeenCalledWith(false)
                    })
                })
            })
        })
    })

    describe('handleResize', () => {
        describe("when windows width is less than the App's mobile width limit", () => {
            beforeEach(() => {
                window.innerWidth = new App().MOBILE_WIDTH_LIMIT - 1
            })

            describe('when already using mobile', () => {
                const app = new App()
                app.usingMobile = true
                jest.spyOn(app, 'changeToMobile')

                it('does not change the App to mobile', () => {
                    app.handleResize()
                    expect(app.changeToMobile).not.toHaveBeenCalled()
                })
            })

            describe('when not using mobile', () => {
                const app = new App()
                app.usingMobile = false
                jest.spyOn(app, 'changeToMobile')

                it('changes the App to mobile', () => {
                    app.handleResize()
                    expect(app.changeToMobile).toHaveBeenCalledWith(true)
                })
            })
        })

        describe("when windows width is greater than the App's mobile width limit", () => {
            beforeEach(() => {
                window.innerWidth = new App().MOBILE_WIDTH_LIMIT + 1
            })

            describe('when using mobile', () => {
                const app = new App()
                app.usingMobile = true
                jest.spyOn(app, 'changeToMobile')

                it('takes the App off mobile', () => {
                    app.handleResize()
                    expect(app.changeToMobile).toHaveBeenCalledWith(false)
                })
            })

            describe('when not using mobile', () => {
                const app = new App()
                app.usingMobile = false
                jest.spyOn(app, 'changeToMobile')

                it('does not attempt to take the App off mobile', () => {
                    app.handleResize()
                    expect(app.changeToMobile).not.toHaveBeenCalled()
                })
            })
        })

        describe("when windows width is equal to the App's mobile width limit", () => {
            beforeEach(() => {
                window.innerWidth = new App().MOBILE_WIDTH_LIMIT
            })

            describe('when using mobile', () => {
                const app = new App()
                app.usingMobile = true
                jest.spyOn(app, 'changeToMobile')

                it('takes the App off mobile', () => {
                    app.handleResize()
                    expect(app.changeToMobile).toHaveBeenCalledWith(false)
                })
            })

            describe('when not using mobile', () => {
                const app = new App()
                app.usingMobile = false
                jest.spyOn(app, 'changeToMobile')

                it('does not attempt to take the App off mobile', () => {
                    app.handleResize()
                    expect(app.changeToMobile).not.toHaveBeenCalled()
                })
            })
        })
    })

    describe('createHomeSelectors', () => {
        it("populates the App's homePageSelector", () => {
            const app = new App()
            jest.spyOn(app, 'openPage')
            app.createHomeSelectors()

            const homePageTitle = app.homePageSelector[0]
            const homePageOption = app.homePageSelector[1] as HTMLElement

            expect(app.homePageSelector).toHaveLength(2)

            expect(homePageTitle.innerHTML).toEqual(WikiData.homePage.name)
            expect(homePageTitle.className).toEqual(appConstants.SECTION_TITLE)

            expect(homePageOption.innerHTML).toEqual(HOME_PAGE_TYPE)
            expect(homePageOption.className).toEqual(appConstants.PAGE_OPTION)
            expect(homePageOption.onclick).toBeTruthy()

            expect(app.openPage).toHaveBeenCalledWith(WikiData.homePage)
        })

        it('adds Page to PAGE_MAP', () => {
            const app = new App()
            app.createHomeSelectors()
            expect(Object.keys(app.PAGE_MAP)).toHaveLength(1)
            expect(app.PAGE_MAP[WikiData.homePage.id]).toEqual(WikiData.homePage)
        })
    })

    describe('createCharacterSelectors', () => {
        it("populates the App's charactersSelector", () => {
            const app = new App()
            jest.spyOn(app, 'searchForTags')
            app.createCharacterSelectors()

            expect(app.charactersSelector).toHaveLength(5)

            // First element is section title
            const charactersTitle = app.charactersSelector[0]
            expect(charactersTitle.innerHTML).toEqual(CHARACTERS_PAGE_TYPE)
            expect(charactersTitle.className).toEqual(appConstants.SECTION_TITLE)

            // Second element is tag input
            const tagInput = app.charactersSelector[1] as HTMLInputElement
            expect(tagInput.className).toEqual(appConstants.SECTION_TAG_SEARCH)
            expect(tagInput.placeholder).toEqual(appConstants.TAG_SEARCH_PLACEHOLDER)
            expect(tagInput.oninput).toBeTruthy()
            expect(app.searchForTags).toHaveBeenCalledWith(CHARACTERS_PAGE_TYPE)

            // Tag Areas
            const selectedTagArea = app.charactersSelector[2]
            expect(selectedTagArea.className).toEqual(appConstants.SELECTED_TAG_RESULTS)

            const searchResultTagArea = app.charactersSelector[3]
            expect(searchResultTagArea.className).toEqual(appConstants.TAG_RESULTS)

            // Character Page options
            const characterOptions = app.charactersSelector[4]
            expect(characterOptions.className).toEqual(appConstants.PAGE_OPTION_CONTAINER)

            // 2 Characters in mock data
            expect(characterOptions.children).toHaveLength(3)

            // Last element is space block
            expect(characterOptions.children[characterOptions.children.length - 1].className).toEqual(appConstants.PAGE_OPTION_SPACE_BLOCK)
        })

        it('adds the Characters Pages as options', () => {
            const app = new App()
            jest.spyOn(app, 'openPage')
            app.createCharacterSelectors()

            const characterOptions = app.charactersSelector[4]
            const firstCharacterOption = characterOptions.children[0] as HTMLElement
            const secondCharacterOption = characterOptions.children[1] as HTMLElement

            expect(app.openPage).toHaveBeenCalledTimes(2)

            expect(firstCharacterOption.className).toEqual(appConstants.PAGE_OPTION)
            expect(firstCharacterOption.innerHTML).toEqual(WikiData.characters[0].name)
            expect(firstCharacterOption.onclick).toBeTruthy()
            expect(app.openPage).toHaveBeenCalledWith(WikiData.characters[0])

            expect(secondCharacterOption.className).toEqual(appConstants.PAGE_OPTION)
            expect(secondCharacterOption.innerHTML).toEqual(WikiData.characters[1].name)
            expect(secondCharacterOption.onclick).toBeTruthy()
            expect(app.openPage).toHaveBeenCalledWith(WikiData.characters[1])
        })

        it('populates DEFAULT_CHARACTERS_OPTIONS', () => {
            const app = new App()
            app.createCharacterSelectors()

            expect(app.DEFAULT_CHARACTERS_OPTIONS).toHaveLength(2)
        })

        it("adds characters' tags to ALL_CHARACTER_TAGS", () => {
            const app = new App()
            jest.spyOn(app, 'addPageTags')
            app.createCharacterSelectors()

            expect(app.ALL_CHARACTER_TAGS.size).toEqual(3)
            expect(app.ALL_CHARACTER_TAGS).toContain('tagOne')
            expect(app.ALL_CHARACTER_TAGS).toContain('tagTwo')
            expect(app.ALL_CHARACTER_TAGS).toContain('oneTag')

            expect(app.addPageTags).toHaveBeenCalledWith(WikiData.characters[0])
            expect(app.addPageTags).toHaveBeenCalledWith(WikiData.characters[1])
        })

        it('adds Character Pages to PAGE_MAP', () => {
            const app = new App()
            app.createCharacterSelectors()

            expect(Object.keys(app.PAGE_MAP)).toHaveLength(2)
            expect(app.PAGE_MAP[WikiData.characters[0].id]).toEqual(WikiData.characters[0])
            expect(app.PAGE_MAP[WikiData.characters[1].id]).toEqual(WikiData.characters[1])
        })
    })

    describe('createNoteSelectors', () => {
        it("populates the App's notesSelector", () => {
            const app = new App()
            jest.spyOn(app, 'searchForTags')
            app.createNoteSelectors()

            expect(app.notesSelector).toHaveLength(5)

            // First element is section title
            const notesTitle = app.notesSelector[0]
            expect(notesTitle.innerHTML).toEqual(NOTES_PAGE_TYPE)
            expect(notesTitle.className).toEqual(appConstants.SECTION_TITLE)

            // Second element is tag input
            const tagInput = app.notesSelector[1] as HTMLInputElement
            expect(tagInput.className).toEqual(appConstants.SECTION_TAG_SEARCH)
            expect(tagInput.placeholder).toEqual(appConstants.TAG_SEARCH_PLACEHOLDER)
            expect(tagInput.oninput).toBeTruthy()
            expect(app.searchForTags).toHaveBeenCalledWith(NOTES_PAGE_TYPE)

            // Tag Areas
            const selectedTagArea = app.notesSelector[2]
            expect(selectedTagArea.className).toEqual(appConstants.SELECTED_TAG_RESULTS)

            const searchResultTagArea = app.notesSelector[3]
            expect(searchResultTagArea.className).toEqual(appConstants.TAG_RESULTS)

            // Note Page options
            const noteOptions = app.notesSelector[4]
            expect(noteOptions.className).toEqual(appConstants.PAGE_OPTION_CONTAINER)

            // 2 Notes in mock data
            expect(noteOptions.children).toHaveLength(3)

            // Last element is space block
            expect(noteOptions.children[noteOptions.children.length - 1].className).toEqual(appConstants.PAGE_OPTION_SPACE_BLOCK)
        })

        it('adds the Note Pages as options', () => {
            const app = new App()
            jest.spyOn(app, 'openPage')
            app.createNoteSelectors()

            const noteOptions = app.notesSelector[4]
            const firstNoteOption = noteOptions.children[0] as HTMLElement
            const secondNoteOption = noteOptions.children[1] as HTMLElement

            expect(app.openPage).toHaveBeenCalledTimes(2)

            expect(firstNoteOption.className).toEqual(appConstants.PAGE_OPTION)
            expect(firstNoteOption.innerHTML).toEqual(WikiData.notes[0].name)
            expect(firstNoteOption.onclick).toBeTruthy()
            expect(app.openPage).toHaveBeenCalledWith(WikiData.notes[0])

            expect(secondNoteOption.className).toEqual(appConstants.PAGE_OPTION)
            expect(secondNoteOption.innerHTML).toEqual(WikiData.notes[1].name)
            expect(secondNoteOption.onclick).toBeTruthy()
            expect(app.openPage).toHaveBeenCalledWith(WikiData.notes[1])
        })

        it('populates DEFAULT_NOTES_OPTIONS', () => {
            const app = new App()
            app.createNoteSelectors()

            expect(app.DEFAULT_NOTES_OPTIONS).toHaveLength(2)
        })

        it("adds notes' tags to ALL_NOTE_TAGS", () => {
            const app = new App()
            jest.spyOn(app, 'addPageTags')
            app.createNoteSelectors()

            expect(app.ALL_NOTE_TAGS.size).toEqual(3)
            expect(app.ALL_NOTE_TAGS).toContain('noteTagOne')
            expect(app.ALL_NOTE_TAGS).toContain('noteTagTwo')
            expect(app.ALL_NOTE_TAGS).toContain('oneTagNote')

            expect(app.addPageTags).toHaveBeenCalledWith(WikiData.notes[0])
            expect(app.addPageTags).toHaveBeenCalledWith(WikiData.notes[1])
        })

        it('adds Note Pages to PAGE_MAP', () => {
            const app = new App()
            app.createNoteSelectors()

            expect(Object.keys(app.PAGE_MAP)).toHaveLength(2)
            expect(app.PAGE_MAP[WikiData.notes[0].id]).toEqual(WikiData.notes[0])
            expect(app.PAGE_MAP[WikiData.notes[1].id]).toEqual(WikiData.notes[1])
        })
    })

    describe('render', () => {
        beforeEach(() => {
            document.body.outerHTML = documentBody
        })

        it('generates Home, Character, and Note page selectors', () => {
            const app = new App()
            jest.spyOn(app, 'createHomeSelectors')
            jest.spyOn(app, 'createCharacterSelectors')
            jest.spyOn(app, 'createNoteSelectors')
            app.render()

            expect(app.createHomeSelectors).toHaveBeenCalledTimes(1)
            expect(app.createCharacterSelectors).toHaveBeenCalledTimes(1)
            expect(app.createNoteSelectors).toHaveBeenCalledTimes(1)
        })

        it('adds click functions to the icons', () => {
            const app = new App()
            jest.spyOn(app, 'setHomeSelectors')
            jest.spyOn(app, 'setCharactersSelectors')
            jest.spyOn(app, 'setNotesSelectors')
            app.render()

            expect(app.homeIcon.onclick).toBeTruthy()
            expect(app.characterIcon.onclick).toBeTruthy()
            expect(app.notesIcon.onclick).toBeTruthy()

            app.homeIcon.click()
            expect(app.setHomeSelectors).toHaveBeenCalledTimes(1)

            app.characterIcon.click()
            expect(app.setCharactersSelectors).toHaveBeenCalledTimes(1)

            app.notesIcon.click()
            expect(app.setNotesSelectors).toHaveBeenCalledTimes(1)
        })

        it('adds click function to the zoomedImageSection', () => {
            const app = new App()
            jest.spyOn(app, 'closeZoomModal')
            app.render()

            expect(app.zoomedImageSection.onclick).toBeTruthy()

            app.zoomedImageSection.click()
            expect(app.closeZoomModal).toHaveBeenCalledTimes(1)
        })

        it('adds change function to darkModeToggle', () => {
            const app = new App()
            jest.spyOn(app, 'changeToDarkMode')
            app.render()

            expect(app.darkModeToggle.onchange).toBeTruthy()
        })

        it('preloads images from Pages', () => {
            const app = new App()
            jest.spyOn(app, 'preloadImages')
            app.render()

            expect(app.preloadImages).toHaveBeenCalledTimes(1)
        })

        it('adds click function to pageSelectorModal', () => {
            const app = new App()
            jest.spyOn(app, 'toggleSidebar')
            app.render()

            expect(app.pageSelectorModal.onclick).toBeTruthy()

            app.pageSelectorModal.click()
            expect(app.toggleSidebar).toHaveBeenCalledTimes(1)
            expect(app.toggleSidebar).toHaveBeenCalledWith(false)
        })

        it("sets the pageSelector to the Home Page's", () => {
            const app = new App()
            jest.spyOn(app.pageSelector, 'replaceChildren')
            app.render()

            expect(app.pageSelector.replaceChildren).toHaveBeenCalledWith(...app.homePageSelector)
        })

        it('opens the Home Page by default', () => {
            const app = new App()
            jest.spyOn(app, 'openPage')
            app.render()

            const pageTitle = document.getElementsByClassName(appConstants.PAGE_TITLE)[0]

            expect(app.openPage).toHaveBeenCalledWith(WikiData.homePage)
            expect(pageTitle.innerHTML).toEqual(WikiData.homePage.name)
        })

        it('adds event listener to handle resizing', () => {
            const app = new App()
            jest.spyOn(window, 'addEventListener')
            app.render()

            expect(window.addEventListener).toHaveBeenCalledWith('resize', app.handleResize)
        })

        describe('when window width is greater than than the MOBILE_WIDTH_LIMIT', () => {
            it('does not change the App to mobile', () => {
                const app = new App()
                jest.spyOn(app, 'changeToMobile')

                window.innerWidth = app.MOBILE_WIDTH_LIMIT + 1
                app.render()

                expect(app.changeToMobile).not.toHaveBeenCalled()
            })
        })

        describe('when window width is equal to the MOBILE_WIDTH_LIMIT', () => {
            it('does not change the App to mobile', () => {
                const app = new App()
                jest.spyOn(app, 'changeToMobile')

                window.innerWidth = app.MOBILE_WIDTH_LIMIT
                app.render()

                expect(app.changeToMobile).not.toHaveBeenCalled()
            })
        })

        describe('when window width is less than the MOBILE_WIDTH_LIMIT', () => {
            it('changes the App to mobile', () => {
                const app = new App()
                jest.spyOn(app, 'changeToMobile')

                window.innerWidth = app.MOBILE_WIDTH_LIMIT - 1
                app.render()

                expect(app.changeToMobile).toHaveBeenCalledWith(true)
            })
        })

        describe('when url search params indicate dark mode should not be set initially', () => {
            it('does not change the App to dark mode', () => {
                window.history.pushState({}, '', '?dummyquery')

                const app = new App()
                jest.spyOn(app, 'changeToDarkMode')
                app.render()

                expect(app.darkModeToggle.checked).toBeFalsy()
                expect(app.changeToDarkMode).not.toHaveBeenCalled()
            })
        })

        describe('when url search params indicate dark mode should be set initially', () => {
            afterEach(() => {
                window.history.pushState({}, '', '?dummyquery')
            })

            describe('when key in search param is "dark"' , () => {
                describe('when value is "true"', () => {
                    it('changes the App to dark mode', () => {
                        window.history.pushState({}, '', '?dark=true')

                        const app = new App()
                        jest.spyOn(app, 'changeToDarkMode')
                        app.render()

                        expect(app.darkModeToggle.checked).toBeTruthy()
                        expect(app.changeToDarkMode).toHaveBeenCalledWith(true)
                    })
                })

                describe('when value is "t"', () => {
                    it('changes the App to dark mode', () => {
                        window.history.pushState({}, '', '?dark=t')

                        const app = new App()
                        jest.spyOn(app, 'changeToDarkMode')
                        app.render()

                        expect(app.darkModeToggle.checked).toBeTruthy()
                        expect(app.changeToDarkMode).toHaveBeenCalledWith(true)
                    })
                })
            })

            describe('when key in search param is "d"' , () => {
                describe('when value is "true"', () => {
                    it('changes the App to dark mode', () => {
                        window.history.pushState({}, '', '?d=true')

                        const app = new App()
                        jest.spyOn(app, 'changeToDarkMode')
                        app.render()

                        expect(app.darkModeToggle.checked).toBeTruthy()
                        expect(app.changeToDarkMode).toHaveBeenCalledWith(true)
                    })
                })

                describe('when value is "t"', () => {
                    it('changes the App to dark mode', () => {
                        window.history.pushState({}, '', '?d=t')

                        const app = new App()
                        jest.spyOn(app, 'changeToDarkMode')
                        app.render()

                        expect(app.darkModeToggle.checked).toBeTruthy()
                        expect(app.changeToDarkMode).toHaveBeenCalledWith(true)
                    })
                })
            })
        })
    })
})
