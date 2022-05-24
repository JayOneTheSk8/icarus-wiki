import { AssociationsSection } from '../../../DataTypes'
import { ASSOCIATIONS } from '../../../constants'
import { REGGIE_KING_PAGE_ID } from '../../../page-ids'

const associations: AssociationsSection = {
    title: ASSOCIATIONS,
    associations: [
        {
            associationName: 'Siblings',
            associationPageIds: [
                REGGIE_KING_PAGE_ID
            ]
        }
    ]
}

export default associations
