import { Page } from '../../../DataTypes'
import { CHARACTERS_PAGE_TYPE, imgurLink } from '../../../constants'
import { KALO_AGUIRRE_PAGE_ID } from '../../../page-ids'
import { ANTI_HERO, META_HUMAN, MYTHICAL } from '../tags'

import appearance from './appearance'
import attributes from './attributes'
import headline from './headline'
import associations from './associations'

const KaloAguirre: Page = {
    id: KALO_AGUIRRE_PAGE_ID,
    type: CHARACTERS_PAGE_TYPE,
    name: 'Kalo Aguirre',
    pageImage: {
        url: imgurLink('4Dbbmci')
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

export default KaloAguirre
