import { Page } from '../../../DataTypes'
import { CHARACTERS_PAGE_TYPE, DRIVE_VIEW_PREFIX } from '../../../constants'
import { MELVIN_GERRITSEN_PAGE_ID } from '../../../page-ids'

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
    ]
}

export default MelvinGerritsen
