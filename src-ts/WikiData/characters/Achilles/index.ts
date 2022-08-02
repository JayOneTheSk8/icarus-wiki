import { Page } from '../../../DataTypes'
import { CHARACTERS_PAGE_TYPE, imgurLink } from '../../../constants'
import { ACHILLES_PAGE_ID } from '../../../page-ids'
import { HERO, MAIN_CHARACTER, META_HUMAN, PARANORMAL } from '../tags'

import appearance from './appearance'
import associations from './associations'
import attributes from './attributes'
import headline from './headline'

const Achilles: Page = {
    id: ACHILLES_PAGE_ID,
    type: CHARACTERS_PAGE_TYPE,
    name: 'Achilles',
    pageImage: {
        url: imgurLink('uR7mq3B'),
        caption: 'Achilles (Age 17)'
    },
    sections: [
        attributes,
        headline,
        appearance,
        associations,
    ],
    tags: new Set([
        META_HUMAN,
        MAIN_CHARACTER,
        HERO,
        PARANORMAL,
    ])
}

export default Achilles
