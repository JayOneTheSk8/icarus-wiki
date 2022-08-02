import { Page } from '../../../DataTypes'
import { CHARACTERS_PAGE_TYPE, imgurLink } from '../../../constants'
import { DR_WEED_PAGE_ID } from '../../../page-ids'
import { DMPA_EMPLOYEE, HERO, META_HUMAN, PARANORMAL, PSYCHIC } from '../tags'

import appearance from './appearance'
import attributes from './attributes'
import headline from './headline'
import associations from './associations'

const DrWeed: Page = {
    id: DR_WEED_PAGE_ID,
    type: CHARACTERS_PAGE_TYPE,
    name: 'Dr Weed',
    pageImage: {
        url: imgurLink('88DOnEU')
    },
    sections: [
        attributes,
        headline,
        appearance,
        associations,
    ],
    tags: new Set([
        META_HUMAN,
        PSYCHIC,
        DMPA_EMPLOYEE,
        HERO,
        PARANORMAL,
    ])
}

export default DrWeed
