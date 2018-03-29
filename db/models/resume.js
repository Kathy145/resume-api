const mongoose = require('mongoose')

const ResumeSchema = new mongoose.Schema({
  company: String,
  position: String,
  startDate: String,
  endDate: String,
  location: String,
  duties: Array,
})

mongoose.model('Reume', ResumeSchema)

module.exports = mongoose
