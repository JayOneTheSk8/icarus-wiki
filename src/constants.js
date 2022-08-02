"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imgurLink = exports.DRIVE_VIEW_PREFIX = exports.SECTION_TITLES_LIST = exports.ASSOCIATIONS_TITLES_LIST = exports.ATTRIBUTES_TITLES_LIST = exports.GALLERY_TITLES_LIST = exports.ASSOCIATIONS = exports.ATTRIBUTES = exports.GALLERY = exports.DESCRIPTION = exports.HISTORY = exports.HEADLINE = exports.APPEARANCE = exports.ABILITIES = exports.HOME_PAGE_TYPE = exports.NOTES_PAGE_TYPE = exports.CHARACTERS_PAGE_TYPE = void 0;
/* Page Types */
exports.CHARACTERS_PAGE_TYPE = 'Characters';
exports.NOTES_PAGE_TYPE = 'Notes';
exports.HOME_PAGE_TYPE = 'Home Page';
/* Character Section Names */
exports.ABILITIES = 'Abilities';
exports.APPEARANCE = 'Appearance';
exports.HEADLINE = 'Headline';
exports.HISTORY = 'History';
/* Note Section Names */
exports.DESCRIPTION = 'Description';
/* Page Sections */
exports.GALLERY = 'Gallery';
exports.ATTRIBUTES = 'Attributes';
exports.ASSOCIATIONS = 'Associations';
/* Sections List */
exports.GALLERY_TITLES_LIST = [exports.GALLERY];
exports.ATTRIBUTES_TITLES_LIST = [exports.ATTRIBUTES];
exports.ASSOCIATIONS_TITLES_LIST = [exports.ASSOCIATIONS];
exports.SECTION_TITLES_LIST = [
    exports.ABILITIES,
    exports.APPEARANCE,
    exports.HEADLINE,
    exports.HISTORY,
    exports.DESCRIPTION,
];
/* Google Drive */
exports.DRIVE_VIEW_PREFIX = 'https://drive.google.com/uc?export=view&id=';
/* Imgur */
const imgurLink = (id) => `https://i.imgur.com/${id}.jpg`;
exports.imgurLink = imgurLink;
