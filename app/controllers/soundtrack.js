var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Album = mongoose.model('Album');

module.exports = function (app) {
    app.use('/', router);
};

router.get('/soundtrack', function (req, res, next) {
    Album.find(function (err, albums) {
        if (err) return next(err);
        res.render('soundtrack', {
            title: 'Soundtrack',
            slug: 'soundtrack',
            albums: albums
        });
    }).sort('order');
});
