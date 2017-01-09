var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var schemas = require('./schema.js');
var mongodbUri = 'mongodb://reader:reader@ds157258.mlab.com:57258/counterbuddy';


/* GET users listing. */
router.get('/', function(req, res, next) {
  mongoose.connect(mongodbUri);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function callback () {

    var Champ = schemas.Champ;

    Champ.find(function(err, doc) {
      if(err){
        res.status(404);
        res.send('404 Error, Not Found');
        mongoose.connection.close();
      }
      res.render('search',{
        resultArr: doc,
        srched:""
      });
      mongoose.connection.close();
    });
  });
});

router.post('/', function(req, res, next) {
  var srched = req.body.inputBar;
  var scontent = new RegExp(srched);
  mongoose.connect(mongodbUri);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function callback () {
    var Champ = schemas.Champ;
    Champ.find({"key": {$regex: srched, $options: "i"}}, function(err, doc) {
      if(err){
        res.status(404);
        res.send('404 Error, Not Found');
        mongoose.connection.close();
      }
      if(doc.length == 0){
        Champ.find({"name": {$regex: srched, $options: "i"}}, function(err2, doc2) {
          if(err2){
            res.status(404);
            res.send('404 Error, Not Found');
            mongoose.connection.close();
          }
          res.render('search',{
            resultArr: doc2,
            srched:srched
          });
          mongoose.connection.close();
        });
      }
      else{
        res.render('search', {
          resultArr: doc,
          srched:srched
        });
        mongoose.connection.close();
      }
    });
  });

});


module.exports = router;
