import App from '../../src-ts/app'
import * as appConstants from '../../src-ts/app/app-constants'

import { CHARACTERS_PAGE_TYPE, GALLERY_TITLES_LIST, NOTES_PAGE_TYPE } from '../../src-ts/constants'
import { GallerySection, Page } from '../../src-ts/DataTypes'

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
                    expect(app.zoomedImageSection.children[0].className).toEqual('zoomed-img-portrait')
                })
            })

            describe('when image is landscape orientation', () => {
                it('adds a zoomed landscape image to the zoomed image section', () => {
                    jest.spyOn(app, 'findOrientation').mockImplementation(() => 'landscape')
                    app.zoomInImage('testimage')()

                    expect(app.findOrientation).toHaveBeenCalledTimes(1)
                    expect(app.zoomedImageSection.children).toHaveLength(1)
                    expect(app.zoomedImageSection.children[0].className).toEqual('zoomed-img-landscape')
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
            gallerySectionEl.className = 'gallery-image-list'
        })

        it('creates a section for every image', () => {
            expect(gallerySectionEl.children).toHaveLength(2)

            const imageSections = [...gallerySectionEl.children]
            imageSections.forEach((section) => {
                expect(section.className).toEqual('gallery-image-section')
            })
        })

        it('puts images in every image section', () => {
            const imageSections = [...gallerySectionEl.children]
            imageSections.forEach((section) => {
                expect(section.children[0].tagName).toEqual('IMG')
                expect(section.children[0].className).toEqual('gallery-img')
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
            expect(firstImageCaption.className).toEqual('gallery-img-caption')
            expect(firstImageCaption.innerHTML).toEqual('Test Image 1')

            expect(secondImageCaption).toBeFalsy()
        })
    })
})
