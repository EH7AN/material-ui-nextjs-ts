'use strict';

const path = require('path');
const { Sequelize, DataTypes} = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};

let sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect:'mysql',
  dialectModule: require('mysql2'),
});

db.Movies = movieModel(sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;



function movieModel(sequelize) {
  const attributes = {
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
  };

  const options = {
    modelName: 'Movie', // Name used internally by Sequelize
    tableName: 'Movies', // Database table name
    timestamps: true, // Enables createdAt and updatedAt columns
    defaultScope: {
      // exclude password hash by default
      attributes: { exclude: ['hash'] }
    },
    scopes: {
      // include hash with this scope
      withHash: { attributes: {}, }
    }
  };

  return sequelize.define('Movie', attributes, options);
}

module.exports = db;
