import { DRIVE_VIEW_PREFIX } from "../../../constants"
import { Page } from "../../../DataTypes"

import appearance from "./appearance"
import attributes from "./attributes"
import gallery from "./gallery"
import headline from "./headline"

const RusselKing: Page = {
    name: "Russel King",
    pageImage: {
        url: DRIVE_VIEW_PREFIX + '1QAiWVNXwS6Zgvyqxkz2LwEKe1ti3bJ66',
        caption: 'Russel (Age 13)'
    },
    sections: [
        attributes,
        headline,
        appearance,
        gallery,
    ]
}

export default RusselKing
