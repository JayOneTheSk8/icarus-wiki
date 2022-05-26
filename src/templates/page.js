"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
exports.default = (pascalPageName, pageIdConst) => `import { Page } from '../../../DataTypes'
import { ${pageIdConst}_PAGE_ID } from '../../../page-ids'

const ${pascalPageName}: Page = {
    id: ${pageIdConst}_PAGE_ID,
    name: '${(0, util_1.fromPascalToTitle)(pascalPageName)}',
    sections: []
}

export default ${pascalPageName}
`;
