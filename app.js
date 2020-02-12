require('dotenv').config()

const express = require('express')
const app = express()
const mongoose     = require('mongoose');

// DB, middlewares, locals & debug
require('./configs/mongoose.config')
require('./configs/middlewares.config')(app)
require('./configs/preprocessor.config')(app)
require('./configs/locals.config')(app)
require('./configs/debug.config')

mongoose
  .connect('mongodb://localhost/repaso-crud', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

// Base URL's
app.use('/', require('./routes/index.routes'))
app.use('/coasters', require('./routes/coaster.routes'))
app.use('/parks', require('./routes/park.routes'))

module.exports = app