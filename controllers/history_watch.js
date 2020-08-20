const History = require('../models/History_Watch')
const User = require('../models/User')
const Movies = require('../models/Movies')

module.exports = {
    getHistory: (req, res) => {
        History.findAll({
            raw: true,
            include: User, Movies
        })
        .then(result => {
            res.send({
                message: 'Here are your History',
                status: 201,
                result
            })
        })
        .catch(error => {
            console.log(error)
            res.send({
                message: 'Internal Server Error',
                status: 500
            })
        })
    },

    postHistory: (req, res) => {
        History.create(req.body)
        .then(result => {
            res.send({
                message: 'History Added',
                status: 201,
                result
            })
        })
        .catch(error => {
            console.log(error)
            res.send({
                message: 'Internal Server Error',
                status: 500
            })
            
        })
    },

    deleteHistory: async (req, res) => {
        await History.destroy({
            where: {id_history: req.params.id}
        })
        .then(result => {
            res.send({
                message: 'History Deleted!',
                status: 201,
                result
            })
        })
        .catch(err => {
            console.log(err)
            res.send ({
                message: 'Internal Server Error',
                status: 500
            })
        })
    }
}