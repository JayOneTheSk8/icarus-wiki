import { Page, PageSection } from '../../DataTypes'
import { DESCRIPTION } from '../../constants'

const description: PageSection = {
    title: DESCRIPTION,
    body: 'The Trial of Steel is an event run by Radio in his mansion.'
}

const TrialOfSteel: Page = {
    name: "Trial of Steel",
    sections: [description]
}

export default TrialOfSteel
