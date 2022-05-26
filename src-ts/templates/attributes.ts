import { fromPascalToTitle } from './util'
import { ATTRIBUTES } from '../constants'

export default (sectionName: string, customSectionName: string): string => `import { AttributesSection } from '../../../DataTypes'${
    sectionName === ATTRIBUTES ? `\nimport { ATTRIBUTES } from '../../../constants'` : ''
}

const attributes: AttributesSection = {
    title: ${sectionName === ATTRIBUTES ? 'ATTRIBUTES' : `'${fromPascalToTitle(customSectionName)}'`},
    attributes: [
        {
            attributeName: '',
            attributeText: ''
        }
    ]
}

export default attributes
`
