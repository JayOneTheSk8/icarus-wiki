import { CHARACTERS_PAGE_TYPE, imgurLink } from '../../../constants'
import { Page } from '../../../DataTypes'
import { FERGUSON_PAGE_ID } from '../../../page-ids'
import { DMPA_EMPLOYEE, HUMAN } from '../tags'

import attributes from './attributes'
import headline from './headline'
import appearance from './appearance'
import associations from './associations'

const Ferguson: Page = {
    id: FERGUSON_PAGE_ID,
    type: CHARACTERS_PAGE_TYPE,
    name: 'Sgt. Ferguson',
    pageImage: {
        url: imgurLink('u7x4OJP')
    },
    sections: [
        attributes,
        headline,
        appearance,
        associations,
    ],
    tags: new Set([
        HUMAN,
        DMPA_EMPLOYEE,
    ])
}

export default Ferguson
