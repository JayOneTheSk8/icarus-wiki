import { Page, PageSection } from '../../DataTypes'
import { ABILITIES, HEADLINE, APPEARANCE } from '../../constants'

const headline: PageSection = {
    sectionName: HEADLINE,
    sectionText: 'Russel King is one of the main characters in the story "Icarus".'
}

const appearance: PageSection = {
    sectionName: APPEARANCE,
    sectionText: 'Russel has an afro.'
}

const abilities: PageSection = {
    sectionName: ABILITIES,
    sectionText: 'Russel has wings.'
}

export default {
    name: "Russel King",
    sections: [
        headline,
        appearance,
        abilities,
    ]
} as Page