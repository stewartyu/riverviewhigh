var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

module.exports = function (app) {
    app.use('/', router);
};

router.get('/about', function (req, res, next) {
    res.render('about', {
        title: 'About',
        slug: 'about'
    });
});
