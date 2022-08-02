import { AssociationsSection } from '../../../DataTypes'
import { ASSOCIATIONS } from '../../../constants'
import { KALO_AGUIRRE_PAGE_ID, MELVIN_GERRITSEN_PAGE_ID, REGGIE_KING_PAGE_ID, RUSSEL_KING_PAGE_ID, WALLY_WATERMAN_PAGE_ID } from '../../../page-ids'

const associations: AssociationsSection = {
    title: ASSOCIATIONS,
    associations: [
        {
            associationName: 'Friends',
            associationPageIds: [
                KALO_AGUIRRE_PAGE_ID,
                WALLY_WATERMAN_PAGE_ID,
            ]
        },
        {
            associationName: 'Enemies',
            associationPageIds: [
                REGGIE_KING_PAGE_ID,
                RUSSEL_KING_PAGE_ID,
                MELVIN_GERRITSEN_PAGE_ID,
            ]
        },
    ]
}

export default associations
