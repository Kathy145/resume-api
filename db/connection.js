const mongoose = require('./models/resume')
mongoose.Promise = Promise

const mongoUri = 'mongodb://localhost/resume-api'

mongoose
  .connect(mongoUri, { useMongoClient: true })
  .then(connection => console.log(`Connection established to db '${connection.db.databaseName}'`))
  .catch(connectionError => console.log('Connection failed!', connectionError))

module.exports = mongoose
