const express = require('express')
const router = require('express').Router()

const {
    addMovie,
    deleteMovie,
    getAllMovie,
    getOneMovie,
    updateMovie
} = require('../controllers/movies')

router.get('/movies', getAllMovie)
router.get('/movies/:id', getOneMovie)
router.delete('/movies/:id', deleteMovie)
router.post('/movies', addMovie)
router.put('/movies/:id', updateMovie)

module.exports = router;