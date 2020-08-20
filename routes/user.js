const express = require('express')
const router = require('express').Router()

const {
    getAllUser,
    createUser,
    findOneUser,
    updateProfile,
    deleteProfile
} = require('../controllers/user')

router.get('/users', getAllUser)
router.post('/users',createUser)
router.get('/users/:id', findOneUser)
router.put('/users/:id', updateProfile)
router.delete('/users/:id', deleteProfile)

module.exports = router;
