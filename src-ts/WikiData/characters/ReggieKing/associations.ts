import { AssociationsSection } from '../../../DataTypes'
import { ASSOCIATIONS } from '../../../constants'
import {
    ACHILLES_PAGE_ID,
    KALO_AGUIRRE_PAGE_ID,
    MELVIN_GERRITSEN_PAGE_ID,
    NED_BARRETT_PAGE_ID,
    RUSSEL_KING_PAGE_ID,
    WALLY_WATERMAN_PAGE_ID
} from '../../../page-ids'

const associations: AssociationsSection = {
    title: ASSOCIATIONS,
    associations: [
        {
            associationName: 'Siblings',
            associationPageIds: [
                RUSSEL_KING_PAGE_ID,
            ]
        },
        {
            associationName: 'Friends',
            associationPageIds: [
                ACHILLES_PAGE_ID,
                MELVIN_GERRITSEN_PAGE_ID,
            ]
        },
        {
            associationName: 'Enemies',
            associationPageIds: [
                KALO_AGUIRRE_PAGE_ID,
                WALLY_WATERMAN_PAGE_ID,
                NED_BARRETT_PAGE_ID,
            ]
        }
    ]
}

export default associations
