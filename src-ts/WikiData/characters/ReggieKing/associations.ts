import { AssociationsSection } from '../../../DataTypes'
import { ASSOCIATIONS } from '../../../constants'
import { RUSSEL_KING_PAGE_ID } from '../../../page-ids'

const associations: AssociationsSection = {
    title: ASSOCIATIONS,
    associations: [
        {
            associationName: 'Siblings',
            associationPageIds: [
                RUSSEL_KING_PAGE_ID,
            ]
        }
    ]
}

export default associations
