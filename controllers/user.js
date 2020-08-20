const User = require('../models/User')

module.exports = {
    getAllUser: (req, res) => {
        User.findAll ({
            raw:true
        })
        .then(result => {
            res.send({
                message: 'All Users',
                status: 200,
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
    createUser: (req,res) => {
        User.create(req.body)
        .then(result => {
            res.send({
                message: 'Profile Created!',
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
    findOneUser: (req, res) => {
        User.findOne({
            raw:true,
            where: {id_user: req.params.id}
            //{where: req.params.id_user}
           .then(result=> {
            res.send({
                message: 'Found User',
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
    })
},
    updateProfile: async (req, res) => {
            await User.update(req.body, {
                where: {
                    id_user: req.params.id
                }
            })
        .then(result => {
            res.send({
                message: 'Profile Updated',
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

    deleteProfile: async (req, res) => {
        await User.destroy({
            where: {id_user: req.params.id}
        })
        .then(result => {
            res.send({
                message: 'Profile deleted!',
                status: 201,
                result
            })
        })
        .catch(error => {
            console.log(error)
            res.send({
                message:'Internal Server Error',
                status:500
            })
        })
    }
}
