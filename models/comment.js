const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model { }

Comment.init(
    {
    body: DataTypes.STRING
    },
    {
        sequelize,
        modelName: 'comment',
        underscored: true,
        freezeTableName: true,
        timestamps: false,
    }
);

module.exports = Comment;