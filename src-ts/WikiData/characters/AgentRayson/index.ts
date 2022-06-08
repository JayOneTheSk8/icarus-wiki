import { Page } from '../../../DataTypes'
import { CHARACTERS_PAGE_TYPE, DRIVE_VIEW_PREFIX } from '../../../constants'
import { AGENT_RAYSON_PAGE_ID } from '../../../page-ids'
import { ANTI_HERO, DMPA_AGENT, DMPA_EMPLOYEE, HUMAN } from '../tags'

import attributes from './attributes'
import headline from './headline'
import appearance from './appearance'
import associations from './associations'

const AgentRayson: Page = {
    id: AGENT_RAYSON_PAGE_ID,
    type: CHARACTERS_PAGE_TYPE,
    name: 'Agent Rayson',
    pageImage: {
        url: DRIVE_VIEW_PREFIX + '1QPmyI_Mcm69shZtFO1uHYTJimGXvlL4y'
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
        ANTI_HERO,
    ])
}

export default AgentRayson
