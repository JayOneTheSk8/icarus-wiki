"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const whatsThis = {
    title: "What's This Wiki For?",
    sectionImage: {
        url: 'https://www.w3schools.com/tags/img_girl.jpg',
        caption: 'Section Image'
    },
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet elit mauris, ac efficitur ex eleifend et. Cras et varius nunc. Nullam accumsan cursus diam nec molestie. Sed congue, arcu sed lobortis egestas, risus dolor porta odio, at finibus sapien magna at enim. Nulla tristique tellus lorem, tincidunt rhoncus libero volutpat molestie. Proin in dictum sapien. Fusce pulvinar, ipsum pulvinar tristique aliquet, felis risus sollicitudin risus, in consectetur elit tellus sed urna. Sed id vehicula lectus. Mauris sed justo elit. Vivamus eu ante id velit vehicula consectetur ultrices imperdiet purus. Donec dapibus ligula in ultricies ornare. Nulla tristique, turpis vitae pretium aliquam, urna lacus tempor massa, quis fringilla massa sem maximus purus. Fusce ornare lectus sit amet leo accumsan, tincidunt commodo lacus facilisis. Nunc vitae libero ipsum. Etiam luctus nunc ut ligula aliquet rhoncus. Donec gravida risus ac velit fermentum, sed hendrerit dolor elementum. Nulla vitae eros vel dolor suscipit tristique. Mauris imperdiet, eros eget venenatis rutrum, nisi ante commodo nulla, scelerisque varius erat lacus quis ex. Vestibulum molestie, ligula sit amet dignissim dictum, sem massa ullamcorper nunc, ac suscipit diam eros non felis.'
};
const abilities = {
    title: constants_1.ABILITIES,
    body: [
        {
            subSectionTitle: 'Cool Move',
            subSectionImage: {
                url: 'https://www.w3schools.com/tags/img_girl.jpg',
                caption: 'Subsection Image'
            },
            subSectionText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet elit mauris, ac efficitur ex eleifend et. Cras et varius nunc. Nullam accumsan cursus diam nec molestie. Sed congue, arcu sed lobortis egestas, risus dolor porta odio, at finibus sapien magna at enim. Nulla tristique tellus lorem, tincidunt rhoncus libero volutpat molestie. Proin in dictum sapien. Fusce pulvinar, ipsum pulvinar tristique aliquet, felis risus sollicitudin risus, in consectetur elit tellus sed urna. Sed id vehicula lectus. Mauris sed justo elit. Vivamus eu ante id velit vehicula consectetur ultrices imperdiet purus. Donec dapibus ligula in ultricies ornare.'
        },
        {
            subSectionTitle: 'Hot Moves',
            subSectionText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet elit mauris, ac efficitur ex eleifend et. Cras et varius nunc. Nullam accumsan cursus diam nec molestie. Sed congue, arcu sed lobortis egestas, risus dolor porta odio, at finibus sapien magna at enim. Nulla tristique tellus lorem, tincidunt rhoncus libero volutpat molestie. Proin in dictum sapien. Fusce pulvinar, ipsum pulvinar tristique aliquet, felis risus sollicitudin risus, in consectetur elit tellus sed urna. Sed id vehicula lectus. Mauris sed justo elit. Vivamus eu ante id velit vehicula consectetur ultrices imperdiet purus. Donec dapibus ligula in ultricies ornare.'
        }
    ]
};
const attributes = {
    title: constants_1.ATTRIBUTES,
    attributes: [
        {
            attributeName: 'Age',
            attributeText: '16'
        },
        {
            attributeName: 'Occupation',
            attributeText: 'Social Worker'
        },
        {
            attributeName: 'Place of Birth',
            attributeText: 'New York, NY'
        },
        {
            attributeName: 'Other Thing',
            attributeText: 'Notes for other thing'
        }
    ]
};
const gallery = {
    title: constants_1.GALLERY,
    gallery: [
        {
            url: 'https://www.w3schools.com/tags/img_girl.jpg',
            caption: 'Gallery Image'
        },
        {
            url: 'https://www.w3schools.com/tags/img_girl.jpg',
            caption: 'Gallery Image'
        },
        {
            url: 'https://www.w3schools.com/tags/img_girl.jpg',
            caption: 'Gallery Image'
        }
    ]
};
const HomePage = {
    name: 'My Wiki',
    pageImage: {
        url: 'https://www.w3schools.com/tags/img_girl.jpg',
        caption: 'Page Image'
    },
    sections: [
        whatsThis,
        abilities,
        attributes,
        gallery,
    ]
};
exports.default = HomePage;
