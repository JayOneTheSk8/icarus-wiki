import { PageSection } from '../../../DataTypes'
import { APPEARANCE, imgurLink } from '../../../constants'

const appearance: PageSection = {
    title: APPEARANCE,
    body: [
        {
            subSectionTitle: '',
            subSectionText: "SAIM looks different depending on who they're indexing. They have a main outfit for a single person that will variate if they have to index others' abilities. With that said, there are some commonalities (for example they'll almost always have floor-length long hair they emerge from)."
        },
        {
            subSectionTitle: "Russel King's",
            subSectionText: (
                'Headgear: Beret\n' +
                'Eyewear: Square Sunglasses down to tip of nose\n' +
                'Top: Orange Turtleneck Sweater\n' +
                'Bottoms: Black Palazzo Pants\n' +
                'Footwear: Never Shown'
            ),
            subSectionImage: {
                url: imgurLink('3Zwhf0O')
            }
        },
        {
            subSectionTitle: "Reggie King's",
            subSectionText: (
                'Headgear: Ponytail\n' +
                'Eyewear: Round Glasses\n' +
                'Top: Tye-Dye Shirt\n' +
                'Bottoms: Blue Jean Bell Bottoms\n' +
                'Footwear: White Sneakers'
            ),
            subSectionImage: {
                url: imgurLink('HVt630v')
            }
        },
        {
            subSectionTitle: "Achilles'",
            subSectionText: (
                'Headgear: Hair Bun\n' +
                'Eyewear: Large Square Glasses\n' +
                'Top: Brown Fuzzy Bralette Top\n' +
                'Bottoms: Tight Fitting White Pants\n' +
                'Footwear: Flip Flops'
            ),
            subSectionImage: {
                url: imgurLink('bmIDqUm')
            }
        },
        {
            subSectionTitle: "Melvin Gerritsen's",
            subSectionText: (
                'Headgear: Wool cap\n' +
                'Eyewear: Tiny, round, gold-framed sunglasses\n' +
                'Top: Sweatshirt with tree logo\n' +
                'Bottoms: Fitted jeans\n' +
                'Footwear: Green Circa-style sneakers'
            )
        },
        {
            subSectionTitle: 'Achilles-Russel',
            subSectionText: (
                'Headgear: Bun\n' +
                'Eyewear: Large Square Glasses\n' +
                'Top: Brown Fuzzy Bralette Top\n' +
                'Bottoms: Black Palazzo Pants\n' +
                'Footwear: Never Shown'
            )
        },
        {
            subSectionTitle: 'Achilles-Melvin-Russel-Reggie',
            subSectionText: (
                'Headgear: Beret\n' +
                'Eyewear: Round Glasses\n' +
                'Top: Sweatshirt with a Tree Icon\n' +
                'Bottoms: Tight Fitting White Pants\n' +
                'Footwear: White Sneakers'
            )
        },
    ]
}

export default appearance
