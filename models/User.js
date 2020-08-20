 
const db = require('../config/connection')
const Sequelize = require('sequelize');


const User = db.define('user', {
    id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    fullName: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    userName: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(50),
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    hashedPassword: {
        type: Sequelize.STRING(64),
        is: ["/^[0-9a-z]{64}+$",'i']
    },
    address: {
        type: Sequelize.STRING(200)
    }
}, {

});


module.exports = User