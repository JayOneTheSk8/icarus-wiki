import { Page, PageSection } from '../../DataTypes'
import { ABILITIES, HEADLINE, APPEARANCE } from '../../constants'

const headline: PageSection = {
    title: HEADLINE,
    body: 'Russel King is one of the main characters in the story "Icarus".'
}

const appearance: PageSection = {
    title: APPEARANCE,
    body: 'Russel has an afro.'
}

const abilities: PageSection = {
    title: ABILITIES,
    body: 'Russel has wings.'
}

const RusselKing: Page = {
    name: "Russel King",
    sections: [
        headline,
        appearance,
        abilities,
    ]
}

export default RusselKing
