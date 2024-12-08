'use strict';

const { Model, DataTypes } = require('sequelize'); // Import Sequelize essentials

module.exports = (sequelize) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index.js` file will call this method automatically.
     */
    static associate(models) {
      // Example: this.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }

  // Define the Movie model schema
  Movie.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false, // Title is required
      },
      director: {
        type: DataTypes.TEXT,
        allowNull: true, // Optional field
      },
      release_year: {
        type: DataTypes.INTEGER,
        allowNull: false, // Required field
      },
      rating: {
        type: DataTypes.FLOAT,
        allowNull: true, // Optional field
      },
      genre: {
        type: DataTypes.STRING, // Changed from FLOAT to STRING for better usability
        allowNull: true, // Optional field
      },
    },
    {
      sequelize, // Pass the Sequelize instance
      modelName: 'Movie', // Name used internally by Sequelize
      tableName: 'Movies', // Database table name
      timestamps: true, // Enables createdAt and updatedAt columns
    }
  );

  return Movie;
};
