/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/WikiData/HomePage.js":
/*!**********************************!*\
  !*** ./src/WikiData/HomePage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nvar headline = {\n  title: 'Home Page',\n  body: 'Icarus is a cool story bro.'\n};\nvar HomePage = {\n  name: 'Icarus Wiki',\n  sections: [headline]\n};\nexports[\"default\"] = HomePage;\n\n//# sourceURL=webpack://icarus-wiki/./src/WikiData/HomePage.js?");

/***/ }),

/***/ "./src/WikiData/characters/RusselKing.js":
/*!***********************************************!*\
  !*** ./src/WikiData/characters/RusselKing.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar constants_1 = __webpack_require__(/*! ../../constants */ \"./src/constants.js\");\n\nvar headline = {\n  title: constants_1.HEADLINE,\n  body: 'Russel King is one of the main characters in the story \"Icarus\".'\n};\nvar appearance = {\n  title: constants_1.APPEARANCE,\n  body: 'Russel has an afro.'\n};\nvar abilities = {\n  title: constants_1.ABILITIES,\n  body: 'Russel has wings.'\n};\nvar RusselKing = {\n  name: \"Russel King\",\n  sections: [headline, appearance, abilities]\n};\nexports[\"default\"] = RusselKing;\n\n//# sourceURL=webpack://icarus-wiki/./src/WikiData/characters/RusselKing.js?");

/***/ }),

/***/ "./src/WikiData/characters/index.js":
/*!******************************************!*\
  !*** ./src/WikiData/characters/index.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar RusselKing_1 = __importDefault(__webpack_require__(/*! ./RusselKing */ \"./src/WikiData/characters/RusselKing.js\"));\n\nexports[\"default\"] = [RusselKing_1[\"default\"]];\n\n//# sourceURL=webpack://icarus-wiki/./src/WikiData/characters/index.js?");

/***/ }),

/***/ "./src/WikiData/index.js":
/*!*******************************!*\
  !*** ./src/WikiData/index.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar HomePage_1 = __importDefault(__webpack_require__(/*! ./HomePage */ \"./src/WikiData/HomePage.js\"));\n\nvar characters_1 = __importDefault(__webpack_require__(/*! ./characters */ \"./src/WikiData/characters/index.js\"));\n\nvar notes_1 = __importDefault(__webpack_require__(/*! ./notes */ \"./src/WikiData/notes/index.js\"));\n\nvar WikiData = {\n  homePage: HomePage_1[\"default\"],\n  characters: characters_1[\"default\"],\n  notes: notes_1[\"default\"]\n};\nexports[\"default\"] = WikiData;\n\n//# sourceURL=webpack://icarus-wiki/./src/WikiData/index.js?");

/***/ }),

/***/ "./src/WikiData/notes/StoneFaced.js":
/*!******************************************!*\
  !*** ./src/WikiData/notes/StoneFaced.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar constants_1 = __webpack_require__(/*! ../../constants */ \"./src/constants.js\");\n\nvar description = {\n  title: constants_1.DESCRIPTION,\n  body: 'Stone-face(d) is just a common way of describing the -_- face.'\n};\nvar StoneFaced = {\n  name: \"Stone-Faced\",\n  sections: [description]\n};\nexports[\"default\"] = StoneFaced;\n\n//# sourceURL=webpack://icarus-wiki/./src/WikiData/notes/StoneFaced.js?");

/***/ }),

/***/ "./src/WikiData/notes/TrialOfSteel.js":
/*!********************************************!*\
  !*** ./src/WikiData/notes/TrialOfSteel.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar constants_1 = __webpack_require__(/*! ../../constants */ \"./src/constants.js\");\n\nvar description = {\n  title: constants_1.DESCRIPTION,\n  body: 'The Trial of Steel is an event run by Radio in his mansion.'\n};\nvar TrialOfSteel = {\n  name: \"Trial of Steel\",\n  sections: [description]\n};\nexports[\"default\"] = TrialOfSteel;\n\n//# sourceURL=webpack://icarus-wiki/./src/WikiData/notes/TrialOfSteel.js?");

/***/ }),

