import { DRIVE_VIEW_PREFIX } from "../../../constants";
import { Page } from "../../../DataTypes";

import attributes from "./attributes";
import headline from "./headline";
import appearance from "./appearance";
import gallery from "./gallery";

const ReggieKing: Page = {
    name: 'Reggie King',
    pageImage: {
        url: DRIVE_VIEW_PREFIX + '1PnMGTIJsaIy__AkWuYpAM4G9-saN4VQ5',
        caption: 'Reggie (Age 16)'
    },
    sections: [
        attributes,
        headline,
        appearance,
        gallery,
    ]
}

export default ReggieKing
