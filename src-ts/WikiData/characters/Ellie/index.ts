import { Page } from '../../../DataTypes'
import { CHARACTERS_PAGE_TYPE, imgurLink } from '../../../constants'
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
        url: imgurLink('XOUwAEk')
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
