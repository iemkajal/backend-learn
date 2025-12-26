require('dotenv').config()
const express = require('express')
const app = express()
const port = 5001

app.get('/', (req, res) => (
    res.send('hello world')
))

app.get('/twitter', (req, res)=>{
    res.send('<h1>kajal</h1>')
})

app.get('/login', (req,res)=>{
    res.send('signup page')
})
app.listen(process.env.PORT , () => {
    console.log(`example app listening on port ${port}`)
})