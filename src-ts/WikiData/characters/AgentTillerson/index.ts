import { Page } from '../../../DataTypes'
import { CHARACTERS_PAGE_TYPE, imgurLink } from '../../../constants'
import { AGENT_TILLERSON_PAGE_ID } from '../../../page-ids'
import { DMPA_AGENT, DMPA_EMPLOYEE, HUMAN } from '../tags'

import attributes from './attributes'
import headline from './headline'
import appearance from './appearance'
import associations from './associations'

const AgentTillerson: Page = {
    id: AGENT_TILLERSON_PAGE_ID,
    type: CHARACTERS_PAGE_TYPE,
    name: 'Agent Tillerson',
    pageImage: {
        url: imgurLink('j3iaKA3')
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

export default AgentTillerson
