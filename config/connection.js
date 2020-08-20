const Sequelize = require('sequelize')

const db = new Sequelize({
    host: 'localhost',
    dialect: 'mysql',
    database: 'netpliks_sequelize',
    username:'root',
    password:'rootroot'
})

module.exports = db