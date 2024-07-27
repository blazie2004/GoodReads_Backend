const mongoose = require('mongoose');
const Author = require('../models/author');

const { connect } = require('../config/database-config');

async function seedAuthor(connectionRequired = true) {

    if (connectionRequired) {
        await connect();
    }

    const authors = [
        {
            _id: mongoose.Types.ObjectId('65ffba669e2673f6eac5793c'),
            name: 'Kazuo Ishiguro'
        },
        {
            _id: mongoose.Types.ObjectId('65ffba569e2673f6eac5793a'),
            name: 'Louise Penny'
        },
        {
            _id: mongoose.Types.ObjectId('65ffba4a9e2673f6eac57938'),
            name: 'Agatha Christie'
        },
        {
            _id: mongoose.Types.ObjectId('65ffba3e9e2673f6eac57936'),
            name: 'Lee Child'
        },
        {
            _id: mongoose.Types.ObjectId('65ffba349e2673f6eac57934'),
            name: 'John Grisham'
        },
        {
            _id: mongoose.Types.ObjectId('65ffba2a9e2673f6eac57932'),
            name: 'Gillian Flynn'
        },
        {
            _id: mongoose.Types.ObjectId('65ffba109e2673f6eac57930'),
            name: 'Brandon Sanderson'
        },
        {
            _id: mongoose.Types.ObjectId('65ffba039e2673f6eac5792e'),
            name: 'Joe Hill'
        },
        {
            _id: mongoose.Types.ObjectId('65ffb9f49e2673f6eac5792c'),
            name: 'Shirley Jackson'
        },
        {
            _id: mongoose.Types.ObjectId('65ffb9e99e2673f6eac5792a'),
            name: 'Trevor Noah'
        },
        {
            _id: mongoose.Types.ObjectId('65ffb9df9e2673f6eac57928'),
            name: 'Malala Yousafzai'
        },
        {
            _id: mongoose.Types.ObjectId('65ffb9d69e2673f6eac57926'),
            name: 'James Clear'
        },
        {
            _id: mongoose.Types.ObjectId('65ffb9c59e2673f6eac57924'),
            name: 'Mark Manson'
        },
        {
            _id: mongoose.Types.ObjectId('65ffb9b79e2673f6eac57922'),
            name: 'Yuval Noah Harari'
        },
        {
            _id: mongoose.Types.ObjectId('65ffb9aa9e2673f6eac57920'),
            name: 'Doris Kearns Goodwin'
        }
    ]

    await Author.insertMany(authors)
        .then(() => {
            console.log('Authors seeded successfully');
        })
        .catch((error) => {
            console.log('Error while seeding Authors', error);
        })
        .finally(() => {
            if (connectionRequired) {
                console.log('Closing connection');
                mongoose.connection.close();
            }
        });
}

module.exports = seedAuthor;