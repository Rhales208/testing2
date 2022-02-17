const express = require('express')//imports express
const app = express()

app.use(express.json())

app.get("/", (req,res) => {
    res.send("Hello Darkness!")
})

module.exports = app;