export interface SubSection {
    subSectionTitle: string
    subSectionText: string
}

export interface PageSection {
    title: string
    imageUrls?: Array<string>
    body: string | Array<SubSection>
}

export interface Page {
    name: string
    imageUrls?: Array<string>
    sections: Array<PageSection>
}

export type CharacterList = Array<Page>
export type Notes = Array<Page>

export interface BlogData {
    characters: CharacterList
    notes: Notes
}
