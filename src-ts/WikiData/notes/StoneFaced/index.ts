import { Page } from '../../../DataTypes'
import { DRIVE_VIEW_PREFIX, NOTES_PAGE_TYPE } from '../../../constants'
import { STONE_FACED_PAGE_ID } from '../../../page-ids'

import attributes from './attributes'
import description from './description'

const StoneFaced: Page = {
    id: STONE_FACED_PAGE_ID,
    type: NOTES_PAGE_TYPE,
    name: 'Stone-Faced',
    pageImage: {
        url: DRIVE_VIEW_PREFIX + '1cx-R2-OwVB04JDTL7jqz-1EkcTR5zo99'
    },
    sections: [
        attributes,
        description,
    ]
}

export default StoneFaced
