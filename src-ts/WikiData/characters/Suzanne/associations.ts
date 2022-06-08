import { AssociationsSection } from '../../../DataTypes'
import { ASSOCIATIONS } from '../../../constants'
import { AGENT_RAYSON_PAGE_ID, ELLIE_PAGE_ID, NEMO_PAGE_ID, RADIO_PAGE_ID } from '../../../page-ids'

const associations: AssociationsSection = {
    title: ASSOCIATIONS,
    associations: [
        {
            associationName: 'Friends',
            associationPageIds: [
                ELLIE_PAGE_ID,
                RADIO_PAGE_ID,
                NEMO_PAGE_ID,
                AGENT_RAYSON_PAGE_ID,
            ]
        }
    ]
}

export default associations
