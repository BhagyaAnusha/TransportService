var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

/* GET users listing. */
router.get('/', function (req, res, next) {
  let mydbSchema = mongoose.Schema({
    name: String,
    email: String
  });

  let dataToSave = new mydbSchema({
    name: 'demo',
    email: 'demo@demo.com'
  });

  dataToSave.save(function (err) {
    if (err) throw err;
    console.log('User created successfully.');
  });
  res.send('respond with a resource');
});

module.exports = router;
