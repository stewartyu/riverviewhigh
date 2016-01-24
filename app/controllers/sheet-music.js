var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Score = mongoose.model('Score');

module.exports = function (app) {
    app.use('/', router);
};

router.get('/sheet-music', function (req, res, next) {
    Score.find(function (err, scores) {
        console.log(scores);
        if (err) return next(err);
        res.render('sheet-music', {
            title: 'Sheet Music',
            slug: 'sheet-music',
            scores: scores
        });
    }).sort('order');
});
