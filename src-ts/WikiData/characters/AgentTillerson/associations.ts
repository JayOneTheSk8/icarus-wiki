import { AssociationsSection } from '../../../DataTypes'
import { ASSOCIATIONS } from '../../../constants'
import { AGENT_BRYSON_PAGE_ID, AGENT_JOHNSTON_PAGE_ID } from '../../../page-ids'

const associations: AssociationsSection = {
    title: ASSOCIATIONS,
    associations: [
        {
            associationName: 'Co-Workers',
            associationPageIds: [
                AGENT_JOHNSTON_PAGE_ID,
                AGENT_BRYSON_PAGE_ID,
            ]
        }
    ]
}

export default associations
