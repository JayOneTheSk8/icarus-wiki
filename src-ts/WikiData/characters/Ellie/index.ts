import { Page } from '../../../DataTypes'
import { CHARACTERS_PAGE_TYPE, DRIVE_VIEW_PREFIX } from '../../../constants'
import { ELLIE_PAGE_ID } from '../../../page-ids'
import { ANTI_HERO, META_HUMAN, PARANORMAL } from '../tags'

import attributes from './attributes'
import headline from './headline'
import appearance from './appearance'
import associations from './associations'

const Ellie: Page = {
    id: ELLIE_PAGE_ID,
    type: CHARACTERS_PAGE_TYPE,
    name: 'Ellie',
    pageImage: {
        url: DRIVE_VIEW_PREFIX + '1QDUNU-G4PUT1PbYLAKgJQJFex5ZTZB2y'
    },
    sections: [
        attributes,
        headline,
        appearance,
        associations,
    ],
    tags: new Set([
        ANTI_HERO,
        META_HUMAN,
        PARANORMAL,
    ])
}

export default Ellie
