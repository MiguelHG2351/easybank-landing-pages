const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.sendStatus(200);
})

app.listen(3000, () => {
    console.log('Server on port 3000')
})
