import { Page } from '../../../DataTypes'
import { CHARACTERS_PAGE_TYPE, DRIVE_VIEW_PREFIX } from '../../../constants'
import { OPAL_PAGE_ID } from '../../../page-ids'

import attributes from './attributes'
import headline from './headline'
import appearance from './appearance'
import associations from './associations'
import { DMPA_EMPLOYEE, HUMAN } from '../tags'

const Opal: Page = {
    id: OPAL_PAGE_ID,
    type: CHARACTERS_PAGE_TYPE,
    name: 'Opal',
    pageImage: {
        url: DRIVE_VIEW_PREFIX + '1RAPKHJCj1YYkN7Gb5OhJTZYnBjDKllyA'
    },
    sections: [
        attributes,
        headline,
        appearance,
        associations
    ],
    tags: new Set([
        DMPA_EMPLOYEE,
        HUMAN,
    ])
}

export default Opal
