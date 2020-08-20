const express = require('express')
const router = require('express').Router()

const {
    getSubscription,
    deleteSubscription,
    makeSubscription
} = require('../controllers/subscriptions')

router.get('/subscription', getSubscription)
router.delete('/subscription/:id', deleteSubscription)
router.put('/subscription/:id', makeSubscription)

module.exports = router