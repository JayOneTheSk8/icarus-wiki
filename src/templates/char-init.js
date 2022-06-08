"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.charInit = void 0;
const generate_1 = require("./generate");
const helpOptions = ['-h', '--help'];
const sectionMap = {
    '-gall': 'gallery',
    '-assoc': 'associations',
    '-attr': 'attributes',
    '-desc': 'description',
    '-abil': 'abilities',
    '-head': 'headline',
    '-app': 'appearance',
    '-hist': 'history',
};
const charInit = (characterName, remainingFlags) => {
    /* Display Help*/
    if (!characterName
        || helpOptions.includes(characterName)
        || remainingFlags.includes(helpOptions[0])
        || remainingFlags.includes(helpOptions[1])) {
        /* eslint no-console: "off" */
        console.log('Generate Character Page and Section Templates');
        console.log('WARNING: Will overwrite same file if created\n');
        console.log(`Usage: 'npm run char-init -- [character name] [section flag]'\n`);
        console.log('   -h, --help                          Access this menu\n');
        console.log('Section Flags:');
        for (const flag in sectionMap) {
            console.log(`   ${flag}                                ${sectionMap[flag]}`);
        }
        console.log('\nExample:');
        console.log('npm run char-init -- CharacterOne -head -app -hist');
        console.log('--or--');
        console.log('npm run char-init -- "Character One" -head -app -hist');
        console.log('Generates character page template, ID, and headline, appearance, and history sections');
        console.log('(note: must be PascalCase or separated String for character name)');
    }
    else {
        /* Init Character Page */
        (0, generate_1.generate)('-c', '-p', characterName, '');
        /* Generate Sections */
        for (const flag of remainingFlags) {
            if (sectionMap[flag]) {
                (0, generate_1.generate)('-c', '-s', characterName, sectionMap[flag]);
            }
        }
    }
};
exports.charInit = charInit;
(0, exports.charInit)(process.argv[2], process.argv.slice(3));
