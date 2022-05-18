import { Page, PageSection } from '../../DataTypes'
import { DESCRIPTION } from '../../constants'

const description: PageSection = {
    sectionName: DESCRIPTION,
    sectionText: 'The Trial of Steel is an event run by Radio in his mansion.'
}

export default {
    name: "Trial of Steel",
    sections: [description]
} as Page
