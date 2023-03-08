const express = require('express')
require('./DBConnection')
const app = express()
const port = process.env.PORT || 3001
const router = require("./router")
const cors = require("cors")
const { User } = require("./Models/UserModel")



app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(router)


app.listen(port, () => {
    console.log(`My app is listening on localhost:${port}`)
})