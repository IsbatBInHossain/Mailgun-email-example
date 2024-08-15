const express = require('express')
const { sendMail } = require('./controllers')
const router = express.Router()

router.post('/sendmail', sendMail)

module.exports = router
