"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
exports.default = (sectionName) => `import { PageSection } from '../../../DataTypes'${(0, util_1.inSectionTitlesList)(sectionName) ? `\n${(0, util_1.importSectionTitleConst)(sectionName)}` : ''}

const ${(0, util_1.fromPascalToCamel)(sectionName)}: PageSection = {
    title: ${(0, util_1.sectionTitleConst)(sectionName) || `'${(0, util_1.fromPascalToTitle)(sectionName)}'`},
    body: ''
}

export default ${(0, util_1.fromPascalToCamel)(sectionName)}
`;
