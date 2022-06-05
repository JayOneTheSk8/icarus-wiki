import { Page } from '../../../DataTypes'
import { CHARACTERS_PAGE_TYPE, DRIVE_VIEW_PREFIX } from '../../../constants'
import { AGENT_BRYSON_PAGE_ID } from '../../../page-ids'
import { DMPA_AGENT, DMPA_EMPLOYEE, HUMAN } from '../tags'

import attributes from './attributes'
import headline from './headline'
import appearance from './appearance'
import associations from './associations'

const AgentBryson: Page = {
    id: AGENT_BRYSON_PAGE_ID,
    type: CHARACTERS_PAGE_TYPE,
    name: 'Agent Bryson',
    pageImage: {
        url: DRIVE_VIEW_PREFIX + '1QRivchuNUGcOt2MDa1dRlWXEKCfwsC9_'
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
        HUMAN,
    ])
}

export default AgentBryson
