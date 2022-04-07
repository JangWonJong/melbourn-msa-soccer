const { signup } = require('../controllers/user.controller')
module.exports = x => x.app.post(`${x.url}/sign-up`, signup)


/**
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/

