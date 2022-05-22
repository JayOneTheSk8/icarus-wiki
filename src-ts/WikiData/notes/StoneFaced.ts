import { Page, PageSection, AttributesSection } from '../../DataTypes'
import { ATTRIBUTES, DESCRIPTION, DRIVE_VIEW_PREFIX } from '../../constants'

const description: PageSection = {
    title: DESCRIPTION,
    body: [
        {
            subSectionTitle: '',
            subSectionImage: {
                url: DRIVE_VIEW_PREFIX + '1mKmYSBYPlS7cxx8hN2hCcVq3Zt00Akch',
                caption: 'Ester Island Maoi'
            },
            subSectionText: '"stone-face(d)" is a shorthand parenthetical used in the story Icarus to describe a character expressing a 😑 face. The name is meant to mimic the faces of the Moai statues of Easter Island.'
        }
    ] 
    
}

const attributes: AttributesSection = {
    title: ATTRIBUTES,
    attributes: [
        {
            attributeName: 'Other Names',
            attributeText: `Annoyed face, c'mon son face, straight line face`
        }
    ]
}

const StoneFaced: Page = {
    name: "Stone-Faced",
    pageImage: {
        url: DRIVE_VIEW_PREFIX + '1cx-R2-OwVB04JDTL7jqz-1EkcTR5zo99'
    },
    sections: [
        attributes,
        description,
    ]
}

export default StoneFaced
