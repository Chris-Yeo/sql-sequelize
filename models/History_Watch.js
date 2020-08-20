const db = require('../config/connection')
const Sequelize = require('sequelize');

const User = require('./User')
const Movies = require('./Movies')
const Subscriptions = require('./Subscriptions')

const History = db.define('history_watch', {
    id_history: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    id_movie: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    id_user: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {

});

User.hasMany(History, {
    foreignKey: 'id_user'
});
History.belongsTo(User, {
    foreignKey: 'id_user',
    constraints: false
});

Movies.hasMany(History, {
    foreignKey: 'id_movie'
});
History.belongsTo(Movies, {
    foreignKey: 'id_movie',
    contraints: false
});

Subscriptions.hasMany(History, {
    foreignKey: 'id_subscription'
});
History.belongsTo(Subscriptions, {
    foreignKey: 'id_subscription',
    constraints: false
});

module.exports = History;

