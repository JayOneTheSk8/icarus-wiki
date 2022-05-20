export interface Image {
    url: string
    caption?: string
}

export interface Attribute {
    attributeName: string
    attributeText: string
}

export interface SubSection {
    subSectionTitle: string
    subSectionImage?: Image
    subSectionText: string
}

export interface PageSection {
    title: string
    sectionImage?: Image
    body: string | Array<SubSection>
}

export interface GallerySection {
    title: string
    gallery: Array<Image>
}

export interface AttributesSection {
    title: string
    attributes: Array<Attribute>
}

export interface Page {
    name: string
    pageImage?: Image
    sections: Array<PageSection | GallerySection | AttributesSection>
}

export type CharacterList = Array<Page>
export type Notes = Array<Page>

export interface BlogData {
    homePage: Page
    characters: CharacterList
    notes: Notes
}
