import { Page } from '../../../DataTypes'
import { DRIVE_VIEW_PREFIX } from '../../../constants'
import { DR_WEED_PAGE_ID } from '../../../page-ids'

import appearance from './appearance'
import attributes from './attributes'
import headline from './headline'

const DrWeed: Page = {
    id: DR_WEED_PAGE_ID,
    name: 'Dr Weed',
    pageImage: {
        url: DRIVE_VIEW_PREFIX + '1Qm31QZc0p2sZlo7w8eq7hJFEGD8kyWhx'
    },
    sections: [
        attributes,
        headline,
        appearance,
    ]
}

export default DrWeed
