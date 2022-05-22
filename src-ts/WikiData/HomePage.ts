import { ABILITIES, ATTRIBUTES, GALLERY } from '../constants'
import { Page, PageSection, GallerySection, AttributesSection } from '../DataTypes'

const whatsIcarus: PageSection = {
    title: "What's Icarus?",
    body: 'Two boys stumble upon a magical object with their archaeologist father and godfather that is tied to the very earth itself. After an incident, they must learn to cope with the tragedy of their situation and their newfound abilities in a short amount of time to survive.'
}

const whereToRead: PageSection = {
    title: 'How to Read',
    body: 'The released chapters of "Icarus" can be found <a href="https://jayonethesk8.github.io/icarus/">here</a>'
}

const HomePage: Page = {
    name: 'Icarus Wiki',
    sections: [
        whatsIcarus,
        whereToRead,
    ]
} 

export default HomePage
