"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (originalPageName, pascalPageName, pageIdConst) => `import { Page } from '../../../DataTypes'
import { ${pageIdConst}_PAGE_ID } from '../../../page-ids'

const ${pascalPageName}: Page = {
    id: ${pageIdConst}_PAGE_ID,
    name: '${originalPageName}',
    sections: []
}

export default ${pascalPageName}
`;
