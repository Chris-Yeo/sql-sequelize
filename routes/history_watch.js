const express = require('express')
const router = require('express').Router()

const {
    getHistory,
    postHistory,
    deleteHistory
} = require('../controllers/history_watch')

router.get('/history', getHistory)
router.post('/history', postHistory)
router.delete('/history/:id', deleteHistory)

module.exports = router;