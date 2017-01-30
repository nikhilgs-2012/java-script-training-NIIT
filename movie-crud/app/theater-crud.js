var express = require('express');
var router = express.Router();
bodyParser = require('body-parser'); //parses information from POST

var mongoose = require('mongoose');


var theaterSchema = mongoose.Schema({
  
  theaterName: String,
  city: String,
  seats: String,
 
 });

var Theater = mongoose.model('Theater', theaterSchema, 'theater');

router.get('/getTheater', function (req, res) {
    console.log("REACHED GET Theater FUNCTION ON SERVER");
    Theater.find({}, function (err, docs) {
         res.json(docs);
   });

});

router.get('/getTheater/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     Theater.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);
         
    });

});

router.post('/addTheater', function(req, res){
 
 
  var theaterName = req.body.theaterName;
  var city = req.body.city;
  var seats = req.body.seats;
  
  var theater = new Theater({
    
    theaterName: theaterName,
    city: city,
    seats: seats,
       
  });

  theater.save(function(err, docs){
    if ( err ) throw err;
    console.log("Theater Saved Successfully");
    res.json(docs);
    
  });

})

router.delete('/deleteTheater/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      Theater.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/updateTheater/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
    Theater.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
      console.log(data);
      res.json(data);
    });
})

// catch 404 and forward to error handler
router.use(function(req, res, next) {
  var err = new Error('Not Found'); 
  err.status = 404;
  next(err);
});


module.exports = router;
