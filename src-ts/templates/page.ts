import { fromPascalToTitle } from './util'

export default (pascalPageName: string, pageIdConst: string): string => `import { Page } from '../../../DataTypes'
import { ${pageIdConst}_PAGE_ID } from '../../../page-ids'

const ${pascalPageName}: Page = {
    id: ${pageIdConst}_PAGE_ID,
    name: '${fromPascalToTitle(pascalPageName)}',
    sections: []
}

export default ${pascalPageName}
`
