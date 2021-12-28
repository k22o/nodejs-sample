const express = require('express');
const dao = require('../middleware/dao');
const logger = require('../middleware/logger').console;
const request = require('request');

const router = express.Router();

router.get('/', async function(req, res, next) {
  let result = await dao.find();
  let data = {
    list: JSON.parse(result)
  };
  res.render('index.ejs', data);  
});

router.get('/add', function(req, res, next) {
  res.render('add.ejs', null);  
});

router.post('/add', function(req, res, next) {
  data = {
    "name": req.body.name
  }
  dao.add(data);

  res.redirect('/');  
});

router.get('/edit/:id', function(req, res, next) {

  data = {
    "id":req.params.id
  }
  res.render('edit.ejs', data);  
});

router.post('/edit/:id', function(req, res, next) {

  let data = {"name": req.body.name};
  console.log(data);
  dao.edit(req.params.id, data);
  res.redirect('/');  
});

router.get('/delete/:id', function(req, res, next) {
  dao.delete(req.params.id);
  res.redirect('/');  
});


module.exports = router;
