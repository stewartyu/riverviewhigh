var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

module.exports = function (app) {
    app.use('/', router);
};

router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Riverview High The Musical',
        slug: 'home'
    });
});
