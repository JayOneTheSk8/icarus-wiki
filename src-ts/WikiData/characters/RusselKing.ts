import { AttributesSection, GallerySection, Page, PageSection } from '../../DataTypes'
import { HEADLINE, APPEARANCE, ATTRIBUTES, DRIVE_VIEW_PREFIX, GALLERY } from '../../constants'

const attribues: AttributesSection = {
    title: ATTRIBUTES,
    attributes: [
        {
            attributeName: 'Other Names',
            attributeText: 'Rus (Reggie)'
        },
        {
            attributeName: 'Gender',
            attributeText: 'Male'
        },
        {
            attributeName: 'Age',
            attributeText: '13'
        },
        {
            attributeName: 'Height',
            attributeText: `4' 10"`
        },
        {
            attributeName: 'Birthday',
            attributeText: 'July 13th, 1983'
        },
        {
            attributeName: 'Birthplace',
            attributeText: 'Philadelphia, PA'
        },
        {
            attributeName: 'Meta-Human Type',
            attributeText: 'Mythical'
        },
        {
            attributeName: 'Race',
            attributeText: 'Human'
        },
        {
            attributeName: 'Hair Color',
            attributeText: 'Black'
        },
        {
            attributeName: 'Hair Style',
            attributeText: 'Messy Afro'
        },
        {
            attributeName: 'Debut',
            attributeText: 'Chapter 1: Elements of Surprise'
        },
    ]
}

const headline: PageSection = {
    title: HEADLINE,
    body: 'Russel King is one the primary protagonists of the story "Icarus". At 13, after an accident with a mythical object, he and his brother Reggie are given elemental powers. He is quite observant and informed on many ancient histories given his father Hudson King was a well renowned archaeologist. After being given special abilities, Russel seeks normalcy in a world not ready to offer it.'
}

const appearance: PageSection = {
    title: APPEARANCE,
    body: [
        {
            subSectionTitle: 'Age 13',
            subSectionText: 'Russel is a skinny dark skinned boy with an unkempt afro. His hair is deceptively long (as seen when Achilles pulls him up by his hair and he is the same height as Reggie off the ground).',
        },
        {
            subSectionTitle: 'Post Divine Rope',
            subSectionText: 'After having a piece of mythical rope attached to his back, he grows a pair of orange wings. When tucked, the edges of his wings reach from a few inches above his hair to just below his knees. When expanded they more than cover his hands. On his back is a thin rope shaped like an "X" with the ends reaching both sides of his wings (at about halfway) and the backs of his hands before appearing embedded in his body. He wears shirts with the holes cut out in the back for his wings before being given specialised upper wear.',
        },
    ]
}

const gallery: GallerySection = {
    title: GALLERY,
    gallery: [
        {
            url: DRIVE_VIEW_PREFIX + '1RJCVJDJ-5EKELmLvd81HGSm-47M0J9iR'
        }
    ]
}

const RusselKing: Page = {
    name: "Russel King",
    pageImage: {
        url: DRIVE_VIEW_PREFIX + '1QAiWVNXwS6Zgvyqxkz2LwEKe1ti3bJ66',
        caption: 'Russel (Age 13)'
    },
    sections: [
        attribues,
        headline,
        appearance,
        gallery,
    ]
}

export default RusselKing
