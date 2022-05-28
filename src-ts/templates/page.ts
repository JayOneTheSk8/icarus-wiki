import { PageType } from '../DataTypes'
import { CHARACTERS_PAGE_TYPE, NOTES_PAGE_TYPE } from '../constants'
import { fromPascalToTitle } from './util'

const getPageType = (pageType: string): string => {
    switch (pageType) {
        case CHARACTERS_PAGE_TYPE:
            return 'CHARACTERS_PAGE_TYPE'
        case NOTES_PAGE_TYPE:
            return 'NOTES_PAGE_TYPE'
        default:
            return "''"
    }
}

export default (pascalPageName: string, pageIdConst: string, pageType: PageType): string => `import { Page } from '../../../DataTypes'
import { ${getPageType(pageType) } } from '../../../constants'
import { ${pageIdConst}_PAGE_ID } from '../../../page-ids'

const ${pascalPageName}: Page = {
    id: ${pageIdConst}_PAGE_ID,
    type: ${getPageType(pageType)},
    name: '${fromPascalToTitle(pascalPageName)}',
    sections: []
}

export default ${pascalPageName}
`
