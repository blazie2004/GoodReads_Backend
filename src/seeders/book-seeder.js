const mongoose = require('mongoose');
const Book = require('../models/book');

const { connect } = require('../config/database-config');

async function seedBooks(connectionRequired = true) {

    if (connectionRequired) {
        await connect();
    }

    const books = [
        {
            _id: mongoose.Types.ObjectId('6600ebf49e2673f6eac57946'),
            title: 'The Remains of the Day',
            description: 'A poignant exploration of duty, regret, and missed opportunities as seen through the eyes of an aging butler in post-World War II England.',
            author: '65ffba669e2673f6eac5793c',
            genres: ['65ffb7e89e2673f6eac57910', '65ffb83e9e2673f6eac5791e'],
            pages: 256,
            publishDate: '1989',
            rating: 0
        },
        {
            _id: mongoose.Types.ObjectId('6600ec6d9e2673f6eac5794a'),
            title: 'Still Life',
            description: 'Chief Inspector Armand Gamache of the Sûreté du Québec and his team of investigators are called in to the scene of a suspicious death in a rural village south of Montreal.',
            author: '65ffba569e2673f6eac5793a',
            genres: ['65ffb7f89e2673f6eac57912'],
            pages: 288,
            publishDate: '2005',
            rating: 0
        },
        {
            _id: mongoose.Types.ObjectId('6600ecd99e2673f6eac5794e'),
            title: 'And Then There Were None',
            description: 'Ten strangers are invited to an isolated island mansion and systematically murdered, creating a chilling puzzle of suspicion and survival.',
            author: '65ffba4a9e2673f6eac57938',
            genres: ['65ffb7f89e2673f6eac57912', '65ffb8019e2673f6eac57914'],
            pages: 288,
            publishDate: '1939',
            rating: 0
        },
        {
            _id: mongoose.Types.ObjectId('6600ed8e9e2673f6eac57952'),
            title: 'Killing Floor',
            description: 'Jack Reacher, a drifter and ex-military police officer, gets embroiled in a deadly conspiracy in a small Georgia town.',
            author: '65ffba3e9e2673f6eac57936',
            genres: ['65ffb8019e2673f6eac57914', '65ffb7e89e2673f6eac57910'],
            pages: 400,
            publishDate: '1997',
            rating: 0
        },
        {
            _id: mongoose.Types.ObjectId('6600ede99e2673f6eac57956'),
            title: 'Gone Girl',
            description: 'On his fifth wedding anniversary, Nick Dunne\'s wife Amy disappears. Lies, betrayals, and expertly crafted twists lead down a dark, disturbing path.',
            author: '65ffba2a9e2673f6eac57932',
            genres: ['65ffb7f89e2673f6eac57912'],
            pages: 432,
            publishDate: '2012',
            rating: 0
        },
        {
            _id: mongoose.Types.ObjectId('6600ee3a9e2673f6eac5795a'),
            title: 'Heart-Shaped Box',
            description: 'An aging rock star purchases a haunted item with terrifying consequences – a vengeful ghost intent on destroying his life.',
            author: '65ffba039e2673f6eac5792e',
            genres: ['65ffb8149e2673f6eac57918'],
            pages: 400,
            publishDate: '2007',
            rating: 0
        },
        {
            _id: mongoose.Types.ObjectId('6600ee8a9e2673f6eac5795e'),
            title: 'The Haunting of Hill House',
            description: 'A paranormal investigator assembles a group to explore a notoriously haunted mansion, where psychological terror and supernatural forces collide.',
            author: '65ffb9f49e2673f6eac5792c',
            genres: ['65ffb8149e2673f6eac57918', '65ffb7e89e2673f6eac57910'],
            pages: 192,
            publishDate: '1959',
            rating: 0
        }
    ]

    await Book.insertMany(books)
        .then(() => {
            console.log('Books seeded successfully');
        })
        .catch((error) => {
            console.log('Error while seeding Books', error);
        })
        .finally(() => {
            if (connectionRequired) {
                console.log('Closing connection');
                mongoose.connection.close();
            }
        });
}

module.exports = seedBooks;