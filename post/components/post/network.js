const express = require('express');

const response = require('../../../network/response');
const router = express.Router();
const Controller = require('./index');


router.get('/', list);

async function list(req, res, next) {
  Controller.list()
    .then(data => response.success(req, res, data, 200) )
    .catch(next)
}

module.exports = router