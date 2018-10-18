const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
const Church = require('./api/models/churchModel')
const bodyParser = require('body-parser')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/MyKingdomDB')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const routes = require('./api/routes/churchRoutes')
routes(app)

app.listen(port)

console.log("Server started on port " + port)