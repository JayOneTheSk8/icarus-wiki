"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WikiData_1 = __importDefault(require("../WikiData"));
const constants_1 = require("../constants");
const appConstants = __importStar(require("./app-constants"));
const { homePage, characters, notes, } = WikiData_1.default;
class App {
    constructor() {
        /* Defaults */
        this.DEFAULT_CHARACTERS_OPTIONS = [];
        this.DEFAULT_NOTES_OPTIONS = [];
        this.MOBILE_WIDTH_LIMIT = 1000;
        this.PAGE_MAP = {};
        /* State Variables */
        this.usingMobile = false;
        this.sidebarOpen = false;
        this.darkMode = false;
        /* Tag Sets */
        this.ALL_CHARACTER_TAGS = new Set();
        this.SELECTED_CHARACTER_TAGS = new Set();
        this.taggedCharacterPages = {};
        this.ALL_NOTE_TAGS = new Set();
        this.SELECTED_NOTE_TAGS = new Set();
        this.taggedNotePages = {};
        /* Selector Data */
        this.homePageSelector = [];
        this.charactersSelector = [];
        this.notesSelector = [];
        /* Make HTML Elements Functions */
        this.createDiv = () => document.createElement('div');
        this.createImg = () => document.createElement('img');
        this.createInput = () => document.createElement('input');
        this.findElement = (id) => document.getElementById(id);
        /* Toggle Dropdown */
        this.toggleSidebar = (openSidebar) => {
            if (!this.usingMobile) {
                return;
            }
            if (this.darkMode) {
                this.pageSelector.className =
                    openSidebar
                        ? appConstants.PAGE_SELECTOR_MOBILE_SHOW_DARK_CLASS
                        : appConstants.PAGE_SELECTOR_MOBILE_HIDE_CLASS;
            }
            else {
                this.pageSelector.className =
                    openSidebar
                        ? appConstants.PAGE_SELECTOR_MOBILE_SHOW_CLASS
                        : appConstants.PAGE_SELECTOR_MOBILE_HIDE_CLASS;
            }
            this.pageSelectorModal.className =
                openSidebar
                    ? appConstants.PAGE_SELECTOR_MODAL_SHOW_CLASS
                    : appConstants.PAGE_SELECTOR_MODAL_HIDE_CLASS;
            // Set state variable
            this.sidebarOpen = openSidebar;
        };
        /* Change to Mobile */
        this.changeToMobile = (setMobile) => {
            if (this.darkMode) {
                this.sectionSelector.className =
                    setMobile
                        ? appConstants.SECTION_SELECTOR_MOBILE_DARK_CLASS
                        : appConstants.SECTION_SELECTOR_DARK_CLASS;
                // Default hide page selector on mobile
                this.pageSelector.className =
                    setMobile
                        ? appConstants.PAGE_SELECTOR_MOBILE_HIDE_CLASS
                        : appConstants.PAGE_SELECTOR_DARK_CLASS;
            }
            else {
                this.sectionSelector.className =
                    setMobile
                        ? appConstants.SECTION_SELECTOR_MOBILE_CLASS
                        : appConstants.SECTION_SELECTOR_CLASS;
                // Default hide page selector on mobile
                this.pageSelector.className =
                    setMobile
                        ? appConstants.PAGE_SELECTOR_MOBILE_HIDE_CLASS
                        : appConstants.PAGE_SELECTOR_CLASS;
            }
            this.homeIcon.className = setMobile ? appConstants.HOME_ICON_MOBILE_CLASS : appConstants.HOME_ICON_CLASS;
            this.characterIcon.className = setMobile ? appConstants.CHARACTER_ICON_MOBILE_CLASS : appConstants.CHARACTER_ICON_CLASS;
            this.notesIcon.className = setMobile ? appConstants.NOTES_ICON_MOBILE_CLASS : appConstants.NOTES_ICON_CLASS;
            this.mainContent.className = setMobile ? appConstants.MAIN_MOBILE_CLASS : appConstants.MAIN_CLASS;
            this.pageContent.className = setMobile ? appConstants.PAGE_CONTENT_MOBILE_CLASS : appConstants.PAGE_CONTENT_CLASS;
            // Always hide modal unless toggling sidebar
            this.pageSelectorModal.className = appConstants.PAGE_SELECTOR_MODAL_HIDE_CLASS;
            // Since sidebar will always be closed on resize, adjust the state
            this.sidebarOpen = false;
            this.usingMobile = setMobile;
        };
        /* Dark Mode Toggle */
        this.changeToDarkMode = (setDarkMode) => {
            // Adjust primary mode elements
            const primaryModeElements = document.getElementsByClassName(setDarkMode ? appConstants.PRIMARY_MODE_CLASS : appConstants.DARK_MODE_CLASS);
            for (const el of primaryModeElements) {
                el.className = setDarkMode ? appConstants.DARK_MODE_CLASS : appConstants.PRIMARY_MODE_CLASS;
            }
            // Adjust section selector
            const sectionSelectorElements = document.getElementsByClassName(setDarkMode ? appConstants.SECTION_SELECTOR_CLASS : appConstants.SECTION_SELECTOR_DARK_CLASS);
            for (const el of sectionSelectorElements) {
                el.className = setDarkMode ? appConstants.SECTION_SELECTOR_DARK_CLASS : appConstants.SECTION_SELECTOR_CLASS;
            }
            // Adjust section selector (mobile)
            const sectionSelectorMobileElements = document.getElementsByClassName(setDarkMode ? appConstants.SECTION_SELECTOR_MOBILE_CLASS : appConstants.SECTION_SELECTOR_MOBILE_DARK_CLASS);
            for (const el of sectionSelectorMobileElements) {
                el.className = setDarkMode ? appConstants.SECTION_SELECTOR_MOBILE_DARK_CLASS : appConstants.SECTION_SELECTOR_MOBILE_CLASS;
            }
            // Adjust page selector
            const pageSelectorElements = document.getElementsByClassName(setDarkMode ? appConstants.PAGE_SELECTOR_CLASS : appConstants.PAGE_SELECTOR_DARK_CLASS);
            for (const el of pageSelectorElements) {
                el.className = setDarkMode ? appConstants.PAGE_SELECTOR_DARK_CLASS : appConstants.PAGE_SELECTOR_CLASS;
            }
            // Adjust page selector (mobile)
            const pageSelectorMobileElements = document.getElementsByClassName(setDarkMode ? appConstants.PAGE_SELECTOR_MOBILE_SHOW_CLASS : appConstants.PAGE_SELECTOR_MOBILE_SHOW_DARK_CLASS);
            for (const el of pageSelectorMobileElements) {
                el.className = setDarkMode ? appConstants.PAGE_SELECTOR_MOBILE_SHOW_DARK_CLASS : appConstants.PAGE_SELECTOR_MOBILE_SHOW_CLASS;
            }
            // Adjust space block
            const spaceBlockElements = document.getElementsByClassName(setDarkMode ? appConstants.SPACE_BLOCK_CLASS : appConstants.SPACE_BLOCK_DARK_CLASS);
            for (const el of spaceBlockElements) {
                el.className = setDarkMode ? appConstants.SPACE_BLOCK_DARK_CLASS : appConstants.SPACE_BLOCK_CLASS;
            }
            this.darkMode = setDarkMode;
        };
        /* Set Page Selectors */
        this.setHomeSelectors = () => {
            this.pageSelector.replaceChildren(...this.homePageSelector);
            this.usingMobile && this.toggleSidebar(true);
        };
        this.setCharactersSelectors = () => {
            this.pageSelector.replaceChildren(...this.charactersSelector);
            this.usingMobile && this.toggleSidebar(true);
        };
        this.setNotesSelectors = () => {
            this.pageSelector.replaceChildren(...this.notesSelector);
            this.usingMobile && this.toggleSidebar(true);
        };
        /* Tags */
        this.removeTag = (selectedTags) => {
            return (e) => {
                const target = e.target;
                const selectedTagResults = document.getElementsByClassName(appConstants.SELECTED_TAG_RESULTS)[0];
                // Remove from the DOM
                selectedTagResults.removeChild(target);
                // Delete tag from memory
                selectedTags.delete(target.innerHTML);
                // Adjust page results
                this.adjustPageSelectorsToTags();
            };
        };
        this.pickTag = (selectedTags) => {
            return (e) => {
                const target = e.target;
                const tagResults = document.getElementsByClassName(appConstants.TAG_RESULTS)[0];
                const sectionTitle = document.getElementsByClassName(appConstants.SECTION_TITLE)[0];
                const currentTagSet = sectionTitle.innerHTML === constants_1.CHARACTERS_PAGE_TYPE
                    ? this.ALL_CHARACTER_TAGS
                    : sectionTitle.innerHTML === constants_1.NOTES_PAGE_TYPE
                        ? this.ALL_NOTE_TAGS
                        : new Set();
                if (
                // if the current tag set is populated
                currentTagSet.size
                    // and the current tag set has the target
                    && currentTagSet.has(target.innerHTML)
                    // and the target is not in the currently selected tags (e.g tag was selected from search and clicked on page)
                    && !selectedTags.has(target.innerHTML)) {
                    const selectedTagResults = document.getElementsByClassName(appConstants.SELECTED_TAG_RESULTS)[0];
                    const sectionTagSearch = document.getElementsByClassName(appConstants.SECTION_TAG_SEARCH)[0];
                    // Add to selected tag to DOM
                    const selectedTag = this.createDiv();
                    selectedTag.className = appConstants.SELECTED_PAGE_TAG;
                    selectedTag.innerHTML = target.innerHTML;
                    selectedTag.onclick = this.removeTag(selectedTags);
                    selectedTagResults.appendChild(selectedTag);
                    // Add selected tag to memory
                    selectedTags.add(target.innerHTML);
                    // Clear search input
                    sectionTagSearch.value = '';
                    // Clear present tags
                    tagResults.replaceChildren();
                    // Adjust page results
                    this.adjustPageSelectorsToTags();
                }
            };
        };
        this.searchForTags = (forPageType) => {
            return (e) => {
                const target = e.target;
                const passedValue = target.value.toLowerCase();
                const tagResults = document.getElementsByClassName(appConstants.TAG_RESULTS)[0];
                const results = []; // Empty if there are ever no results
                const allTags = forPageType === constants_1.CHARACTERS_PAGE_TYPE
                    ? this.ALL_CHARACTER_TAGS
                    : forPageType === constants_1.NOTES_PAGE_TYPE
                        ? this.ALL_NOTE_TAGS
                        : new Set(); // Will not start loop
                const selectedTags = forPageType === constants_1.CHARACTERS_PAGE_TYPE
                    ? this.SELECTED_CHARACTER_TAGS
                    : forPageType === constants_1.NOTES_PAGE_TYPE
                        ? this.SELECTED_NOTE_TAGS
                        : new Set();
                // Of all the given tags
                allTags.forEach((tag) => {
                    // Remove non-alphanumeric to ease search
                    const parsedTag = tag.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
                    // If the tag is not in the selected tage and it starts with the input
                    if (!selectedTags.has(tag) && parsedTag.startsWith(passedValue)) {
                        // Create the tag element
                        const tagEl = this.createDiv();
                        tagEl.className = appConstants.PAGE_TAG;
                        tagEl.innerHTML = tag;
                        tagEl.onclick = this.pickTag(selectedTags);
                        // Add to results
                        results.push(tagEl);
                    }
                });
                passedValue
                    // Add results to the DOM
                    ? tagResults.replaceChildren(...results)
                    // If there is nothing in the input, empty results
                    : tagResults.replaceChildren();
            };
        };
        this.addPageTags = (page) => {
            var _a;
            (_a = page.tags) === null || _a === void 0 ? void 0 : _a.forEach((tag) => {
                if (page.type === constants_1.CHARACTERS_PAGE_TYPE) {
                    // Add to tagged character pages if characters page type
                    this.taggedCharacterPages[tag]
                        ? this.taggedCharacterPages[tag].push(page)
                        : this.taggedCharacterPages[tag] = [page];
                }
                else if (page.type === constants_1.NOTES_PAGE_TYPE) {
                    // Add to tagged note pages if notes page type
                    this.taggedNotePages[tag]
                        ? this.taggedNotePages[tag].push(page)
                        : this.taggedNotePages[tag] = [page];
                }
            });
        };
        this.resetPageSelectors = (pageOptionContainer, sectionTitle) => {
            // Check the current section title and replace with default options
            switch (sectionTitle.innerHTML) {
                case constants_1.CHARACTERS_PAGE_TYPE:
                    pageOptionContainer.replaceChildren(...this.DEFAULT_CHARACTERS_OPTIONS);
                    break;
                case constants_1.NOTES_PAGE_TYPE:
                    pageOptionContainer.replaceChildren(...this.DEFAULT_NOTES_OPTIONS);
                    break;
                default:
                    break;
            }
        };
        this.getInitialTaggedPages = (sectionTitle, taggedList) => {
            // Return the first list of pages from the taggedList, default to character tagged pages
            switch (sectionTitle.innerHTML) {
                case constants_1.CHARACTERS_PAGE_TYPE:
                    return this.taggedCharacterPages[taggedList[0]];
                case constants_1.NOTES_PAGE_TYPE:
                    return this.taggedNotePages[taggedList[0]];
                default:
                    return this.taggedCharacterPages[taggedList[0]];
            }
        };
        this.adjustPageSelectorsToTags = () => {
            // Get from the DOM for absolute adjustment
            const selectedTagResults = document.getElementsByClassName(appConstants.SELECTED_TAG_RESULTS)[0];
            const pageOptionContainer = document.getElementsByClassName(appConstants.PAGE_OPTION_CONTAINER)[0];
            const sectionTitle = document.getElementsByClassName(appConstants.SECTION_TITLE)[0];
            // Get all of the tags from the DOM
            const taggedList = [...selectedTagResults.children].map(el => el.innerHTML);
            // If there are no selected tags
            if (taggedList.length === 0) {
                // Reset the selectors to default
                this.resetPageSelectors(pageOptionContainer, sectionTitle);
            }
            else {
                // Get all the pages tagged with the first tag
                let results = this.getInitialTaggedPages(sectionTitle, taggedList);
                // For every selected tag
                taggedList.forEach((tag, idx) => {
                    // Skipping the first tag
                    if (idx !== 0) {
                        // Filter the results getting every page with the next tags
                        results = results.filter(page => { var _a; return (_a = page.tags) === null || _a === void 0 ? void 0 : _a.has(tag); });
                    }
                });
                // Get every page in the results and create selectors for them
                const pageOptions = results.map((page) => {
                    const selector = this.createDiv();
                    selector.innerHTML = page.name;
                    selector.className = appConstants.PAGE_OPTION;
                    selector.onclick = this.openPage(page);
                    return selector;
                });
                // Add selectors to page selector options
                pageOptionContainer.replaceChildren(...pageOptions);
            }
        };
        /* Zooom-In */
        this.findOrientation = (image) => {
            if (image.height > image.width) {
                return 'portrait';
            }
            else {
                return 'landscape';
            }
        };
        this.zoomInImage = (imageSrc) => {
            return () => {
                const zoomedImage = this.createImg();
                zoomedImage.src = imageSrc;
                zoomedImage.className = `zoomed-img-${this.findOrientation(zoomedImage)}`;
                this.zoomedImageSection.appendChild(zoomedImage);
                this.zoomedImageSection.className = appConstants.ZOOMED_IMAGE_SECTION_SHOW;
                this.zoomedModal.className = appConstants.ZOOMED_IMAGE_MODAL_SHOW;
            };
        };
        this.closeZoomModal = () => {
            this.zoomedImageSection.replaceChildren();
            this.zoomedImageSection.className = appConstants.ZOOMED_IMAGE_SECTION_HIDE;
            this.zoomedModal.className = appConstants.ZOOMED_IMAGE_MODAL_HIDE;
        };
        /* Get HTML Contents */
        this.getGalleryContents = (section) => {
            // Create Gallery list
            const galleryImageList = this.createDiv();
            galleryImageList.className = 'gallery-image-list';
            // Go through images
            section.gallery.forEach((image) => {
                // Create image section
                const galleryImageSection = this.createDiv();
                galleryImageSection.className = 'gallery-image-section';
                // Create img
                const galleryImg = this.createImg();
                galleryImg.className = 'gallery-img';
                galleryImg.src = image.url;
                galleryImg.onclick = this.zoomInImage(image.url);
                // Add img to section
                galleryImageSection.appendChild(galleryImg);
                // Add caption
                if (image.caption) {
                    const galleryImageCaption = this.createDiv();
                    galleryImageCaption.className = 'gallery-img-caption';
                    galleryImageCaption.innerHTML = image.caption;
                    galleryImageSection.appendChild(galleryImageCaption);
                }
                // Add image section to list
                galleryImageList.appendChild(galleryImageSection);
            });
            return galleryImageList;
        };
        this.getAttributesContents = (section) => {
            // Create Attributes list
            const attributesList = this.createDiv();
            attributesList.className = 'attributes-list';
            // Go through attributes
            section.attributes.forEach((attr) => {
                // Create attribute
                const attribute = this.createDiv();
                attribute.className = 'attribute';
                // Create title
                const attributeTitle = this.createDiv();
                attributeTitle.className = 'attribute-title';
                attributeTitle.innerHTML = attr.attributeName;
                // Create Value
                const attributeValue = this.createDiv();
                attributeValue.className = 'attribute-value';
                attributeValue.innerHTML = attr.attributeText;
                // Append to Attribute
                attribute.appendChild(attributeTitle);
                attribute.appendChild(attributeValue);
                // Add to Attributes List
                attributesList.appendChild(attribute);
            });
            return attributesList;
        };
        this.getAssociationsContents = (section) => {
            // Create Associations section
            const associationsSection = this.createDiv();
            associationsSection.className = 'associations-section';
            section.associations.forEach((assc) => {
                // Create Group
                const associationGroup = this.createDiv();
                associationGroup.className = 'association-group';
                // Add Title
                const associationTitle = this.createDiv();
                associationTitle.className = 'association-title';
                associationTitle.innerHTML = assc.associationName;
                associationGroup.appendChild(associationTitle);
                // List pages in association
                assc.associationPageIds.forEach((asscPageId) => {
                    const associationPage = this.PAGE_MAP[asscPageId];
                    const pageAssociated = this.createDiv();
                    pageAssociated.className = 'associated-page';
                    pageAssociated.innerHTML = associationPage.name;
                    // Allow click to link to other pages
                    pageAssociated.onclick = () => this.displayPage(this.getPageHTMLContents(associationPage));
                    // Add page to association group
                    associationGroup.appendChild(pageAssociated);
                });
                // Add group to associations section
                associationsSection.appendChild(associationGroup);
            });
            return associationsSection;
        };
        this.addPageSectionToContents = (currentContents, section) => {
            // Add section image
            if (section.sectionImage) {
                // Create image section
                const sectionImageSection = this.createDiv();
                sectionImageSection.className = 'page-section-image-section';
                // Create image
                const sectionImage = this.createImg();
                sectionImage.className = 'page-section-img';
                sectionImage.src = section.sectionImage.url;
                sectionImage.onclick = this.zoomInImage(section.sectionImage.url);
                // Add image to section
                sectionImageSection.appendChild(sectionImage);
                // Add caption
                if (section.sectionImage.caption) {
                    const sectionImageCaption = this.createDiv();
                    sectionImageCaption.className = 'page-section-img-caption';
                    sectionImageCaption.innerHTML = section.sectionImage.caption;
                    sectionImageSection.appendChild(sectionImageCaption);
                }
                // Add image section to contents
                currentContents.push(sectionImageSection);
            }
            let body;
            if (typeof section.body === 'string') {
                // Cast as string
                body = section.body;
                // Create text body
                const textBody = this.createDiv();
                textBody.className = 'page-section-text-body';
                textBody.innerHTML = body;
                // Add text body to content
                currentContents.push(textBody);
            }
            else {
                // Cast as array of subsections
                body = section.body;
                body.forEach((subSection) => {
                    // Add subSection title
                    const subSectionTitle = this.createDiv();
                    subSectionTitle.className = 'page-subsection-title';
                    subSectionTitle.innerHTML = subSection.subSectionTitle;
                    // Add subSection title to contents
                    currentContents.push(subSectionTitle);
                    // Create Text Body
                    const subSectionTextBody = this.createDiv();
                    subSectionTextBody.className = 'page-subsection-text-body';
                    subSectionTextBody.innerHTML = subSection.subSectionText;
                    // Add subSection image
                    if (subSection.subSectionImage) {
                        // Add subSection image section
                        const subSectionImageSection = this.createDiv();
                        subSectionImageSection.className = 'page-subsection-image-section';
                        // Create Image
                        const subSectionImage = this.createImg();
                        subSectionImage.className = 'page-subsection-img';
                        subSectionImage.src = subSection.subSectionImage.url;
                        subSectionImage.onclick = this.zoomInImage(subSection.subSectionImage.url);
                        // Add image to section
                        subSectionImageSection.appendChild(subSectionImage);
                        // Add caption
                        if (subSection.subSectionImage.caption) {
                            const subSectionImageCaption = this.createDiv();
                            subSectionImageCaption.className = 'page-subsection-img-caption';
                            subSectionImageCaption.innerHTML = subSection.subSectionImage.caption;
                            subSectionImageSection.appendChild(subSectionImageCaption);
                        }
                        // Add image to text body in subsection
                        subSectionTextBody.appendChild(subSectionImageSection);
                    }
                    // Add text body for subsection
                    currentContents.push(subSectionTextBody);
                });
            }
        };
        this.getPageHTMLContents = (page) => {
            const contents = [];
            // Get Page Name
            const pageName = this.createDiv();
            pageName.innerHTML = page.name;
            pageName.className = 'page-title';
            contents.push(pageName);
            // Add Page Image
            if (page.pageImage) {
                // Create Section
                const pageImageSection = this.createDiv();
                pageImageSection.className = 'page-image-section';
                // Create Image
                const pageImage = this.createImg();
                pageImage.className = 'page-img';
                pageImage.src = page.pageImage.url;
                pageImage.onclick = this.zoomInImage(page.pageImage.url);
                // Add Image to DIV
                pageImageSection.appendChild(pageImage);
                // Add caption
                if (page.pageImage.caption) {
                    const pageImageCaption = this.createDiv();
                    pageImageCaption.className = 'page-img-caption';
                    pageImageCaption.innerHTML = page.pageImage.caption;
                    pageImageSection.appendChild(pageImageCaption);
                }
                // Add Page Image Section to Page Contents
                contents.push(pageImageSection);
            }
            // Go through sections
            page.sections.forEach((section) => {
                // Add section title
                const sectionTitle = this.createDiv();
                sectionTitle.innerHTML = section.title;
                sectionTitle.className = 'page-section-title';
                contents.push(sectionTitle);
                if (constants_1.GALLERY_TITLES_LIST.includes(section.title)) {
                    contents.push(this.getGalleryContents(section));
                }
                else if (constants_1.ATTRIBUTES_TITLES_LIST.includes(section.title)) {
                    contents.push(this.getAttributesContents(section));
                }
                else if (constants_1.ASSOCIATIONS_TITLES_LIST.includes(section.title)) {
                    contents.push(this.getAssociationsContents(section));
                }
                else {
                    this.addPageSectionToContents(contents, section);
                }
            });
            // Add page tags
            if (page.tags) {
                // Create tags list
                const tagsList = this.createDiv();
                tagsList.className = 'page-tags-list';
                // Add tag elements
                page.tags.forEach((tag) => {
                    const tagEl = this.createDiv();
                    tagEl.className = appConstants.PAGE_TAG;
                    tagEl.onclick = (page.type === constants_1.CHARACTERS_PAGE_TYPE
                        ? this.pickTag(this.SELECTED_CHARACTER_TAGS)
                        : page.type === constants_1.NOTES_PAGE_TYPE
                            ? this.pickTag(this.SELECTED_NOTE_TAGS)
                            : null);
                    tagEl.innerHTML = tag;
                    // Add to tags list
                    tagsList.appendChild(tagEl);
                });
                contents.push(tagsList);
            }
            // Add spacer
            const spaceBlock = this.createDiv();
            spaceBlock.className = this.darkMode ? appConstants.SPACE_BLOCK_DARK_CLASS : appConstants.SPACE_BLOCK_CLASS;
            contents.push(spaceBlock);
            return contents;
        };
        /* Preload Images */
        this.preloadGalleryImages = (gallerySection) => {
            for (const image of gallerySection.gallery) {
                const i = this.createImg();
                i.src = image.url;
            }
        };
        this.preloadSubSectionImage = (subSection) => {
            if (subSection.subSectionImage) {
                const i = this.createImg();
                i.src = subSection.subSectionImage.url;
            }
        };
        this.preloadPageSectionImage = (pageSection) => {
            if (pageSection.sectionImage) {
                const i = this.createImg();
                i.src = pageSection.sectionImage.url;
            }
            if (typeof pageSection.body !== 'string') {
                for (const subSection of pageSection.body) {
                    this.preloadSubSectionImage(subSection);
                }
            }
        };
        this.preloadPageImage = (page) => {
            if (page.pageImage) {
                const i = this.createImg();
                i.src = page.pageImage.url;
            }
            for (const sect of page.sections) {
                if (constants_1.ATTRIBUTES_TITLES_LIST.includes(sect.title) || constants_1.ASSOCIATIONS_TITLES_LIST.includes(sect.title)) {
                    // Attributes and Associations cannot have images
                    continue;
                }
                else if (constants_1.GALLERY_TITLES_LIST.includes(sect.title)) {
                    this.preloadGalleryImages(sect);
                }
                else {
                    this.preloadPageSectionImage(sect);
                }
            }
        };
        this.preloadImages = () => {
            this.preloadPageImage(homePage);
            for (const characterPage of characters) {
                this.preloadPageImage(characterPage);
            }
            for (const notePage of notes) {
                this.preloadPageImage(notePage);
            }
        };
        /* Open Page */
        this.displayPage = (pageContents) => {
            // Update Page
            this.pageContent.replaceChildren(...pageContents);
            // Scroll to top
            window.scrollTo(0, 0);
        };
        this.openPage = (page) => {
            return () => {
                const currentPageTitle = document.getElementsByClassName(appConstants.PAGE_TITLE)[0];
                // Only switch page if page is not already loaded
                if (!currentPageTitle || currentPageTitle.innerHTML !== page.name) {
                    this.displayPage(this.getPageHTMLContents(page));
                }
                this.sidebarOpen && this.toggleSidebar(false);
            };
        };
        /* Event Functions */
        this.handleResize = () => {
            // If the width is below the limit and we aren't using mobile elements
            if (window.innerWidth < this.MOBILE_WIDTH_LIMIT && !this.usingMobile) {
                // Switch to mobile view
                this.changeToMobile(true);
            }
            else if (window.innerWidth >= this.MOBILE_WIDTH_LIMIT && this.usingMobile) {
                // Otherwise if width is above the limit and we are using mobile
                // Turn off mobile view
                this.changeToMobile(false);
            }
        };
        /* Home Page Selectors */
        this.createHomeSelectors = () => {
            const homePageTitle = this.createDiv();
            homePageTitle.innerHTML = homePage.name;
            homePageTitle.className = appConstants.SECTION_TITLE;
            this.homePageSelector.push(homePageTitle);
            const homePageOption = this.createDiv();
            homePageOption.innerHTML = constants_1.HOME_PAGE_TYPE;
            homePageOption.className = appConstants.PAGE_OPTION;
            homePageOption.onclick = this.openPage(homePage);
            this.homePageSelector.push(homePageOption);
            // Add homepage to page map
            this.PAGE_MAP[homePage.id] = homePage;
        };
        /* Character Selectors */
        this.createCharacterSelectors = () => {
            const charactersTitle = this.createDiv();
            charactersTitle.innerHTML = constants_1.CHARACTERS_PAGE_TYPE;
            charactersTitle.className = appConstants.SECTION_TITLE;
            this.charactersSelector.push(charactersTitle);
            // Create tag input
            const characterTagsInput = this.createInput();
            characterTagsInput.className = appConstants.SECTION_TAG_SEARCH;
            characterTagsInput.placeholder = appConstants.TAG_SEARCH_PLACEHOLDER;
            characterTagsInput.oninput = this.searchForTags(constants_1.CHARACTERS_PAGE_TYPE);
            this.charactersSelector.push(characterTagsInput);
            // Create selected tag area
            const characterSelectedTagSection = this.createDiv();
            characterSelectedTagSection.className = appConstants.SELECTED_TAG_RESULTS;
            this.charactersSelector.push(characterSelectedTagSection);
            // Create tag results
            const characterTagSection = this.createDiv();
            characterTagSection.className = appConstants.TAG_RESULTS;
            this.charactersSelector.push(characterTagSection);
            const characterOptionsDiv = this.createDiv();
            characterOptionsDiv.className = appConstants.PAGE_OPTION_CONTAINER;
            characters.forEach((character) => {
                const selector = this.createDiv();
                selector.innerHTML = character.name;
                selector.className = appConstants.PAGE_OPTION;
                selector.onclick = this.openPage(character);
                // Add option to div
                characterOptionsDiv.appendChild(selector);
                // Add option to default character options
                this.DEFAULT_CHARACTERS_OPTIONS.push(selector);
                // Add tags to set
                if (character.tags) {
                    this.ALL_CHARACTER_TAGS = new Set([...this.ALL_CHARACTER_TAGS, ...character.tags]);
                    this.addPageTags(character);
                }
                // Add character page to page map
                this.PAGE_MAP[character.id] = character;
            });
            this.charactersSelector.push(characterOptionsDiv);
        };
        /* Note Selectors */
        this.createNoteSelectors = () => {
            const notesTitle = this.createDiv();
            notesTitle.innerHTML = constants_1.NOTES_PAGE_TYPE;
            notesTitle.className = appConstants.SECTION_TITLE;
            this.notesSelector.push(notesTitle);
            // Create tag input
            const noteTagsInput = this.createInput();
            noteTagsInput.className = appConstants.SECTION_TAG_SEARCH;
            noteTagsInput.placeholder = appConstants.TAG_SEARCH_PLACEHOLDER;
            noteTagsInput.oninput = this.searchForTags(constants_1.NOTES_PAGE_TYPE);
            this.notesSelector.push(noteTagsInput);
            // Create selected tag area
            const noteSelectedTagSection = this.createDiv();
            noteSelectedTagSection.className = appConstants.SELECTED_TAG_RESULTS;
            this.notesSelector.push(noteSelectedTagSection);
            // Create tag results
            const noteTagSection = this.createDiv();
            noteTagSection.className = appConstants.TAG_RESULTS;
            this.notesSelector.push(noteTagSection);
            const noteOptionsDiv = this.createDiv();
            noteOptionsDiv.className = appConstants.PAGE_OPTION_CONTAINER;
            notes.forEach((note) => {
                const selector = this.createDiv();
                selector.innerHTML = note.name;
                selector.className = appConstants.PAGE_OPTION;
                selector.onclick = this.openPage(note);
                // Add option to div
                noteOptionsDiv.appendChild(selector);
                // Add option to default note options
                this.DEFAULT_NOTES_OPTIONS.push(selector);
                // Add tags to set
                if (note.tags) {
                    this.ALL_NOTE_TAGS = new Set([...this.ALL_NOTE_TAGS, ...note.tags]);
                    this.addPageTags(note);
                }
                // Add note page to page map
                this.PAGE_MAP[note.id] = note;
            });
            this.notesSelector.push(noteOptionsDiv);
        };
        this.render = () => {
            /* Generate Selectors */
            this.createHomeSelectors();
            this.createCharacterSelectors();
            this.createNoteSelectors();
            /* Icon Click Functions */
            this.homeIcon.onclick = this.setHomeSelectors;
            this.characterIcon.onclick = this.setCharactersSelectors;
            this.notesIcon.onclick = this.setNotesSelectors;
            /* Zoomed Modal Click */
            this.zoomedImageSection.onclick = this.closeZoomModal;
            /* Dark Mode Set */
            this.darkModeToggle.onchange = (e) => {
                const target = e.target;
                this.changeToDarkMode(target.checked);
            };
            /* Preload images */
            this.preloadImages();
            /* Page Selector Modal Click Function */
            this.pageSelectorModal.onclick = () => this.toggleSidebar(false);
            /* Set Home Selectors by default */
            this.pageSelector.replaceChildren(...this.homePageSelector);
            /* Add Event Listener for resizing */
            window.addEventListener('resize', this.handleResize);
            /* Check if mobile and set */
            if (window.innerWidth < this.MOBILE_WIDTH_LIMIT) {
                this.changeToMobile(true);
            }
            /* Default to Home Page */
            this.openPage(homePage)();
            /* Change to Dark Mode if necessary from query params */
            const initSearchParams = new URLSearchParams(window.location.search);
            const initDark = initSearchParams.get('dark') || initSearchParams.get('d');
            if (initDark === 'true' || initDark === 't') {
                const checkIcon = this.darkModeToggle;
                checkIcon.checked = true;
                this.changeToDarkMode(true);
            }
        };
        /* Get DOM Elements */
        this.mainContent = this.findElement(appConstants.MAIN_CLASS);
        this.pageContent = this.findElement(appConstants.PAGE_CONTENT_CLASS);
        // Selectors
        this.sectionSelector = this.findElement(appConstants.SECTION_SELECTOR_CLASS);
        this.pageSelector = this.findElement(appConstants.PAGE_SELECTOR_CLASS);
        // Modal
        this.pageSelectorModal = this.findElement(appConstants.PAGE_SELECTOR_MODAL);
        // Icons
        this.homeIcon = this.findElement(appConstants.HOME_ICON_CLASS);
        this.characterIcon = this.findElement(appConstants.CHARACTER_ICON_CLASS);
        this.notesIcon = this.findElement(appConstants.NOTES_ICON_CLASS);
        // Zoomed Img Modal
        this.zoomedImageSection = this.findElement(appConstants.ZOOMED_IMAGE_SECTION);
        this.zoomedModal = this.findElement(appConstants.ZOOMED_IMAGE_MODAL);
        // Dark mode toggle
        this.darkModeToggle = this.findElement(appConstants.DARK_MODE_TOGGLE);
    }
}
exports.default = App;
