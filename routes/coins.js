var express = require('express');
var router = express.Router();
var coins = require('../models/Coin');

/* GET coins listing. */
router.get('/', function (req, res, next) {
  coins.find({}, (err, docs) => {
    if (err) {
      res.status(400).json({
        "success": false
      })
    } else {
      res.status(200).json({
        "success": true,
        docs
      })
    }
  })
});

/* GET coin by id listing*/
router.get("/:id", function (req, res, next) {
  var id = req.params.id || "";
  if (id === "") {
    res.status(400).json({
      "success": false
    });
  } else {
    coins.findById(id, (err, coin) => {
      if (err) {
        res.status(400).json({
          "success": false
        });
      } else {
        res.status(200).json({
          "success": true,
          coin
        });
      }
    });
  }
});

/* PUT coin listing */
router.post("/", function(req,res,next){
    let data = {
      name: req.body.name,
      country: req.body.country,
      symbol: req.body.symbol
    };

    var coin = new coins(data);
    coin.save((err,iCoin)=>{
      if (err){
        res.status(400).json({"success": false})
      } else {
        res.status(200).json({"success": true, iCoin})
      }
    });
});


module.exports = router;
