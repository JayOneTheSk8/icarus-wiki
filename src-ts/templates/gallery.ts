import { GALLERY } from '../constants'

export default (sectionName: string, customSectionName: string): string => `import { GallerySection } from '../../../DataTypes'${
    sectionName === GALLERY ? `\nimport { GALLERY } from '../../../constants'` : ''
}

const gallery: GallerySection = {
    title: ${sectionName === GALLERY ? 'GALLERY' : `'${customSectionName}'`},
    gallery: [
        {
            url: '',
            caption: ''
        }
    ]
}

export default gallery
`
