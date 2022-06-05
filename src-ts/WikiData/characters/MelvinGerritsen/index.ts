import { Page } from '../../../DataTypes'
import { CHARACTERS_PAGE_TYPE, DRIVE_VIEW_PREFIX } from '../../../constants'
import { MELVIN_GERRITSEN_PAGE_ID } from '../../../page-ids'
import { HERO, MAIN_CHARACTER, META_HUMAN, PARANORMAL } from '../tags'

import appearance from './appearance'
import associations from './associations'
import attributes from './attributes'
import headline from './headline'

const MelvinGerritsen: Page = {
    id: MELVIN_GERRITSEN_PAGE_ID,
    type: CHARACTERS_PAGE_TYPE,
    name: 'Melvin Gerritsen',
    pageImage: {
        url: DRIVE_VIEW_PREFIX + '1RKZWzGgko6hw0mHSDr6_jE0e401WVo2d',
        caption: 'Melvin (Age 15)'
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

export default MelvinGerritsen
