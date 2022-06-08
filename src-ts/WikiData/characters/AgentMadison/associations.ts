import { AssociationsSection } from '../../../DataTypes'
import { ASSOCIATIONS } from '../../../constants'
import { DR_WEED_PAGE_ID } from '../../../page-ids'

const associations: AssociationsSection = {
    title: ASSOCIATIONS,
    associations: [
        {
            associationName: 'Co-Workers',
            associationPageIds: [
                DR_WEED_PAGE_ID,
            ]
        }
    ]
}

export default associations
