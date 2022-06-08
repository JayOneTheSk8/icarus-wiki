import { AssociationsSection } from '../../../DataTypes'
import { ASSOCIATIONS } from '../../../constants'
import { ELLIE_PAGE_ID, NEMO_PAGE_ID, RADIO_PAGE_ID, SUZANNE_PAGE_ID } from '../../../page-ids'

const associations: AssociationsSection = {
    title: ASSOCIATIONS,
    associations: [
        {
            associationName: 'Friends',
            associationPageIds: [
                RADIO_PAGE_ID,
                ELLIE_PAGE_ID,
                SUZANNE_PAGE_ID,
                NEMO_PAGE_ID,
            ]
        }
    ]
}

export default associations
