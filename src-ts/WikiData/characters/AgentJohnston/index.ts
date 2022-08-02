import { Page } from '../../../DataTypes'
import { CHARACTERS_PAGE_TYPE, imgurLink } from '../../../constants'
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
        url: imgurLink('Tddsa6a')
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
