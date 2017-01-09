var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var schemas = require('./schema.js');
var mongodbUri = 'mongodb://reader:reader@ds157258.mlab.com:57258/counterbuddy';

/* GET home page. */
router.get('/', function(req, res, next) {
  mongoose.connect(mongodbUri);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    var Data = schemas.Data;
    Data.find().exec(function(err, doc) {
      if(err){ throw err;}
      res.render('index',{
        num: doc[0]["click"],
      });
      mongoose.connection.close();
    });
  });
});




module.exports = router;
