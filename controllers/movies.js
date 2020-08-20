const Movies = require('../models/Movies')

module.exports = {
    addMovie: (req, res) => {
        Movies.create(req.body)
        .then(result => {
            res.send ({
                message: 'Movie Added!',
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

    deleteMovie: async (req, res) => {
        await Movies.destroy({
            where: {id_movie: req.params.id}
        })
        .then(result => {
            res.send ({
                message: 'Movie Deleted!',
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

    getAllMovie: (req, res) => {
        Movies.findAll({
            raw: true
        })
        .then(result => {
            res.send ({
                message: 'All Movies',
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

    getOneMovie: (req, res) => {
        Movies.findOne({
            raw: true,
            where: {id_movie: req.params.id}
        })
        .then(result => {
            res.send({
                message: "Here's Your Movie!",
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

    updateMovie: async (req, res) => {
        await Movies.update(req.body, {
            where: {id_movie: req.params.id}
        })
        .then(result => {
            res.send ({
                message: 'Movie Updated!',
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
    }
}