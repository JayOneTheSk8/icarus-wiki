import { Page } from '../../../DataTypes'
import { CHARACTERS_PAGE_TYPE, DRIVE_VIEW_PREFIX } from '../../../constants'
import { REGGIE_KING_PAGE_ID } from '../../../page-ids'
import { HERO, MAIN_CHARACTER, META_HUMAN, MYTHICAL } from '../tags'

import attributes from './attributes'
import headline from './headline'
import appearance from './appearance'
import gallery from './gallery'
import associations from './associations'

const ReggieKing: Page = {
    id: REGGIE_KING_PAGE_ID,
    type: CHARACTERS_PAGE_TYPE,
    name: 'Reggie King',
    pageImage: {
        url: DRIVE_VIEW_PREFIX + '1PnMGTIJsaIy__AkWuYpAM4G9-saN4VQ5',
        caption: 'Reggie (Age 16)'
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

export default ReggieKing
