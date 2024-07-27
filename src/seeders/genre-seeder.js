const mongoose = require('mongoose');
const Genre = require('../models/genre');

const { connect } = require('../config/database-config');

async function seedGenre(connectionRequired = true) {

    if (connectionRequired) {
        await connect();
    }

    const genres = [
        {
            _id: mongoose.Types.ObjectId('65ffb83e9e2673f6eac5791e'),
            name: 'History'
        },
        {
            _id: mongoose.Types.ObjectId('65ffb82f9e2673f6eac5791c'),
            name: 'Self-help'
        },
        {
            _id: mongoose.Types.ObjectId('65ffb81f9e2673f6eac5791a'),
            name: 'Autobiography'
        },
        {
            _id: mongoose.Types.ObjectId('65ffb8149e2673f6eac57918'),
            name: 'Horror'
        },
        {
            _id: mongoose.Types.ObjectId('65ffb8089e2673f6eac57916'),
            name: 'Fantasy'
        },
        {
            _id: mongoose.Types.ObjectId('65ffb8019e2673f6eac57914'),
            name: 'Thriller'
        },
        {
            _id: mongoose.Types.ObjectId('65ffb7f89e2673f6eac57912'),
            name: 'Mystery'
        },
        {
            _id: mongoose.Types.ObjectId('65ffb7e89e2673f6eac57910'),
            name: 'Fiction'
        }
    ]

    await Genre.insertMany(genres)
        .then(() => {
            console.log('Genres seeded successfully');
        })
        .catch((error) => {
            console.log('Error while seeding genres', error);
        })
        .finally(() => {
            if (connectionRequired) {
                console.log('Closing connection');
                mongoose.connection.close();
            }
        });
}

module.exports = seedGenre;