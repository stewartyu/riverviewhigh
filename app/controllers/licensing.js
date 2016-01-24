var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/licensing', function (req, res, next) {
    res.render('licensing', {
        title: 'Licensing',
        slug: 'licensing'
    });
});
