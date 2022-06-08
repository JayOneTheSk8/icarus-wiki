import { generate } from './generate'

const helpOptions: Array<string> = ['-h', '--help']
const sectionMap: { [key: string]: string } = {
    '-gall': 'gallery',
    '-assoc': 'associations',
    '-attr': 'attributes',
    '-desc': 'description',
    '-abil': 'abilities',
    '-head': 'headline',
    '-app': 'appearance',
    '-hist': 'history',
}

export const charInit = (characterName: string, remainingFlags: Array<string>): void => {
    /* Display Help*/
    if (
        !characterName
            || helpOptions.includes(characterName)
            || remainingFlags.includes(helpOptions[0])
            || remainingFlags.includes(helpOptions[1])
    ) {
        /* eslint no-console: "off" */
        console.log('Generate Character Page and Section Templates')

        console.log('WARNING: Will overwrite same file if created\n')
        console.log(`Usage: 'npm run char-init -- [character name] [section flag]'\n`)
        console.log('   -h, --help                          Access this menu\n')

        console.log('Section Flags:')
        for (const flag in sectionMap) {
            console.log(`   ${flag}                                ${sectionMap[flag]}`)
        }

        console.log('\nExample:')
        console.log('npm run char-init -- CharacterOne -head -app -hist')
        console.log('--or--')
        console.log('npm run char-init -- "Character One" -head -app -hist')
        console.log('Generates character page template, ID, and headline, appearance, and history sections')
        console.log('(note: must be PascalCase or separated String for character name)')
    } else {
        /* Init Character Page */
        generate('-c', '-p', characterName, '')

        /* Generate Sections */
        for (const flag of remainingFlags) {
            if (sectionMap[flag]) {
                generate('-c', '-s', characterName, sectionMap[flag])
            }
        }
    }
}

charInit(process.argv[2], process.argv.slice(3))
