import gallery from '../../src-ts/templates/gallery'

const importConstGalleryTemplate = `import { GallerySection } from '../../../DataTypes'
import { GALLERY } from '../../../constants'

const gallery: GallerySection = {
    title: GALLERY,
    gallery: [
        {
            url: '',
            caption: ''
        }
    ]
}

export default gallery
`

const noImportGalleryTemplate = `import { GallerySection } from '../../../DataTypes'

const gallery: GallerySection = {
    title: 'Pictures',
    gallery: [
        {
            url: '',
            caption: ''
        }
    ]
}

export default gallery
`

const noImportMultipleWordsGalleryTemplate = `import { GallerySection } from '../../../DataTypes'

const gallery: GallerySection = {
    title: 'Pictures Section',
    gallery: [
        {
            url: '',
            caption: ''
        }
    ]
}

export default gallery
`

describe('Gallery Template', () => {
    describe('when passed section matches the GALLERY constant', () => {
        test('it returns a template with the const imported', () => {
            expect(gallery('Gallery', 'Gallery')).toEqual(importConstGalleryTemplate)
        })

        test('it does not use the customSectionName parameter', () => {
            expect(gallery('Gallery', '')).toEqual(importConstGalleryTemplate)
        })
    })

    describe('when passed section does not match the GALLERY constant', () => {

        describe('when passed single word section', () => {
            test('it returns the template with the title as the section name', () => {
                expect(gallery('Pictures', 'Pictures')).toEqual(noImportGalleryTemplate)
            })

            test('it uses the customSectionName parameter to fill the title', () => {
                expect(gallery('Picturesname', 'Pictures')).toEqual(noImportGalleryTemplate)
            })
        })

        describe('when passed multiple word section', () => {
            test('it returns the section with the sentence title as the section name', () => {
                expect(gallery('PicturesSection', 'PicturesSection')).toEqual(noImportMultipleWordsGalleryTemplate)
            })

            test('it uses the customSectionName parameter to fill the title', () => {
                expect(gallery('Picturesname', 'PicturesSection')).toEqual(noImportMultipleWordsGalleryTemplate)
            })
        })
    })
})
