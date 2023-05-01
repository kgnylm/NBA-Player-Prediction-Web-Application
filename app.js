const express = require('express')
const morgan = require('morgan')
const playerRouter = require('./routes/playerRoutes')
const bodyparser = require('body-parser')
const app = express()
const cors = require('cors')

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors())

app.use('/api/v1/players', playerRouter)

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404))
})

module.exports = app
