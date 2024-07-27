const { connect } = require('../config/database-config');
const mongoose = require('mongoose');
const seedGenre = require('./genre-seeder');
const seedAuthor = require('./author-seeder');
const seedBooks = require('./book-seeder');

const seedAll = async () => {
    try {
        console.log("Seeding Started...")
        await connect();
        await seedGenre(false);
        await seedAuthor(false);
        await seedBooks(false);
    } catch (error) {
        console.log("Error while seeding data", error);
    } finally {
        console.log('Closing connection');
        mongoose.connection.close();
    }
}

seedAll();