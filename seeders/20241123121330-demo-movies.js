'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Movies', [
      {
        "title": "The Godfather",
        "director": "Francis Ford Coppola",
        "release_year": 1972,
        "genre": "Crime",
        "rating": 9.2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        "title": "The Matrix",
        "director": "The Wachowskis",
        "release_year": 1999,
        "genre": "Sci-Fi",
        "rating": 8.7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        "title": "Fight Club",
        "director": "David Fincher",
        "release_year": 1999,
        "genre": "Drama",
        "rating": 8.8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        "title": "The Shawshank Redemption",
        "director": "Frank Darabont",
        "release_year": 1994,
        "genre": "Drama",
        "rating": 9.3,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Movies', null, {});
  }
};
