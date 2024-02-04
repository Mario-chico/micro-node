const express = require('express');

const secure = require('./secure');
const response = require('../../../network/response');
const router = express.Router();
const Controller = require('./index');


router.get('/', list);
router.post('/follow/:id',secure('follow'), follow)
router.get('/:id:following', following);
router.get('/:id', get);
router.post('/', upsert);
router.put('/',secure('update'), upsert);

async function list(req, res, next) {
  try {
    const list = await Controller.list();
    response.success(req, res, list, 200)  
  } catch (e){
    response.error(req, res, e.message, 500)
  }
} 

async function get(req, res, next) {
  try {
    const user = await Controller.get(req.params.id);
    response.success(req, res, user, 200)
  } catch (e){
    response.error(req, res, e.message, 500)
  }
}

async function upsert(req, res, next) {
  try {
    const user = await Controller.upsert(req.body);
    response.success(req, res, user, 201)
  } catch (e){
    response.error(req, res, e.message, 500)
  }
}

function follow(req, res, next){
  Controller.follow(req.user.id, req.params.id)
    .then(data => {
      response.success(req, res, data, 201);
    })
    .catch(next);
}

function following(req, res, next){
  return Controller.following(req.params.id)
    .then(data => {
      return response.success(req, res, data, 201);
    })
    .catch(next);
}


module.exports = router;