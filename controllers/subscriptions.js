const Subscriptions = require('../models/Subscriptions')
const User = require('../models/User')

module.exports = {
    makeSubscription: async (req,res) => {
        await Subscriptions.update(req.body, {
            where: {
                id_user: req.params.id
            }
        })
        .then(result => {
            res.send({
                message: 'Subscription Added!',
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
    deleteSubscription: async (req, res) => {
        await Subscriptions.destroy({
            where: {
                id_user: req.params.id
            }
        })
        .then(result => {
            res.send({
                message: 'Subscription deleted!',
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
    
    getSubscription: (req, res) => {
        Subscriptions.findAll ({
            raw: true,
            include: User
        })
        .then(result => {
            res.send({
                message: 'Subscriptions',
                status: 201,
                result
            })
        })
        .catch(error => {
            console.log(error)
            res.send ({
                message: 'Internal Server Error',
                status: 201
            })
        }) 
    }
}