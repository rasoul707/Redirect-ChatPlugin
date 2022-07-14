const express = require('express')
const path = require('path')
const app = express()
require('dotenv').config()


const { URL, PORT, CHAT_TOKEN, } = process.env

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')


app.get('/chat', function (req, res) {
    const data = { ...req.query, token: CHAT_TOKEN, }
    res.render(path.join(__dirname, 'chat.html'), data)
})


app.get('*', function (req, res) {
    res.redirect(URL + req.url)
})



app.listen(PORT, () => console.log(`Server is running on ${PORT}`))