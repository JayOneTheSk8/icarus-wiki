import { AssociationsSection } from '../../../DataTypes'
import { ASSOCIATIONS } from '../../../constants'
import { FERGUSON_PAGE_ID } from '../../../page-ids'

const associations: AssociationsSection = {
    title: ASSOCIATIONS,
    associations: [
        {
            associationName: 'Co-Workers',
            associationPageIds: [
                FERGUSON_PAGE_ID,
            ]
        }
    ]
}

export default associations
