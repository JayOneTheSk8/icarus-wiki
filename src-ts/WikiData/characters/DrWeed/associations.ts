import { AssociationsSection } from '../../../DataTypes'
import { ASSOCIATIONS } from '../../../constants'
import { AGENT_MADISON_PAGE_ID, FERGUSON_PAGE_ID, OPAL_PAGE_ID } from '../../../page-ids'

const associations: AssociationsSection = {
    title: ASSOCIATIONS,
    associations: [
        {
            associationName: 'Co-Workers',
            associationPageIds: [
                OPAL_PAGE_ID,
                FERGUSON_PAGE_ID,
                AGENT_MADISON_PAGE_ID,
            ]
        }
    ]
}

export default associations
