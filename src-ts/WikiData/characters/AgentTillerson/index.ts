import { Page } from '../../../DataTypes'
import { CHARACTERS_PAGE_TYPE, DRIVE_VIEW_PREFIX } from '../../../constants'
import { AGENT_TILLERSON_PAGE_ID } from '../../../page-ids'

import attributes from './attributes'
import headline from './headline'
import appearance from './appearance'
import associations from './associations'

const AgentTillerson: Page = {
    id: AGENT_TILLERSON_PAGE_ID,
    type: CHARACTERS_PAGE_TYPE,
    name: 'Agent Tillerson',
    pageImage: {
        url: DRIVE_VIEW_PREFIX + '1QsX9Udv3WDHJhIsYsDdCXYjLrseVZ-24'
    },
    sections: [
        attributes,
        headline,
        appearance,
        associations,
    ],
    tags: new Set([
        'DMPA Agent',
        'DMPA Employee',
        'Human',
    ])
}

export default AgentTillerson
