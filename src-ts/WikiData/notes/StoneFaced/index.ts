import { Page } from '../../../DataTypes'
import { imgurLink, NOTES_PAGE_TYPE } from '../../../constants'
import { STONE_FACED_PAGE_ID } from '../../../page-ids'

import attributes from './attributes'
import description from './description'

const StoneFaced: Page = {
    id: STONE_FACED_PAGE_ID,
    type: NOTES_PAGE_TYPE,
    name: 'Stone-Faced',
    pageImage: {
        url: imgurLink('62KrK04')
    },
    sections: [
        attributes,
        description,
    ]
}

export default StoneFaced
