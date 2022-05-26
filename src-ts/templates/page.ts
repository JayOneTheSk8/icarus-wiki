export default (originalPageName: string, pascalPageName: string, pageIdConst: string): string => `import { Page } from '../../../DataTypes'
import { ${pageIdConst}_PAGE_ID } from '../../../page-ids'

const ${pascalPageName}: Page = {
    id: ${pageIdConst}_PAGE_ID,
    name: '${originalPageName}',
    sections: []
}

export default ${pascalPageName}
`
