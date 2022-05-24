import { AssociationsSection } from '../../../DataTypes'
import { ASSOCIATIONS } from '../../../constants'
import { ACHILLES_PAGE_ID, REGGIE_KING_PAGE_ID } from '../../../page-ids'

const associations: AssociationsSection = {
    title: ASSOCIATIONS,
    associations: [
        {
            associationName: 'Siblings',
            associationPageIds: [
                REGGIE_KING_PAGE_ID
            ]
        },
        {
            associationName: 'Friends',
            associationPageIds: [
                ACHILLES_PAGE_ID,
            ]
        }
    ]
}

export default associations
