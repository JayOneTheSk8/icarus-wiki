import {
    inSectionTitlesList,
    importSectionTitleConst,
    sectionTitleConst,
    fromPascalToCamel,
    fromPascalToTitle,
} from './util'

export default (sectionName: string): string => `import { PageSection } from '../../../DataTypes'${
    inSectionTitlesList(sectionName) ? `\n${importSectionTitleConst(sectionName)}` : ''
}

const ${fromPascalToCamel(sectionName)}: PageSection = {
    title: ${sectionTitleConst(sectionName) || `'${fromPascalToTitle(sectionName)}'`},
    body: ''
}

export default ${fromPascalToCamel(sectionName)}
`
