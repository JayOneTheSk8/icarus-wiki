import { fromPascalToTitle } from './util'
import { ASSOCIATIONS } from '../constants'

export default (sectionName: string, customSectionName: string): string => `import { AssociationsSection } from '../../../DataTypes'${
    sectionName === ASSOCIATIONS ? "\nimport { ASSOCIATIONS } from '../../../constants'" : ''
}

const associations: AssociationsSection = {
    title: ${sectionName === ASSOCIATIONS ? 'ASSOCIATIONS' : `'${fromPascalToTitle(customSectionName)}'`},
    associations: [
        {
            associationName: '',
            associationPageIds: []
        }
    ]
}

export default associations
`
