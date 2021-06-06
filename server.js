const express = require('express')
const cors = require('cors')
const handlebars = require('express-handlebars')
const path = require('path')
const app = express()
const config = require('./config')

//routes
const home = require('./routes/index.routes')

// settings
app.set('views', path.join(__dirname, 'views'))
app.engine('hbs', handlebars({
    extname: '.hbs',
    defaultLayout: 'layout',
    layoutsDir: path.join(__dirname, 'views', 'layout')
}))
app.set('view engine', '.hbs')

// middleware
app.use(express.urlencoded({extended: true})) // Body parser
app.use(express.json())
app.use(express.static('public'))
app.use(cors())

// routes
app.use('/', home)

app.listen(config.port, () => {
    console.log(`Server on port ${config.port}`)
})
