import { Page, PageSection } from '../../DataTypes'
import { DESCRIPTION } from '../../constants'

const description: PageSection = {
    title: DESCRIPTION,
    body: 'Stone-face(d) is just a common way of describing the -_- face.'
}

const StoneFaced: Page = {
    name: "Stone-Faced",
    sections: [description]
}

export default StoneFaced
