import { Page } from '../../../DataTypes'
import { DRIVE_VIEW_PREFIX } from '../../../constants'
import { ACHILLES_PAGE_ID } from '../../../page-ids'

import appearance from './appearance'
import associations from './associations'
import attributes from './attributes'
import headline from './headline'

const Achilles: Page = {
    id: ACHILLES_PAGE_ID,
    name: 'Achilles',
    pageImage: {
        url: DRIVE_VIEW_PREFIX + '1Pfg4oVvlXURqevxJNxrQHBCMJPre-N56',
        caption: 'Achilles (Age 17)'
    },
    sections: [
        attributes,
        headline,
        appearance,
        associations,
    ]
}

export default Achilles
