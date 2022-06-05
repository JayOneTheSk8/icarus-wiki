import { Page } from '../../../DataTypes'
import { CHARACTERS_PAGE_TYPE, DRIVE_VIEW_PREFIX } from '../../../constants'
import { RUSSEL_KING_PAGE_ID } from '../../../page-ids'

import appearance from './appearance'
import attributes from './attributes'
import gallery from './gallery'
import headline from './headline'
import associations from './associations'
import { HERO, MAIN_CHARACTER, META_HUMAN, MYTHICAL } from '../tags'

const RusselKing: Page = {
    id: RUSSEL_KING_PAGE_ID,
    type: CHARACTERS_PAGE_TYPE,
    name: 'Russel King',
    pageImage: {
        url: DRIVE_VIEW_PREFIX + '1QAiWVNXwS6Zgvyqxkz2LwEKe1ti3bJ66',
        caption: 'Russel (Age 13)'
    },
    sections: [
        attributes,
        headline,
        appearance,
        associations,
        gallery,
    ],
    tags: new Set([
        META_HUMAN,
        MAIN_CHARACTER,
        HERO,
        MYTHICAL,
    ])
}

export default RusselKing
