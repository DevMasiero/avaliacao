const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/database');
const Post = require('./postModel');

const Comentario = sequelize.define('Comentario', {
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

Comentario.belongsTo(Post);
Post.hasMany(Comentario);

module.exports = Comentario;