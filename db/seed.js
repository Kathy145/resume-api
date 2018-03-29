const seeds = require('./seedData')

const Resume = mongoose.model('Resume')

mongoose.Promise = Promise

Resume.remove({}).then(_ => {
  console.log('Dropped the DB')
  Bookmark.collection.insert(seeds).then(seededEntries => {
    console.log(seededEntries)
    mongoose.connection.close()
  })
})
