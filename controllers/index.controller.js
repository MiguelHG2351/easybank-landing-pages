const fs = require('fs')
const path = require('path')
const ctr = {}

ctr.home = function(req, res) {
    // let options = {
    //     root: './views',
    //     dotfiles: 'deny',
    //     headers: {
    //         'Content-Type': 'text/html',
    //         'x-tiemstamp': Date.now(),
    //         'x-sent': true
    //     }
    // }
    
    // res.sendFile('index.html', options, function(err) {
    //     if(err) console.log(err)
    // })
    res.render('index')
}

ctr.about = function(req, res) {
    res.sendStatus(200)
}

module.exports = ctr