"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const page_ids_1 = require("../page-ids");
const whatsIcarus = {
    title: "What's Icarus?",
    body: 'Two boys stumble upon a magical object with their archaeologist father and godfather that is tied to the very earth itself. After an incident, they must learn to cope with the tragedy of their situation and their newfound abilities in a short amount of time to survive.'
};
const whereToRead = {
    title: 'How to Read',
    body: 'The released chapters of "Icarus" can be found <a href="https://jayonethesk8.github.io/icarus/">here</a>'
};
const HomePage = {
    id: page_ids_1.HOME_PAGE_ID,
    name: 'Icarus Wiki',
    sections: [
        whatsIcarus,
        whereToRead,
    ]
};
exports.default = HomePage;
