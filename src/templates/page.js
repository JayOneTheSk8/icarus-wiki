"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const util_1 = require("./util");
const getPageType = (pageType) => {
    switch (pageType) {
        case constants_1.CHARACTERS_PAGE_TYPE:
            return 'CHARACTERS_PAGE_TYPE';
        case constants_1.NOTES_PAGE_TYPE:
            return 'NOTES_PAGE_TYPE';
        default:
            return "''";
    }
};
exports.default = (pascalPageName, pageIdConst, pageType) => `import { Page } from '../../../DataTypes'
import { ${getPageType(pageType)} } from '../../../constants'
import { ${pageIdConst}_PAGE_ID } from '../../../page-ids'

const ${pascalPageName}: Page = {
    id: ${pageIdConst}_PAGE_ID,
    type: ${getPageType(pageType)},
    name: '${(0, util_1.fromPascalToTitle)(pascalPageName)}',
    sections: []
}

export default ${pascalPageName}
`;
