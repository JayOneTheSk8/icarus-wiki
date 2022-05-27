import pageId from '../../src-ts/templates/page-id'

describe('Page ID Template', () => {
    describe('when single word in PAGE_NAME_CONST', () => {
        it('returns PAGE_NAME_CONST in page ID template with lowercase as value', () => {
            expect(pageId('PAGE')).toEqual("export const PAGE_PAGE_ID = 'page'\n")
        })
    })

    describe('when multiple words in PAGE_NAME_CONST', () => {
        it('returns PAGE_NAME_CONST in page ID template with lowercase as value', () => {
            expect(pageId('PAGE_NAME')).toEqual("export const PAGE_NAME_PAGE_ID = 'page_name'\n")
        })
    })
})
