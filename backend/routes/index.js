const express = require('express');
const repository = require('../middleware/repository')
const router = express.Router();


router.get('/', function(req, res, next) {
  repository.find().then(result => {
    responseExecute(res, result);
  });
});

router.get('/:id', function(req, res, next) {
  repository.get(req.params.id).then(result => {
    responseExecute(res, result);
  });  
});

router.post('/', function(req, res, next) {
  repository.add(req.body).then(result => {
    responseExecute(res, result);
  });
});

router.patch('/:id', function(req, res, next) {
  repository.update(req.params.id, req.query).then(result => {
    responseExecute(res, result);
  });
});

router.delete('/:id', function(req, res, next) {
  repository.remove(req.params.id).then(result => {
    responseExecute(res, result);
  });
});

function responseExecute(res, result) {
  res.header('Content-Type','application/json; charset=utf-8');
  res.send(result);  
}


module.exports = router;

