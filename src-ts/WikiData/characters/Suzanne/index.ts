import { Page } from '../../../DataTypes'
import { CHARACTERS_PAGE_TYPE, DRIVE_VIEW_PREFIX } from '../../../constants'
import { SUZANNE_PAGE_ID } from '../../../page-ids'
import { ANTI_HERO, META_HUMAN, MYTHICAL } from '../tags'

import attributes from './attributes'
import headline from './headline'
import appearance from './appearance'
import associations from './associations'

const Suzanne: Page = {
    id: SUZANNE_PAGE_ID,
    type: CHARACTERS_PAGE_TYPE,
    name: 'Suzanne',
    pageImage: {
        url: DRIVE_VIEW_PREFIX + '1QMAKo4Z0IdEkB5D_OYlqYYXu_nOysEIo'
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
        MYTHICAL,
    ])
}

export default Suzanne
