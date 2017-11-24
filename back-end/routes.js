'use strict'

const express = require('express')
const userController = require('./controller')
const api = express.Router()

api.get('/data', userController.getData)

module.exports = api
