export interface Image {
    url: string
    caption?: string
}

export interface SubSection {
    subSectionTitle: string
    subSectionImage: Image
    subSectionText: string
}

export interface PageSection {
    title: string
    imageUrls?: Array<Image>
    body: string | Array<SubSection>
}

export interface Page {
    name: string
    imageUrls?: Array<Image>
    sections: Array<PageSection>
}

export type CharacterList = Array<Page>
export type Notes = Array<Page>

export interface BlogData {
    characters: CharacterList
    notes: Notes
}
