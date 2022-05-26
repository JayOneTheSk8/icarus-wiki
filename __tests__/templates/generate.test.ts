import fs from 'fs'

import associations from '../../src-ts/templates/associations'
import attributes from '../../src-ts/templates/attributes'
import gallery from '../../src-ts/templates/gallery'
import page from '../../src-ts/templates/page'
import pageId from '../../src-ts/templates/page-id'
import pageSection from '../../src-ts/templates/page-section'

import { charDir, noteDir, generate } from '../../src-ts/templates/generate'

jest.mock('fs')

beforeEach(() => {
    jest.clearAllMocks()
    jest.restoreAllMocks()
})

describe('generate', () => {
    describe('when given improper arguments', () => {

        describe('when no flags are passed', () => {
            test('it does not generate a file', () => {
                generate('', '', '', '')

                expect(fs.existsSync).not.toHaveBeenCalled()
                expect(fs.mkdirSync).not.toHaveBeenCalled()
                expect(fs.writeFile).not.toHaveBeenCalled()
                expect(fs.appendFile).not.toHaveBeenCalled()
            })
        })

        describe('with character flag', () => {

            describe('when only one flag is passed', () => {
                test('it does not generate a file', () => {
                    generate('-c', '', '', '')

                    expect(fs.existsSync).not.toHaveBeenCalled()
                    expect(fs.mkdirSync).not.toHaveBeenCalled()
                    expect(fs.writeFile).not.toHaveBeenCalled()
                    expect(fs.appendFile).not.toHaveBeenCalled()
                })
            })

            describe('when no page argument is passed', () => {
                test('it does not generate a file', () => {
                    generate('-c', '-p', '', '')

                    expect(fs.existsSync).not.toHaveBeenCalled()
                    expect(fs.mkdirSync).not.toHaveBeenCalled()
                    expect(fs.writeFile).not.toHaveBeenCalled()
                    expect(fs.appendFile).not.toHaveBeenCalled()
                })
            })

            describe('when no section argument is passed with section flag', () => {
                test('it does not generate a file', () => {
                    generate('-c', '-s', 'PageOne', '')

                    expect(fs.existsSync).not.toHaveBeenCalled()
                    expect(fs.mkdirSync).not.toHaveBeenCalled()
                    expect(fs.writeFile).not.toHaveBeenCalled()
                    expect(fs.appendFile).not.toHaveBeenCalled()
                })
            })
        })

        describe('with note flag', () => {

            describe('when only one flag is passed', () => {
                test('it does not generate a file', () => {
                    generate('-n', '', '', '')

                    expect(fs.existsSync).not.toHaveBeenCalled()
                    expect(fs.mkdirSync).not.toHaveBeenCalled()
                    expect(fs.writeFile).not.toHaveBeenCalled()
                    expect(fs.appendFile).not.toHaveBeenCalled()
                })
            })

            describe('when no page argument is passed', () => {
                test('it does not generate a file', () => {
                    generate('-n', '-p', '', '')

                    expect(fs.existsSync).not.toHaveBeenCalled()
                    expect(fs.mkdirSync).not.toHaveBeenCalled()
                    expect(fs.writeFile).not.toHaveBeenCalled()
                    expect(fs.appendFile).not.toHaveBeenCalled()
                })
            })

            describe('when no section argument is passed with section flag', () => {
                test('it does not generate a file', () => {
                    generate('-n', '-s', 'PageOne', '')

                    expect(fs.existsSync).not.toHaveBeenCalled()
                    expect(fs.mkdirSync).not.toHaveBeenCalled()
                    expect(fs.writeFile).not.toHaveBeenCalled()
                    expect(fs.appendFile).not.toHaveBeenCalled()
                })
            })
        })
    })

    describe('when given suitable arguments', () => {

        describe('when getting help', () => {
            test('logs help info to console', () => {
                jest.spyOn(console, 'log').mockImplementation((str) => str)

                generate('-h', '', '', '')
                expect(console.log).toHaveBeenCalledTimes(23)
            })
        })

        describe('with character flag passed', () => {

            describe('when creating character page', () => {
                test('it creates a character page index and adds a page id', () => {
                    generate('-c', '-p', 'PageOne', '')

                    expect(fs.mkdirSync).toHaveBeenCalledWith(charDir('PageOne'))
                    expect(fs.writeFile).toHaveBeenCalledWith(
                        `${charDir('PageOne')}/index.ts`,
                        page('PageOne', 'PAGE_ONE'),
                        expect.any(Function)
                    )
                    expect(fs.appendFile).toHaveBeenCalledWith(
                        'src-ts/page-ids.ts',
                        pageId('PAGE_ONE'),
                        expect.any(Function)
                    )
                })

                describe('when character directory does not exist', () => {
                    test('it creates the directory necessary', () => {
                        generate('-c', '-p', 'PageOne', '')
                        expect(fs.mkdirSync).toHaveBeenCalledWith(charDir('PageOne'))
                    })

                })

                describe('when character directory exists', () => {
                    test('it does not create the directory', () => {
                        jest.spyOn(fs, 'existsSync').mockImplementationOnce(() => true)

                        generate('-c', '-p', 'PageOne', '')
                        expect(fs.mkdirSync).not.toHaveBeenCalled()
                    })
                })

                describe('when single word is passed into argument string', () => {
                    test('it uppercases the first letter of the page name', () => {
                        generate('-c', '-p', 'character', '')

                        expect(fs.mkdirSync).toHaveBeenCalledWith(charDir('Character'))
                        expect(fs.writeFile).toHaveBeenCalledWith(
                            `${charDir('Character')}/index.ts`,
                            page('Character', 'CHARACTER'),
                            expect.any(Function)
                        )
                        expect(fs.appendFile).toHaveBeenCalledWith(
                            'src-ts/page-ids.ts',
                            pageId('CHARACTER'),
                            expect.any(Function)
                        )
                    })

                    test('it ignores other characters if uppercase', () => {
                        generate('-c', '-p', 'characterOne', '')

                        expect(fs.mkdirSync).toHaveBeenCalledWith(charDir('CharacterOne'))
                        expect(fs.writeFile).toHaveBeenCalledWith(
                            `${charDir('CharacterOne')}/index.ts`,
                            page('CharacterOne', 'CHARACTER_ONE'),
                            expect.any(Function)
                        )
                        expect(fs.appendFile).toHaveBeenCalledWith(
                            'src-ts/page-ids.ts',
                            pageId('CHARACTER_ONE'),
                            expect.any(Function)
                        )
                    })
                })

                describe('when multiple words are passed in argument string', () => {
                    describe('when all words in string are lowercase', () => {
                        it('converts the words to pascal case correctly', () => {
                            generate('-c', '-p', 'character one', '')

                            expect(fs.mkdirSync).toHaveBeenCalledWith(charDir('CharacterOne'))
                            expect(fs.writeFile).toHaveBeenCalledWith(
                                `${charDir('CharacterOne')}/index.ts`,
                                page('CharacterOne', 'CHARACTER_ONE'),
                                expect.any(Function)
                            )
                            expect(fs.appendFile).toHaveBeenCalledWith(
                                'src-ts/page-ids.ts',
                                pageId('CHARACTER_ONE'),
                                expect.any(Function)
                            )
                        })
                    })

                    describe('when words in string have multiple cases', () => {
                        it('ignores already uppercase characters', () => {
                            generate('-c', '-p', 'someOther character', '')

                            expect(fs.mkdirSync).toHaveBeenCalledWith(charDir('SomeOtherCharacter'))
                            expect(fs.writeFile).toHaveBeenCalledWith(
                                `${charDir('SomeOtherCharacter')}/index.ts`,
                                page('SomeOtherCharacter', 'SOME_OTHER_CHARACTER'),
                                expect.any(Function)
                            )
                            expect(fs.appendFile).toHaveBeenCalledWith(
                                'src-ts/page-ids.ts',
                                pageId('SOME_OTHER_CHARACTER'),
                                expect.any(Function)
                            )
                        })
                    })
                })
            })

            describe('when creating character section', () => {
                describe('when character directory does not exist', () => {
                    test('it creates the directory necessary', () => {
                        generate('-c', '-s', 'PageOne', 'section')
                        expect(fs.mkdirSync).toHaveBeenCalledWith(charDir('PageOne'))
                    })

                })

                describe('when character directory exists', () => {
                    test('it does not create the directory', () => {
                        jest.spyOn(fs, 'existsSync').mockImplementationOnce(() => true)

                        generate('-c', '-s', 'PageOne', 'section')
                        expect(fs.mkdirSync).not.toHaveBeenCalled()
                    })
                })

                describe('when passed Associations section', () => {
                    test('it creates an Associations file', () => {
                        generate('-c', '-s', 'PageOne', 'associations')

                        expect(fs.writeFile).toHaveBeenCalledWith(
                            `${charDir('PageOne')}/associations.ts`,
                            associations('Associations', 'Associations'),
                            expect.any(Function)
                        )
                    })
                })

                describe('when passed Attributes section', () => {
                    test('it creates an Attributes file', () => {
                        generate('-c', '-s', 'PageOne', 'attributes')

                        expect(fs.writeFile).toHaveBeenCalledWith(
                            `${charDir('PageOne')}/attributes.ts`,
                            attributes('Attributes', 'Attributes'),
                            expect.any(Function)
                        )
                    })
                })

                describe('when passed Gallery section', () => {
                    test('it creates a Gallery file', () => {
                        generate('-c', '-s', 'PageOne', 'gallery')

                        expect(fs.writeFile).toHaveBeenCalledWith(
                            `${charDir('PageOne')}/gallery.ts`,
                            gallery('Gallery', 'Gallery'),
                            expect.any(Function)
                        )
                    })
                })

                describe('when passed a generic section', () => {
                    test('it creates a page section file', () => {
                        generate('-c', '-s', 'PageOne', 'section')

                        expect(fs.writeFile).toHaveBeenCalledWith(
                            `${charDir('PageOne')}/section.ts`,
                            pageSection('Section'),
                            expect.any(Function)
                        )
                    })

                    describe('when passed multiple words for section', () => {
                        test('it kebab cases the file name', () => {
                            generate('-c', '-s', 'PageOne', 'another section')

                            expect(fs.writeFile).toHaveBeenCalledWith(
                                `${charDir('PageOne')}/another-section.ts`,
                                pageSection('AnotherSection'),
                                expect.any(Function)
                            )
                        })
                    })
                })
            })
        })

        describe('with note flag passed', () => {

            describe('when creating character page', () => {
                test('it creates a character page index and adds a page id', () => {
                    generate('-n', '-p', 'PageOne', '')

                    expect(fs.mkdirSync).toHaveBeenCalledWith(noteDir('PageOne'))
                    expect(fs.writeFile).toHaveBeenCalledWith(
                        `${noteDir('PageOne')}/index.ts`,
                        page('PageOne', 'PAGE_ONE'),
                        expect.any(Function)
                    )
                    expect(fs.appendFile).toHaveBeenCalledWith(
                        'src-ts/page-ids.ts',
                        pageId('PAGE_ONE'),
                        expect.any(Function)
                    )
                })

                describe('when character directory does not exist', () => {
                    test('it creates the directory necessary', () => {
                        generate('-n', '-p', 'PageOne', '')
                        expect(fs.mkdirSync).toHaveBeenCalledWith(noteDir('PageOne'))
                    })

                })

                describe('when character directory exists', () => {
                    test('it does not create the directory', () => {
                        jest.spyOn(fs, 'existsSync').mockImplementationOnce(() => true)

                        generate('-n', '-p', 'PageOne', '')
                        expect(fs.mkdirSync).not.toHaveBeenCalled()
                    })
                })

                describe('when single word is passed into argument string', () => {
                    test('it uppercases the first letter of the page name', () => {
                        generate('-n', '-p', 'character', '')

                        expect(fs.mkdirSync).toHaveBeenCalledWith(noteDir('Character'))
                        expect(fs.writeFile).toHaveBeenCalledWith(
                            `${noteDir('Character')}/index.ts`,
                            page('Character', 'CHARACTER'),
                            expect.any(Function)
                        )
                        expect(fs.appendFile).toHaveBeenCalledWith(
                            'src-ts/page-ids.ts',
                            pageId('CHARACTER'),
                            expect.any(Function)
                        )
                    })

                    test('it ignores other characters if uppercase', () => {
                        generate('-n', '-p', 'characterOne', '')

                        expect(fs.mkdirSync).toHaveBeenCalledWith(noteDir('CharacterOne'))
                        expect(fs.writeFile).toHaveBeenCalledWith(
                            `${noteDir('CharacterOne')}/index.ts`,
                            page('CharacterOne', 'CHARACTER_ONE'),
                            expect.any(Function)
                        )
                        expect(fs.appendFile).toHaveBeenCalledWith(
                            'src-ts/page-ids.ts',
                            pageId('CHARACTER_ONE'),
                            expect.any(Function)
                        )
                    })
                })

                describe('when multiple words are passed in argument string', () => {
                    describe('when all words in string are lowercase', () => {
                        it('converts the words to pascal case correctly', () => {
                            generate('-n', '-p', 'character one', '')

                            expect(fs.mkdirSync).toHaveBeenCalledWith(noteDir('CharacterOne'))
                            expect(fs.writeFile).toHaveBeenCalledWith(
                                `${noteDir('CharacterOne')}/index.ts`,
                                page('CharacterOne', 'CHARACTER_ONE'),
                                expect.any(Function)
                            )
                            expect(fs.appendFile).toHaveBeenCalledWith(
                                'src-ts/page-ids.ts',
                                pageId('CHARACTER_ONE'),
                                expect.any(Function)
                            )
                        })
                    })

                    describe('when words in string have multiple cases', () => {
                        it('ignores already uppercase characters', () => {
                            generate('-n', '-p', 'someOther character', '')

                            expect(fs.mkdirSync).toHaveBeenCalledWith(noteDir('SomeOtherCharacter'))
                            expect(fs.writeFile).toHaveBeenCalledWith(
                                `${noteDir('SomeOtherCharacter')}/index.ts`,
                                page('SomeOtherCharacter', 'SOME_OTHER_CHARACTER'),
                                expect.any(Function)
                            )
                            expect(fs.appendFile).toHaveBeenCalledWith(
                                'src-ts/page-ids.ts',
                                pageId('SOME_OTHER_CHARACTER'),
                                expect.any(Function)
                            )
                        })
                    })
                })
            })

            describe('when creating character section', () => {
                describe('when character directory does not exist', () => {
                    test('it creates the directory necessary', () => {
                        generate('-n', '-s', 'PageOne', 'section')
                        expect(fs.mkdirSync).toHaveBeenCalledWith(noteDir('PageOne'))
                    })

                })

                describe('when character directory exists', () => {
                    test('it does not create the directory', () => {
                        jest.spyOn(fs, 'existsSync').mockImplementationOnce(() => true)

                        generate('-n', '-s', 'PageOne', 'section')
                        expect(fs.mkdirSync).not.toHaveBeenCalled()
                    })
                })

                describe('when passed Associations section', () => {
                    test('it creates an Associations file', () => {
                        generate('-n', '-s', 'PageOne', 'associations')

                        expect(fs.writeFile).toHaveBeenCalledWith(
                            `${noteDir('PageOne')}/associations.ts`,
                            associations('Associations', 'Associations'),
                            expect.any(Function)
                        )
                    })
                })

                describe('when passed Attributes section', () => {
                    test('it creates an Attributes file', () => {
                        generate('-n', '-s', 'PageOne', 'attributes')

                        expect(fs.writeFile).toHaveBeenCalledWith(
                            `${noteDir('PageOne')}/attributes.ts`,
                            attributes('Attributes', 'Attributes'),
                            expect.any(Function)
                        )
                    })
                })

                describe('when passed Gallery section', () => {
                    test('it creates a Gallery file', () => {
                        generate('-n', '-s', 'PageOne', 'gallery')

                        expect(fs.writeFile).toHaveBeenCalledWith(
                            `${noteDir('PageOne')}/gallery.ts`,
                            gallery('Gallery', 'Gallery'),
                            expect.any(Function)
                        )
                    })
                })

                describe('when passed a generic section', () => {
                    test('it creates a page section file', () => {
                        generate('-n', '-s', 'PageOne', 'section')

                        expect(fs.writeFile).toHaveBeenCalledWith(
                            `${noteDir('PageOne')}/section.ts`,
                            pageSection('Section'),
                            expect.any(Function)
                        )
                    })

                    describe('when passed multiple words for section', () => {
                        test('it kebab cases the file name', () => {
                            generate('-n', '-s', 'PageOne', 'another section')

                            expect(fs.writeFile).toHaveBeenCalledWith(
                                `${noteDir('PageOne')}/another-section.ts`,
                                pageSection('AnotherSection'),
                                expect.any(Function)
                            )
                        })
                    })
                })
            })
        })
    })
})
