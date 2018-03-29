const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('<h1>Kathy Lambert\'s API</h1>')
})

module.exports = router
