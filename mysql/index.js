const express = require('express')
const bodyParser = require('body-parser')

const config = require('../config')
const router = require('./network')

const app = express()

app.use(bodyParser.json())

app.use('/', router)

app.listen(config.mysqlService.port, () => {
  console.log('servicio de mysql escucando en el puerto', config.mysqlService.port);
})