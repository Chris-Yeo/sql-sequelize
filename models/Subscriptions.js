const db = require('../config/connection')
const Sequelize = require('sequelize');

const User = require('./User')

const Subscriptions = db.define('subscriptions', {
    id_subscription: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    id_user: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    status: {
        type: Sequelize.BOOLEAN
    }
}, {

});

User.hasOne(Subscriptions, {
    foreignKey: 'id_user'
});
Subscriptions.belongsTo(User, {
    foreignKey: 'id_user',
    constraints: false
});

module.exports = Subscriptions