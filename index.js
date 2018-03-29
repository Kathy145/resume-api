// console.log('Hello World')

const express = require('express')
const app = express()

const routesController = require('./controllers/routes')

app.set('port', process.env.PORT || 3420)

app.use('/api/routes/', routesController)


app.listen(app.get('port'), () => {
  console.log(`✅  It's aliiive on PORT: ${app.get('port')} Aww...yeah!🌟`)
})

