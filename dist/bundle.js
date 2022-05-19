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

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.DESCRIPTION = exports.HISTORY = exports.HEADLINE = exports.APPEARANCE = exports.ABILITIES = void 0;\n/* Character Section Names */\n\nexports.ABILITIES = 'Abilities';\nexports.APPEARANCE = 'Appearance';\nexports.HEADLINE = 'Headline';\nexports.HISTORY = 'History';\n/* Note Section Names */\n\nexports.DESCRIPTION = 'Description';\n\n//# sourceURL=webpack://icarus-wiki/./src/constants.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar __importDefault = this && this.__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nvar WikiData_1 = __importDefault(__webpack_require__(/*! ./WikiData */ \"./src/WikiData/index.js\"));\n\nvar _WikiData_1$default = WikiData_1[\"default\"],\n    homePage = _WikiData_1$default.homePage,\n    characters = _WikiData_1$default.characters,\n    notes = _WikiData_1$default.notes;\n/* Constants */\n\nvar SECTION_TITLE = 'section-title';\nvar PAGE_OPTION = 'page-option';\n\nvar createDiv = function createDiv() {\n  return document.createElement('div');\n};\n/* DOM Elements */\n\n\nvar pageSelector = document.getElementById('page-selector');\nvar homeIcon = document.getElementById('home-icon');\nvar characterIcon = document.getElementById('character-icon');\nvar notesIcon = document.getElementById('notes-icon');\n/* Set Page Selectors */\n\nvar setHomeSelectors = function setHomeSelectors() {\n  return pageSelector.replaceChildren.apply(pageSelector, homePageSelector);\n};\n\nvar setCharactersSelectors = function setCharactersSelectors() {\n  return pageSelector.replaceChildren.apply(pageSelector, charactersSelector);\n};\n\nvar setNotesSelectors = function setNotesSelectors() {\n  return pageSelector.replaceChildren.apply(pageSelector, notesSelector);\n};\n/* Home Page Selectors */\n\n\nvar homePageSelector = [];\nvar homePageTitle = createDiv();\nhomePageTitle.innerText = homePage.name;\nhomePageTitle.className = SECTION_TITLE;\nhomePageSelector.push(homePageTitle);\n\nvar _iterator = _createForOfIteratorHelper(homePage.sections),\n    _step;\n\ntry {\n  for (_iterator.s(); !(_step = _iterator.n()).done;) {\n    var section = _step.value;\n    var selector = createDiv();\n    selector.innerText = section.title;\n    selector.className = PAGE_OPTION;\n    homePageSelector.push(selector);\n  }\n  /* Characters Selectors */\n\n} catch (err) {\n  _iterator.e(err);\n} finally {\n  _iterator.f();\n}\n\nvar charactersSelector = [];\nvar charactersTitle = createDiv();\ncharactersTitle.innerText = 'Characters';\ncharactersTitle.className = SECTION_TITLE;\ncharactersSelector.push(charactersTitle);\n\nvar _iterator2 = _createForOfIteratorHelper(characters),\n    _step2;\n\ntry {\n  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n    var character = _step2.value;\n\n    var _selector = createDiv();\n\n    _selector.innerText = character.name;\n    _selector.className = PAGE_OPTION;\n    charactersSelector.push(_selector);\n  }\n  /* Notes Selectors */\n\n} catch (err) {\n  _iterator2.e(err);\n} finally {\n  _iterator2.f();\n}\n\nvar notesSelector = [];\nvar notesTitle = createDiv();\nnotesTitle.innerText = 'Notes';\nnotesTitle.className = SECTION_TITLE;\nnotesSelector.push(notesTitle);\n\nvar _iterator3 = _createForOfIteratorHelper(notes),\n    _step3;\n\ntry {\n  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n    var note = _step3.value;\n\n    var _selector2 = createDiv();\n\n    _selector2.innerText = note.name;\n    _selector2.className = PAGE_OPTION;\n    notesSelector.push(_selector2);\n  }\n  /* Icon Click Functions */\n\n} catch (err) {\n  _iterator3.e(err);\n} finally {\n  _iterator3.f();\n}\n\nhomeIcon.onclick = setHomeSelectors;\ncharacterIcon.onclick = setCharactersSelectors;\nnotesIcon.onclick = setNotesSelectors;\n/* Set Home Page by default */\n\npageSelector.replaceChildren.apply(pageSelector, homePageSelector);\n\n//# sourceURL=webpack://icarus-wiki/./src/index.js?");

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