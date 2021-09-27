var express = require('express');
var router = express.Router();
var PersonController = require('./controller/personController');

router.get('/', function(req, res, next) {
    PersonController.getAllPeople({}, function(err, foundPeople) {
        if (err) {
            res
                .status(500)
                .json({ message: "Something went wrong! ", error: err })
        } else {
            res.json({ message: "Success", foundPeople })
        }
    })
})