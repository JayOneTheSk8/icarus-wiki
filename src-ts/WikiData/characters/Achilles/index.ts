import { Page } from '../../../DataTypes'
import { CHARACTERS_PAGE_TYPE, DRIVE_VIEW_PREFIX } from '../../../constants'
import { ACHILLES_PAGE_ID } from '../../../page-ids'

import appearance from './appearance'
import associations from './associations'
import attributes from './attributes'
import headline from './headline'

const Achilles: Page = {
    id: ACHILLES_PAGE_ID,
    type: CHARACTERS_PAGE_TYPE,
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
    ],
    tags: new Set([
        'Meta-Human',
        'Main Character',
        'Hero',
        'Paranormal',
    ])
}

export default Achilles
