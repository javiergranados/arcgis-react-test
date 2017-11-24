'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const api = require('./routes')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors({origin: 'http://localhost:8088'}))
app.use('/api', api)

module.exports = app
