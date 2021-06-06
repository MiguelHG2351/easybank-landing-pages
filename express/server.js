const serverless = require('serverless-http')
const express = require('express')
const cors = require('cors')
const handlebars = require('express-handlebars')
const path = require('path')
const app = express()
// const config = require('./config')

//routes
const home = require('../routes/index.routes')

// settings
app.set('views', path.join(process.cwd(), 'views'))
app.engine('hbs', handlebars({
    extname: '.hbs',
    defaultLayout: 'layout',
    layoutsDir: path.join(process.cwd(), 'views', 'layout')
}))
app.set('view engine', '.hbs')

// middleware
app.use(express.urlencoded({extended: true})) // Body parser
app.use(express.json())
app.use(cors())

// routes
// app.use('/', home)
app.use('/.netlify/functions/server', home);  // path must route to lambda

module.exports = app
module.exports.handler = serverless(app)