import { Page } from '../../../DataTypes'
import { DRIVE_VIEW_PREFIX } from '../../../constants'
import { REGGIE_KING_PAGE_ID } from '../../../page-ids'

import attributes from './attributes'
import headline from './headline'
import appearance from './appearance'
import gallery from './gallery'
import associations from './associations'

const ReggieKing: Page = {
    id: REGGIE_KING_PAGE_ID,
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
    ]
}

export default ReggieKing
