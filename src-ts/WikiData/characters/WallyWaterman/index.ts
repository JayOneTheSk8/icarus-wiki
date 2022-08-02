import { Page } from '../../../DataTypes'
import { CHARACTERS_PAGE_TYPE, imgurLink } from '../../../constants'
import { WALLY_WATERMAN_PAGE_ID } from '../../../page-ids'
import { ANTI_HERO, META_HUMAN, PARANORMAL } from '../tags'

import appearance from './appearance'
import attributes from './attributes'
import headline from './headline'
import associations from './associations'

const WallyWaterman: Page = {
    id: WALLY_WATERMAN_PAGE_ID,
    type: CHARACTERS_PAGE_TYPE,
    name: 'Wally Waterman',
    pageImage: {
        url: imgurLink('3p0LODQ')
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

export default WallyWaterman
