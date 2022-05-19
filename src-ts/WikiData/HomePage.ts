import { Page, PageSection } from '../DataTypes'

import { HEADLINE } from '../constants'

const headline: PageSection = {
    title: 'Home Page',
    body: 'Icarus is a cool story bro.'
}

const HomePage: Page = {
    name: 'Icarus Wiki',
    sections: [
        headline,
    ]
} 

export default HomePage
