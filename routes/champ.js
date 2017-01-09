var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var schemas = require('./schema.js');
var mongodbUri = 'mongodb://reader:reader@ds157258.mlab.com:57258/counterbuddy';

/* GET home page. */
router.get('/:key', function (req, res, next) {
  mongoose.connect(mongodbUri);
  db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function callback () {
    var Champ = schemas.Champ;
    var Data = schemas.Data;
    var requestChamp = req.params["key"];
    requestChamp = requestChamp.toLowerCase();
    Champ.find({key:requestChamp}, function(err, doc) {
      if(doc.length == 0 || err){
        res.status(404);
        res.send('404 Error, Not Found');
        mongoose.connection.close();
      }
      else{
        var cpImage = doc[0]["image"];
        var cpTitle = doc[0]["title"];
        var cpName = doc[0]["name"];
        var cpTip = doc[0]["enemytips"];
        var cpBanner = "../public" + doc[0]["banner"].substring(2);
        var arrLarge = doc[0]["strongAgainst"];
        var arrSmall = doc[0]["weakAgainst"];

        Data.find(function (err, doc) {
          var resultClick = doc[0]["click"];
          var newClick = resultClick + 1;
          Data.update({click: resultClick}, {$set:{click: newClick}},function (err, doc) {
            res.render("champ",{
              cpName: cpName,
              cpImage: cpImage,
              cpTitle: cpTitle,
              cpTip: cpTip,
              cpBanner: cpBanner,
              webTitle: cpName + " Counter",
              arrLarge: arrLarge,
              arrSmall: arrSmall
            });
            mongoose.connection.close();
          });
        });
      }
    });
  });
});


router.get('/', function(req, res, next) {
  res.send("404 error found!");
});





module.exports = router;
