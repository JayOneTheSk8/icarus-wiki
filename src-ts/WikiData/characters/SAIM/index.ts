import { Page } from '../../../DataTypes'
import { CHARACTERS_PAGE_TYPE } from '../../../constants'
import { SAIM_PAGE_ID } from '../../../page-ids'
import { AI, ARTIFICIAL_INTELLIGENCE } from '../tags'

import appearance from './appearance'
import attributes from './attributes'
import headline from './headline'

const SAIM: Page = {
    id: SAIM_PAGE_ID,
    type: CHARACTERS_PAGE_TYPE,
    name: 'SAIM',
    sections: [
        attributes,
        headline,
        appearance,
    ],
    tags: new Set([
        AI,
        ARTIFICIAL_INTELLIGENCE,
    ])
}

export default SAIM
