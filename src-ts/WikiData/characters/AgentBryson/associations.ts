import { AssociationsSection } from '../../../DataTypes'
import { ASSOCIATIONS } from '../../../constants'
import { AGENT_JOHNSTON_PAGE_ID, AGENT_TILLERSON_PAGE_ID } from '../../../page-ids'

const associations: AssociationsSection = {
    title: ASSOCIATIONS,
    associations: [
        {
            associationName: '',
            associationPageIds: [
                AGENT_JOHNSTON_PAGE_ID,
                AGENT_TILLERSON_PAGE_ID,
            ]
        }
    ]
}

export default associations
