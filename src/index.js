"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WikiData_1 = __importDefault(require("./WikiData"));
const constants_1 = require("./constants");
const { homePage, characters, notes, } = WikiData_1.default;
/* Constants */
const MOBILE_WIDTH_LIMIT = 1000;
const PAGE_MAP = {};
const SECTION_TITLE = 'section-title';
const PAGE_OPTION = 'page-option';
const MAIN_CLASS = 'main';
const PAGE_CONTENT_CLASS = 'page-content';
const SECTION_SELECTOR_CLASS = 'section-selector';
const PAGE_SELECTOR_CLASS = 'page-selector';
const HOME_ICON_CLASS = 'home-icon';
const CHARACTER_ICON_CLASS = 'character-icon';
const NOTES_ICON_CLASS = 'notes-icon';
const PAGE_SELECTOR_MODAL = 'page-selector-modal';
const PAGE_SELECTOR_MODAL_SHOW_CLASS = 'page-selector-modal-show';
const PAGE_SELECTOR_MODAL_HIDE_CLASS = 'page-selector-modal-hide';
const ZOOMED_IMAGE_SECTION = 'zoomed-image-section';
const ZOOMED_IMAGE_SECTION_HIDE = 'zoomed-image-section-hide';
const ZOOMED_IMAGE_SECTION_SHOW = 'zoomed-image-section-show';
const ZOOMED_IMAGE_MODAL = 'zoomed-image-modal';
const ZOOMED_IMAGE_MODAL_HIDE = 'zoomed-image-modal-hide';
const ZOOMED_IMAGE_MODAL_SHOW = 'zoomed-image-modal-show';
const MAIN_MOBILE_CLASS = 'main-mobile';
const PAGE_CONTENT_MOBILE_CLASS = 'page-content-mobile';
const SECTION_SELECTOR_MOBILE_CLASS = 'section-selector-mobile';
const PAGE_SELECTOR_MOBILE_SHOW_CLASS = 'page-selector-mobile-show';
const PAGE_SELECTOR_MOBILE_HIDE_CLASS = 'page-selector-mobile-hide';
const HOME_ICON_MOBILE_CLASS = 'home-icon-mobile';
const CHARACTER_ICON_MOBILE_CLASS = 'character-icon-mobile';
const NOTES_ICON_MOBILE_CLASS = 'notes-icon-mobile';
const DARK_MODE_TOGGLE = 'dark-mode-toggle';
const PRIMARY_MODE_CLASS = 'primary-mode';
const SPACE_BLOCK_CLASS = 'space-block';
const DARK_MODE_CLASS = 'dark-mode';
const SECTION_SELECTOR_DARK_CLASS = 'section-selector-dark';
const PAGE_SELECTOR_DARK_CLASS = 'page-selector-dark ';
const SECTION_SELECTOR_MOBILE_DARK_CLASS = 'section-selector-mobile-dark';
const PAGE_SELECTOR_MOBILE_SHOW_DARK_CLASS = 'page-selector-mobile-show-dark';
const SPACE_BLOCK_DARK_CLASS = 'space-block-dark';
const PAGE_TITLE = 'page-title';
/* State Variables */
var usingMobile = false;
var sidebarOpen = false;
var darkMode = false;
/* Get HTML Elements Functions */
const createDiv = () => document.createElement('div');
const createImg = () => document.createElement('img');
const findElement = (id) => document.getElementById(id);
/* DOM Elements */
const mainContent = findElement(MAIN_CLASS);
const pageContent = findElement(PAGE_CONTENT_CLASS);
// Selectors
const sectionSelector = findElement(SECTION_SELECTOR_CLASS);
const pageSelector = findElement(PAGE_SELECTOR_CLASS);
// Modal
const pageSelectorModal = findElement(PAGE_SELECTOR_MODAL);
// Icons
const homeIcon = findElement(HOME_ICON_CLASS);
const characterIcon = findElement(CHARACTER_ICON_CLASS);
const notesIcon = findElement(NOTES_ICON_CLASS);
// Zoomed Img Modal
const zoomedImageSection = findElement(ZOOMED_IMAGE_SECTION);
const zoomedModal = findElement(ZOOMED_IMAGE_MODAL);
// Dark mode toggle
const darkModeToggle = findElement(DARK_MODE_TOGGLE);
/* Toggle Dropdown */
const toggleSidebar = (openSidebar) => {
    if (darkMode) {
        pageSelector.className = openSidebar ? PAGE_SELECTOR_MOBILE_SHOW_DARK_CLASS : PAGE_SELECTOR_MOBILE_HIDE_CLASS;
    }
    else {
        pageSelector.className = openSidebar ? PAGE_SELECTOR_MOBILE_SHOW_CLASS : PAGE_SELECTOR_MOBILE_HIDE_CLASS;
    }
    pageSelectorModal.className = openSidebar ? PAGE_SELECTOR_MODAL_SHOW_CLASS : PAGE_SELECTOR_MODAL_HIDE_CLASS;
    sidebarOpen = openSidebar;
};
/* Change to Mobile */
const changeToMobile = (setMobile) => {
    if (darkMode) {
        sectionSelector.className = setMobile ? SECTION_SELECTOR_MOBILE_DARK_CLASS : SECTION_SELECTOR_DARK_CLASS;
        // Default hide page selector on mobile
        pageSelector.className = setMobile ? PAGE_SELECTOR_MOBILE_HIDE_CLASS : PAGE_SELECTOR_DARK_CLASS;
    }
    else {
        sectionSelector.className = setMobile ? SECTION_SELECTOR_MOBILE_CLASS : SECTION_SELECTOR_CLASS;
        // Default hide page selector on mobile
        pageSelector.className = setMobile ? PAGE_SELECTOR_MOBILE_HIDE_CLASS : PAGE_SELECTOR_CLASS;
    }
    homeIcon.className = setMobile ? HOME_ICON_MOBILE_CLASS : HOME_ICON_CLASS;
    characterIcon.className = setMobile ? CHARACTER_ICON_MOBILE_CLASS : CHARACTER_ICON_CLASS;
    notesIcon.className = setMobile ? NOTES_ICON_MOBILE_CLASS : NOTES_ICON_CLASS;
    mainContent.className = setMobile ? MAIN_MOBILE_CLASS : MAIN_CLASS;
    pageContent.className = setMobile ? PAGE_CONTENT_MOBILE_CLASS : PAGE_CONTENT_CLASS;
    // Always hide modal unless toggling sidebar
    pageSelectorModal.className = PAGE_SELECTOR_MODAL_HIDE_CLASS;
    // Since sidebar will always be closed on resize, adjust the state
    sidebarOpen = false;
    usingMobile = setMobile;
};
/* Dark Mode Toggle */
const changeToDarkMode = (setDarkMode) => {
    // Adjust primary mode elements
    const primaryModeElements = document.getElementsByClassName(setDarkMode ? PRIMARY_MODE_CLASS : DARK_MODE_CLASS);
    for (const el of primaryModeElements) {
        el.className = setDarkMode ? DARK_MODE_CLASS : PRIMARY_MODE_CLASS;
    }
    // Adjust section selector
    const sectionSelectorElements = document.getElementsByClassName(setDarkMode ? SECTION_SELECTOR_CLASS : SECTION_SELECTOR_DARK_CLASS);
    for (const el of sectionSelectorElements) {
        el.className = setDarkMode ? SECTION_SELECTOR_DARK_CLASS : SECTION_SELECTOR_CLASS;
    }
    // Adjust section selector (mobile)
    const sectionSelectorMobileElements = document.getElementsByClassName(setDarkMode ? SECTION_SELECTOR_MOBILE_CLASS : SECTION_SELECTOR_MOBILE_DARK_CLASS);
    for (const el of sectionSelectorMobileElements) {
        el.className = setDarkMode ? SECTION_SELECTOR_MOBILE_DARK_CLASS : SECTION_SELECTOR_MOBILE_CLASS;
    }
    // Adjust page selector
    const pageSelectorElements = document.getElementsByClassName(setDarkMode ? PAGE_SELECTOR_CLASS : PAGE_SELECTOR_DARK_CLASS);
    for (const el of pageSelectorElements) {
        el.className = setDarkMode ? PAGE_SELECTOR_DARK_CLASS : PAGE_SELECTOR_CLASS;
    }
    // Adjust page selector (mobile)
    const pageSelectorMobileElements = document.getElementsByClassName(setDarkMode ? PAGE_SELECTOR_MOBILE_SHOW_CLASS : PAGE_SELECTOR_MOBILE_SHOW_DARK_CLASS);
    for (const el of pageSelectorMobileElements) {
        el.className = setDarkMode ? PAGE_SELECTOR_MOBILE_SHOW_DARK_CLASS : PAGE_SELECTOR_MOBILE_SHOW_CLASS;
    }
    // Adjust page selector (mobile)
    const spaceBlockElements = document.getElementsByClassName(setDarkMode ? SPACE_BLOCK_CLASS : SPACE_BLOCK_DARK_CLASS);
    for (const el of spaceBlockElements) {
        el.className = setDarkMode ? SPACE_BLOCK_DARK_CLASS : SPACE_BLOCK_CLASS;
    }
    darkMode = setDarkMode;
};
/* Set Page Selectors */
const setHomeSelectors = () => {
    pageSelector.replaceChildren(...homePageSelector);
    usingMobile && toggleSidebar(true);
};
const setCharactersSelectors = () => {
    pageSelector.replaceChildren(...charactersSelector);
    usingMobile && toggleSidebar(true);
};
const setNotesSelectors = () => {
    pageSelector.replaceChildren(...notesSelector);
    usingMobile && toggleSidebar(true);
};
/* Zooom-In */
const findOrientation = (image) => {
    if (image.height > image.width) {
        return 'portrait';
    }
    else {
        return 'landscape';
    }
};
const zoomInImage = (imageSrc) => {
    return () => {
        const zoomedImage = createImg();
        zoomedImage.src = imageSrc;
        zoomedImage.className = `zoomed-img-${findOrientation(zoomedImage)}`;
        zoomedImageSection.appendChild(zoomedImage);
        zoomedImageSection.className = ZOOMED_IMAGE_SECTION_SHOW;
        zoomedModal.className = ZOOMED_IMAGE_MODAL_SHOW;
    };
};
const closeZoomModal = () => {
    zoomedImageSection.replaceChildren();
    zoomedImageSection.className = ZOOMED_IMAGE_SECTION_HIDE;
    zoomedModal.className = ZOOMED_IMAGE_MODAL_HIDE;
};
/* Get HTML Contents */
const getGalleryContents = (section) => {
    // Create Gallery list
    const galleryImageList = createDiv();
    galleryImageList.className = 'gallery-image-list';
    // Go through images
    section.gallery.forEach((image) => {
        // Create image section
        const galleryImageSection = createDiv();
        galleryImageSection.className = 'gallery-image-section';
        // Create img
        const galleryImg = createImg();
        galleryImg.className = 'gallery-img';
        galleryImg.src = image.url;
        galleryImg.onclick = zoomInImage(image.url);
        // Add img to section
        galleryImageSection.appendChild(galleryImg);
        // Add caption
        if (image.caption) {
            const galleryImageCaption = createDiv();
            galleryImageCaption.className = 'gallery-img-caption';
            galleryImageCaption.innerHTML = image.caption;
            galleryImageSection.appendChild(galleryImageCaption);
        }
        // Add image section to list
        galleryImageList.appendChild(galleryImageSection);
    });
    return galleryImageList;
};
const getAttributesContents = (section) => {
    // Create Attributes list
    const attributesList = createDiv();
    attributesList.className = 'attributes-list';
    // Go through attributes
    section.attributes.forEach((attr) => {
        // Create attribute
        const attribute = createDiv();
        attribute.className = 'attribute';
        // Create title
        const attributeTitle = createDiv();
        attributeTitle.className = 'attribute-title';
        attributeTitle.innerHTML = attr.attributeName;
        // Create Value
        const attributeValue = createDiv();
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
const getAssociationsContents = (section) => {
    // Create Associations section
    const associationsSection = createDiv();
    associationsSection.className = 'associations-section';
    section.associations.forEach((assc) => {
        // Create Group
        const associationGroup = createDiv();
        associationGroup.className = 'association-group';
        // Add Title
        const associationTitle = createDiv();
        associationTitle.className = 'association-title';
        associationTitle.innerHTML = assc.associationName;
        associationGroup.appendChild(associationTitle);
        // List pages in association
        assc.associationPageIds.forEach((asscPageId) => {
            const associationPage = PAGE_MAP[asscPageId];
            const pageAssociated = createDiv();
            pageAssociated.className = 'associated-page';
            pageAssociated.innerHTML = associationPage.name;
            // Allow click to link to other pages
            pageAssociated.onclick = () => displayPage(getPageHTMLContents(associationPage));
            // Add page to association group
            associationGroup.appendChild(pageAssociated);
        });
        // Add group to associations section
        associationsSection.appendChild(associationGroup);
    });
    return associationsSection;
};
const addPageSectionToContents = (currentContents, section) => {
    // Add section image
    if (section.sectionImage) {
        // Create image section
        const sectionImageSection = createDiv();
        sectionImageSection.className = 'page-section-image-section';
        // Create image
        const sectionImage = createImg();
        sectionImage.className = 'page-section-img';
        sectionImage.src = section.sectionImage.url;
        sectionImage.onclick = zoomInImage(section.sectionImage.url);
        // Add image to section
        sectionImageSection.appendChild(sectionImage);
        // Add caption
        if (section.sectionImage.caption) {
            const sectionImageCaption = createDiv();
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
        const textBody = createDiv();
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
            const subSectionTitle = createDiv();
            subSectionTitle.className = 'page-subsection-title';
            subSectionTitle.innerHTML = subSection.subSectionTitle;
            // Add subSection title to contents
            currentContents.push(subSectionTitle);
            // Create Text Body
            const subSectionTextBody = createDiv();
            subSectionTextBody.className = 'page-subsection-text-body';
            subSectionTextBody.innerHTML = subSection.subSectionText;
            // Add subSection image
            if (subSection.subSectionImage) {
                // Add subSection image section
                const subSectionImageSection = createDiv();
                subSectionImageSection.className = 'page-subsection-image-section';
                // Create Image
                const subSectionImage = createImg();
                subSectionImage.className = 'page-subsection-img';
                subSectionImage.src = subSection.subSectionImage.url;
                subSectionImage.onclick = zoomInImage(subSection.subSectionImage.url);
                // Add image to section
                subSectionImageSection.appendChild(subSectionImage);
                // Add caption
                if (subSection.subSectionImage.caption) {
                    const subSectionImageCaption = createDiv();
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
const getPageHTMLContents = (page) => {
    const contents = [];
    // Get Page Name
    const pageName = createDiv();
    pageName.innerHTML = page.name;
    pageName.className = 'page-title';
    contents.push(pageName);
    // Add Page Image
    if (page.pageImage) {
        // Create Section
        const pageImageSection = createDiv();
        pageImageSection.className = 'page-image-section';
        // Create Image
        const pageImage = createImg();
        pageImage.className = 'page-img';
        pageImage.src = page.pageImage.url;
        pageImage.onclick = zoomInImage(page.pageImage.url);
        // Add Image to DIV
        pageImageSection.appendChild(pageImage);
        // Add caption
        if (page.pageImage.caption) {
            const pageImageCaption = createDiv();
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
        const sectionTitle = createDiv();
        sectionTitle.innerHTML = section.title;
        sectionTitle.className = 'page-section-title';
        contents.push(sectionTitle);
        if (constants_1.GALLERY_TITLES_LIST.includes(section.title)) {
            contents.push(getGalleryContents(section));
        }
        else if (constants_1.ATTRIBUTES_TITLES_LIST.includes(section.title)) {
            contents.push(getAttributesContents(section));
        }
        else if (constants_1.ASSOCIATIONS_TITLES_LIST.includes(section.title)) {
            contents.push(getAssociationsContents(section));
        }
        else {
            addPageSectionToContents(contents, section);
        }
    });
    // Add spacer
    const spaceBlock = createDiv();
    spaceBlock.className = darkMode ? SPACE_BLOCK_DARK_CLASS : SPACE_BLOCK_CLASS;
    contents.push(spaceBlock);
    return contents;
};
/* Preload Images */
const preloadGalleryImages = (gallerySection) => {
    for (const image of gallerySection.gallery) {
        const i = createImg();
        i.src = image.url;
    }
};
const preloadSubSectionImage = (subSection) => {
    if (subSection.subSectionImage) {
        const i = createImg();
        i.src = subSection.subSectionImage.url;
    }
};
const preloadPageSectionImage = (pageSection) => {
    if (pageSection.sectionImage) {
        const i = createImg();
        i.src = pageSection.sectionImage.url;
    }
    if (typeof pageSection.body !== 'string') {
        for (const subSection of pageSection.body) {
            preloadSubSectionImage(subSection);
        }
    }
};
const preloadPageImage = (page) => {
    if (page.pageImage) {
        const i = createImg();
        i.src = page.pageImage.url;
    }
    for (const sect of page.sections) {
        if (constants_1.ATTRIBUTES_TITLES_LIST.includes(sect.title) || constants_1.ASSOCIATIONS_TITLES_LIST.includes(sect.title)) {
            // Attributes and Associations cannot have images
            continue;
        }
        else if (constants_1.GALLERY_TITLES_LIST.includes(sect.title)) {
            preloadGalleryImages(sect);
        }
        else {
            preloadPageSectionImage(sect);
        }
    }
};
const preloadImages = () => {
    preloadPageImage(homePage);
    for (const characterPage of characters) {
        preloadPageImage(characterPage);
    }
    for (const notePage of notes) {
        preloadPageImage(notePage);
    }
};
/* Open Page */
const displayPage = (pageContents) => {
    // Update Page
    pageContent.replaceChildren(...pageContents);
    // Scroll to top
    window.scrollTo(0, 0);
};
const openHomePage = () => {
    return () => {
        const currentPageTitle = document.getElementsByClassName(PAGE_TITLE)[0];
        // Only switch page if page is not already loaded
        if (!currentPageTitle || currentPageTitle.innerHTML !== homePage.name) {
            displayPage(getPageHTMLContents(homePage));
        }
        sidebarOpen && toggleSidebar(false);
    };
};
const openCharacterPage = (index) => {
    return () => {
        const currentPageTitle = document.getElementsByClassName(PAGE_TITLE)[0];
        // Only switch page if page is not already loaded
        if (!currentPageTitle || currentPageTitle.innerHTML !== characters[index].name) {
            displayPage(getPageHTMLContents(characters[index]));
        }
        sidebarOpen && toggleSidebar(false);
    };
};
const openNotesPage = (index) => {
    return () => {
        const currentPageTitle = document.getElementsByClassName(PAGE_TITLE)[0];
        // Only switch page if page is not already loaded
        if (!currentPageTitle || currentPageTitle.innerHTML !== notes[index].name) {
            displayPage(getPageHTMLContents(notes[index]));
        }
        sidebarOpen && toggleSidebar(false);
    };
};
/* Event Functions */
const handleResize = () => {
    // If the width is below the limit and we aren't using mobile elements
    if (window.innerWidth < MOBILE_WIDTH_LIMIT && !usingMobile) {
        // Switch to mobile view
        changeToMobile(true);
    }
    else if (window.innerWidth >= MOBILE_WIDTH_LIMIT && usingMobile) {
        // Otherwise if width is above the limit and we are using mobile
        // Turn off mobile view
        changeToMobile(false);
    }
};
/* Home Page Selectors */
const homePageSelector = [];
const homePageTitle = createDiv();
homePageTitle.innerText = homePage.name;
homePageTitle.className = SECTION_TITLE;
homePageSelector.push(homePageTitle);
const homePageOption = createDiv();
homePageOption.innerText = 'Home Page';
homePageOption.className = PAGE_OPTION;
homePageOption.onclick = openHomePage();
homePageSelector.push(homePageOption);
// Add homepage to page map
PAGE_MAP[homePage.id] = homePage;
/* Characters Selectors */
const charactersSelector = [];
const charactersTitle = createDiv();
charactersTitle.innerText = 'Characters';
charactersTitle.className = SECTION_TITLE;
charactersSelector.push(charactersTitle);
characters.forEach((character, idx) => {
    const selector = createDiv();
    selector.innerText = character.name;
    selector.className = PAGE_OPTION;
    selector.onclick = openCharacterPage(idx);
    charactersSelector.push(selector);
    // Add character page to page map
    PAGE_MAP[character.id] = character;
});
/* Notes Selectors */
const notesSelector = [];
const notesTitle = createDiv();
notesTitle.innerText = 'Notes';
notesTitle.className = SECTION_TITLE;
notesSelector.push(notesTitle);
notes.forEach((note, idx) => {
    const selector = createDiv();
    selector.innerText = note.name;
    selector.className = PAGE_OPTION;
    selector.onclick = openNotesPage(idx);
    notesSelector.push(selector);
    // Add note page to page map
    PAGE_MAP[note.id] = note;
});
/* Icon Click Functions */
homeIcon.onclick = setHomeSelectors;
characterIcon.onclick = setCharactersSelectors;
notesIcon.onclick = setNotesSelectors;
/* Zoomed Modal Click */
zoomedImageSection.onclick = closeZoomModal;
/* Dark Mode Set */
darkModeToggle.onchange = (e) => {
    const target = e.target;
    changeToDarkMode(target.checked);
};
/* Preload images */
preloadImages();
/* Page Selector Modal Click Function */
pageSelectorModal.onclick = () => toggleSidebar(false);
/* Set Home Selectors by default */
pageSelector.replaceChildren(...homePageSelector);
/* Add Event Listener for resizing */
window.addEventListener('resize', handleResize);
/* Check if mobile and set */
if (window.innerWidth < MOBILE_WIDTH_LIMIT) {
    changeToMobile(true);
}
/* Default to Home Page */
openHomePage()();
