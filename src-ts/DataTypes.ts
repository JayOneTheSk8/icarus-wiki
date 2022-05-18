export interface PageSection {
    sectionName: string
    sectionText: string
}

export interface Page {
    name: string
    imageUrl?: string
    sections: Array<PageSection>
}

export type CharacterList = Array<Page>
export type Notes = Array<Page>

export interface BlogData {
    characters: CharacterList
    notes: Notes
}