/***/ "./src/WikiData/notes/index.js":
/*!*************************************!*\
  !*** ./src/WikiData/notes/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar StoneFaced_1 = __importDefault(__webpack_require__(/*! ./StoneFaced */ \"./src/WikiData/notes/StoneFaced.js\"));\n\nvar TrialOfSteel_1 = __importDefault(__webpack_require__(/*! ./TrialOfSteel */ \"./src/WikiData/notes/TrialOfSteel.js\"));\n\nexports[\"default\"] = [StoneFaced_1[\"default\"], TrialOfSteel_1[\"default\"]];\n\n//# sourceURL=webpack://icarus-wiki/./src/WikiData/notes/index.js?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.ATTRIBUTES = exports.GALLERY = exports.DESCRIPTION = exports.HISTORY = exports.HEADLINE = exports.APPEARANCE = exports.ABILITIES = void 0;\n/* Character Section Names */\n\nexports.ABILITIES = 'Abilities';\nexports.APPEARANCE = 'Appearance';\nexports.HEADLINE = 'Headline';\nexports.HISTORY = 'History';\n/* Note Section Names */\n\nexports.DESCRIPTION = 'Description';\n/* Page Sections */\n\nexports.GALLERY = 'Gallery';\nexports.ATTRIBUTES = 'Attributes';\n\n//# sourceURL=webpack://icarus-wiki/./src/constants.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar WikiData_1 = __importDefault(__webpack_require__(/*! ./WikiData */ \"./src/WikiData/index.js\"));\n\nvar constants_1 = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n\nvar _WikiData_1$default = WikiData_1[\"default\"],\n    homePage = _WikiData_1$default.homePage,\n    characters = _WikiData_1$default.characters,\n    notes = _WikiData_1$default.notes;\n/* Constants */\n\nvar MOBILE_WIDTH_LIMIT = 1000;\nvar SECTION_TITLE = 'section-title';\nvar PAGE_OPTION = 'page-option';\nvar MAIN_CLASS = 'main';\nvar PAGE_CONTENT_CLASS = 'page-content';\nvar SECTION_SELECTOR_CLASS = 'section-selector';\nvar PAGE_SELECTOR_CLASS = 'page-selector';\nvar HOME_ICON_CLASS = 'home-icon';\nvar CHARACTER_ICON_CLASS = 'character-icon';\nvar NOTES_ICON_CLASS = 'notes-icon';\nvar PAGE_SELECTOR_MODAL = 'page-selector-modal';\nvar PAGE_SELECTOR_MODAL_SHOW_CLASS = 'page-selector-modal-show';\nvar PAGE_SELECTOR_MODAL_HIDE_CLASS = 'page-selector-modal-hide';\nvar MAIN_MOBILE_CLASS = 'main-mobile';\nvar PAGE_CONTENT_MOBILE_CLASS = 'page-content-mobile';\nvar SECTION_SELECTOR_MOBILE_CLASS = 'section-selector-mobile';\nvar PAGE_SELECTOR_MOBILE_SHOW_CLASS = 'page-selector-mobile-show';\nvar PAGE_SELECTOR_MOBILE_HIDE_CLASS = 'page-selector-mobile-hide';\nvar HOME_ICON_MOBILE_CLASS = 'home-icon-mobile';\nvar CHARACTER_ICON_MOBILE_CLASS = 'character-icon-mobile';\nvar NOTES_ICON_MOBILE_CLASS = 'notes-icon-mobile';\n/* State Variables */\n\nvar usingMobile = false;\nvar sidebarOpen = false;\n/* Get HTML Elements Functions */\n\nvar createDiv = function createDiv() {\n  return document.createElement('div');\n};\n\nvar createImg = function createImg() {\n  return document.createElement('img');\n};\n\nvar findElement = function findElement(id) {\n  return document.getElementById(id);\n};\n/* DOM Elements */\n\n\nvar mainContent = findElement(MAIN_CLASS);\nvar pageContent = findElement(PAGE_CONTENT_CLASS); // Selectors\n\nvar sectionSelector = findElement(SECTION_SELECTOR_CLASS);\nvar pageSelector = findElement(PAGE_SELECTOR_CLASS); // Modal\n\nvar pageSelectorModal = findElement(PAGE_SELECTOR_MODAL); // Icons\n\nvar homeIcon = findElement(HOME_ICON_CLASS);\nvar characterIcon = findElement(CHARACTER_ICON_CLASS);\nvar notesIcon = findElement(NOTES_ICON_CLASS);\n/* Toggle Dropdown */\n\nvar toggleSidebar = function toggleSidebar(openSidebar) {\n  pageSelector.className = openSidebar ? PAGE_SELECTOR_MOBILE_SHOW_CLASS : PAGE_SELECTOR_MOBILE_HIDE_CLASS;\n  pageSelectorModal.className = openSidebar ? PAGE_SELECTOR_MODAL_SHOW_CLASS : PAGE_SELECTOR_MODAL_HIDE_CLASS;\n  sidebarOpen = openSidebar;\n};\n/* Change to Mobile */\n\n\nvar changeToMobile = function changeToMobile(setMobile) {\n  mainContent.className = setMobile ? MAIN_MOBILE_CLASS : MAIN_CLASS;\n  pageContent.className = setMobile ? PAGE_CONTENT_MOBILE_CLASS : PAGE_CONTENT_CLASS;\n  sectionSelector.className = setMobile ? SECTION_SELECTOR_MOBILE_CLASS : SECTION_SELECTOR_CLASS;\n  homeIcon.className = setMobile ? HOME_ICON_MOBILE_CLASS : HOME_ICON_CLASS;\n  characterIcon.className = setMobile ? CHARACTER_ICON_MOBILE_CLASS : CHARACTER_ICON_CLASS;\n  notesIcon.className = setMobile ? NOTES_ICON_MOBILE_CLASS : NOTES_ICON_CLASS; // Default hide page selector on mobile\n\n  pageSelector.className = setMobile ? PAGE_SELECTOR_MOBILE_HIDE_CLASS : PAGE_SELECTOR_CLASS; // Always hide modal unless toggling sidebar\n\n  pageSelectorModal.className = PAGE_SELECTOR_MODAL_HIDE_CLASS; // Since sidebar will always be closed on resize, adjust the state\n\n  sidebarOpen = false;\n  usingMobile = setMobile;\n};\n/* Set Page Selectors */\n\n\nvar setHomeSelectors = function setHomeSelectors() {\n  pageSelector.replaceChildren.apply(pageSelector, homePageSelector);\n  usingMobile && toggleSidebar(true);\n};\n\nvar setCharactersSelectors = function setCharactersSelectors() {\n  pageSelector.replaceChildren.apply(pageSelector, charactersSelector);\n  usingMobile && toggleSidebar(true);\n};\n\nvar setNotesSelectors = function setNotesSelectors() {\n  pageSelector.replaceChildren.apply(pageSelector, notesSelector);\n  usingMobile && toggleSidebar(true);\n};\n/* Display Page */\n\n\nvar displayPage = function displayPage(page) {\n  var contents = []; // Get Page Name\n\n  var pageName = createDiv();\n  pageName.innerHTML = page.name;\n  pageName.className = 'page-title';\n  contents.push(pageName); // Add Page Image\n\n  if (page.pageImage) {\n    // Create Section\n    var pageImageSection = createDiv();\n    pageImageSection.className = 'page-image-section'; // Create Image\n\n    var pageImage = createImg();\n    pageImage.className = 'page-img';\n    pageImage.src = page.pageImage.url; // Add Image to DIV\n\n    pageImageSection.appendChild(pageImage); // Add caption\n\n    if (page.pageImage.caption) {\n      var pageImageCaption = createDiv();\n      pageImageCaption.className = 'page-img-caption';\n      pageImageCaption.innerHTML = page.pageImage.caption;\n      pageImageSection.appendChild(pageImageCaption);\n    } // Add Page Image Section to Page Contents \n\n\n    contents.push(pageImageSection);\n  } // Go through sections\n\n\n  page.sections.forEach(function (sect, idx) {\n    // Add section title\n    var sectionTitle = createDiv();\n    sectionTitle.innerHTML = sect.title;\n    sectionTitle.className = 'page-section-title';\n    contents.push(sectionTitle);\n    var section;\n\n    switch (sect.title) {\n      case constants_1.GALLERY:\n        // Cast section to Gallery type\n        section = sect; // Create Gallery list\n\n        var galleryImageList = createDiv();\n        galleryImageList.className = 'gallery-image-list'; // Go through images\n\n        section.gallery.forEach(function (image) {\n          // Create image section\n          var galleryImageSection = createDiv();\n          galleryImageSection.className = 'gallery-image-section'; // Create img\n\n          var galleryImg = createImg();\n          galleryImg.className = 'gallery-img';\n          galleryImg.src = image.url; // Add img to section\n\n          galleryImageSection.appendChild(galleryImg); // Add caption\n\n          if (image.caption) {\n            var galleryImageCaption = createDiv();\n            galleryImageCaption.className = 'gallery-img-caption';\n            galleryImageCaption.innerHTML = image.caption;\n            galleryImageSection.appendChild(galleryImageCaption);\n          } // Add image section to list\n\n\n          galleryImageList.appendChild(galleryImageSection);\n        }); // Add gallery image list to contents\n\n        contents.push(galleryImageList);\n        break;\n\n      case constants_1.ATTRIBUTES:\n        section = sect; // Create Attributes list\n\n        var attributesList = createDiv();\n        attributesList.className = 'attributes-list'; // Go through attributes\n\n        section.attributes.forEach(function (attr) {\n          // Create attribute\n          var attribute = createDiv();\n          attribute.className = 'attribute'; // Create title\n\n          var attributeTitle = createDiv();\n          attributeTitle.className = 'attribute-title';\n          attributeTitle.innerHTML = attr.attributeName; // Create Value\n\n          var attributeValue = createDiv();\n          attributeValue.className = 'attribute-value';\n          attributeValue.innerHTML = attr.attributeText; // Append to Attribute\n\n          attribute.appendChild(attributeTitle);\n          attribute.appendChild(attributeValue); // Add to Attributes List\n\n          attributesList.appendChild(attribute);\n        }); // Add attributes list to contents\n\n        contents.push(attributesList);\n        break;\n\n      default:\n        section = sect; // Add section image\n\n        if (section.sectionImage) {\n          // Create image section\n          var sectionImageSection = createDiv();\n          sectionImageSection.className = 'page-section-image-section'; // Create image\n\n          var sectionImage = createImg();\n          sectionImage.className = 'page-section-img';\n          sectionImage.src = section.sectionImage.url; // Add image to section\n\n          sectionImageSection.appendChild(sectionImage); // Add caption\n\n          if (section.sectionImage.caption) {\n            var sectionImageCaption = createDiv();\n            sectionImageCaption.className = 'page-section-img-caption';\n            sectionImageCaption.innerHTML = section.sectionImage.caption;\n            sectionImageSection.appendChild(sectionImageCaption);\n          } // Add image section to contents\n\n\n          contents.push(sectionImageSection);\n        }\n\n        var body;\n\n        if (typeof section.body === 'string') {\n          // Cast as string\n          body = section.body; // Create text body\n\n          var textBody = createDiv();\n          textBody.className = 'page-section-text-body';\n          textBody.innerHTML = body; // Add text body to content\n\n          contents.push(textBody);\n        } else {\n          // Cast as array of subsections\n          body = section.body;\n          body.forEach(function (subSection) {\n            // Add subSection title\n            var subSectionTitle = createDiv();\n            subSectionTitle.className = 'page-subsection-title';\n            subSectionTitle.innerHTML = subSection.subSectionTitle; // Add subSection title to contents\n\n            contents.push(subSectionTitle); // Create Text Body\n\n            var subSectionTextBody = createDiv();\n            subSectionTextBody.className = 'page-subsection-text-body';\n            subSectionTextBody.innerHTML = subSection.subSectionText; // Add subSection image\n\n            if (subSection.subSectionImage) {\n              // Add subSection image section\n              var subSectionImageSection = createDiv();\n              subSectionImageSection.className = 'page-subsection-image-section'; // Create Image\n\n              var subSectionImage = createImg();\n              subSectionImage.className = 'page-subsection-img';\n              subSectionImage.src = subSection.subSectionImage.url; // Add image to section\n\n              subSectionImageSection.appendChild(subSectionImage); // Add caption\n\n              if (subSection.subSectionImage.caption) {\n                var subSectionImageCaption = createDiv();\n                subSectionImageCaption.className = 'page-subsection-img-caption';\n                subSectionImageCaption.innerHTML = subSection.subSectionImage.caption;\n                subSectionImageSection.appendChild(subSectionImageCaption);\n              } // Add image to text body in subsection\n\n\n              subSectionTextBody.appendChild(subSectionImageSection);\n            } // Add text body for subsection\n\n\n            contents.push(subSectionTextBody);\n          });\n        }\n\n        break;\n    }\n  }); // Add spacer\n\n  var spaceBlock = createDiv();\n  spaceBlock.className = 'space-block';\n  contents.push(spaceBlock);\n  return contents;\n};\n/* Open Page */\n\n\nvar openHomePage = function openHomePage() {\n  return function () {\n    pageContent.replaceChildren.apply(pageContent, _toConsumableArray(displayPage(homePage)));\n    sidebarOpen && toggleSidebar(false);\n  };\n};\n\nvar openCharacterPage = function openCharacterPage(index) {\n  return function () {\n    pageContent.replaceChildren.apply(pageContent, _toConsumableArray(displayPage(characters[index])));\n    sidebarOpen && toggleSidebar(false);\n  };\n};\n\nvar openNotesPage = function openNotesPage(index) {\n  return function () {\n    pageContent.replaceChildren.apply(pageContent, _toConsumableArray(displayPage(notes[index])));\n    sidebarOpen && toggleSidebar(false);\n  };\n};\n/* Event Functions */\n\n\nvar handleResize = function handleResize() {\n  // If the width is below the limit and we aren't using mobile elements\n  if (window.innerWidth < MOBILE_WIDTH_LIMIT && !usingMobile) {\n    // Switch to mobile view\n    changeToMobile(true);\n  } else if (window.innerWidth >= MOBILE_WIDTH_LIMIT && usingMobile) {\n    // Otherwise if width is above the limit and we are using mobile\n    // Turn off mobile view\n    changeToMobile(false);\n  }\n};\n/* Home Page Selectors */\n\n\nvar homePageSelector = [];\nvar homePageTitle = createDiv();\nhomePageTitle.innerText = homePage.name;\nhomePageTitle.className = SECTION_TITLE;\nhomePageSelector.push(homePageTitle);\nvar homePageOption = createDiv();\nhomePageOption.innerText = 'Home Page';\nhomePageOption.className = PAGE_OPTION;\nhomePageOption.onclick = openHomePage();\nhomePageSelector.push(homePageOption);\n/* Characters Selectors */\n\nvar charactersSelector = [];\nvar charactersTitle = createDiv();\ncharactersTitle.innerText = 'Characters';\ncharactersTitle.className = SECTION_TITLE;\ncharactersSelector.push(charactersTitle);\ncharacters.forEach(function (character, idx) {\n  var selector = createDiv();\n  selector.innerText = character.name;\n  selector.className = PAGE_OPTION;\n  selector.onclick = openCharacterPage(idx);\n  charactersSelector.push(selector);\n});\n/* Notes Selectors */\n\nvar notesSelector = [];\nvar notesTitle = createDiv();\nnotesTitle.innerText = 'Notes';\nnotesTitle.className = SECTION_TITLE;\nnotesSelector.push(notesTitle);\nnotes.forEach(function (note, idx) {\n  var selector = createDiv();\n  selector.innerText = note.name;\n  selector.className = PAGE_OPTION;\n  selector.onclick = openNotesPage(idx);\n  notesSelector.push(selector);\n});\n/* Icon Click Functions */\n\nhomeIcon.onclick = setHomeSelectors;\ncharacterIcon.onclick = setCharactersSelectors;\nnotesIcon.onclick = setNotesSelectors;\n/* Page Selector Modal Click Function */\n\npageSelectorModal.onclick = function () {\n  return toggleSidebar(false);\n};\n/* Set Home Selectors by default */\n\n\npageSelector.replaceChildren.apply(pageSelector, homePageSelector);\n/* Add Event Listener for resizing */\n\nwindow.addEventListener('resize', handleResize);\n/* Check if mobile and set */\n\nif (window.innerWidth < MOBILE_WIDTH_LIMIT) {\n  changeToMobile(true);\n}\n/* Default to Home Page */\n\n\nopenHomePage()();\n\n//# sourceURL=webpack://icarus-wiki/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;