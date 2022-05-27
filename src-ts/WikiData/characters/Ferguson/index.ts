import { DRIVE_VIEW_PREFIX } from '../../../constants'
import { Page } from '../../../DataTypes'
import { FERGUSON_PAGE_ID } from '../../../page-ids'

import attributes from './attributes'
import headline from './headline'
import appearance from './appearance'
import associations from './associations'

const Ferguson: Page = {
    id: FERGUSON_PAGE_ID,
    name: 'Sgt. Ferguson',
    pageImage: {
        url: DRIVE_VIEW_PREFIX + '1RWqIfCXbWc9K4gbW7p7KMQFWOpdhhwmK'
    },
    sections: [
        attributes,
        headline,
        appearance,
        associations,
    ]
}

export default Ferguson
