import { Page } from '../../../DataTypes'
import { CHARACTERS_PAGE_TYPE, imgurLink } from '../../../constants'
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
        url: imgurLink('Ca0uJT8'),
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
