import { Page } from '../../../DataTypes'
import { CHARACTERS_PAGE_TYPE, imgurLink } from '../../../constants'
import { NEMO_PAGE_ID } from '../../../page-ids'
import { ANTI_HERO, META_HUMAN, MYTHICAL } from '../tags'

import attributes from './attributes'
import headline from './headline'
import appearance from './appearance'
import associations from './associations'

const Nemo: Page = {
    id: NEMO_PAGE_ID,
    type: CHARACTERS_PAGE_TYPE,
    name: 'Nemo',
    pageImage: {
        url: imgurLink('e1h8tmn')
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

export default Nemo
