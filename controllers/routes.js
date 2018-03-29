const express = require('express')
const router = express.Router()

// router.get('/', (req, res) => {
//   res.send('<h1>Kathy Lambert\'s API</h1>')
// })

router.get('/', (req, res) => {
  res.json({resume: 'Kathy Lambert\'s API'})
})

module.exports = router
