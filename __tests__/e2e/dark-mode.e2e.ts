import { Selector } from 'testcafe'

import * as appConstants from '../../src-ts/app/app-constants'

fixture`Dark Mode`.page `../../index.html`

test('App loads in primary mode', async (t) => {
    Selector(`.${appConstants.PAGE_TITLE}`)
})
