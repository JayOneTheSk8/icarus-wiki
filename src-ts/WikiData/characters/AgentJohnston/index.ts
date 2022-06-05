import { Page } from '../../../DataTypes'
import { CHARACTERS_PAGE_TYPE, DRIVE_VIEW_PREFIX } from '../../../constants'
import { AGENT_JOHNSTON_PAGE_ID } from '../../../page-ids'
import { DMPA_AGENT, DMPA_EMPLOYEE, META_HUMAN, MYTHICAL } from '../tags'

import attributes from './attributes'
import headline from './headline'
import appearance from './appearance'
import associations from './associations'

const AgentJohnston: Page = {
    id: AGENT_JOHNSTON_PAGE_ID,
    type: CHARACTERS_PAGE_TYPE,
    name: 'Agent Johnston',
    pageImage: {
        url: DRIVE_VIEW_PREFIX + '1Qv_lhqGn8-Mj_0sj7cy2_18dYQVKhWKJ'
    },
    sections: [
        attributes,
        headline,
        appearance,
        associations,
    ],
    tags: new Set([
        DMPA_AGENT,
        DMPA_EMPLOYEE,
        META_HUMAN,
        MYTHICAL,
    ])
}

export default AgentJohnston
