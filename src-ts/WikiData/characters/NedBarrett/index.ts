import { Page } from '../../../DataTypes'
import { CHARACTERS_PAGE_TYPE, imgurLink } from '../../../constants'
import { NED_BARRETT_PAGE_ID } from '../../../page-ids'
import { ANTI_HERO, META_HUMAN, PARANORMAL } from '../tags'

import appearance from './appearance'
import attributes from './attributes'
import headline from './headline'
import associations from './associations'

const NedBarrett: Page = {
    id: NED_BARRETT_PAGE_ID,
    type: CHARACTERS_PAGE_TYPE,
    name: 'Ned Barrett',
    pageImage: {
        url: imgurLink('oPg2qQX')
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

export default NedBarrett
