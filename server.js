const express = require('express')
const cors = require('cors')
const app = express()
const config = require('./config')

//routes
const home = require('./routes/index.routes')

// settings

// middleware
app.use(cors())
app.use(express.urlencoded({extended: true})) // Body parser
app.use(express.json())
app.use('/public', express.static('public'))

// routes
app.use('/', home)

app.listen(config.port, () => {
    console.log(`Server on port ${config.port}`)
})
