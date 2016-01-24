var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'riverviewhigh'
    },
    port: 3000,
    db: 'mongodb://localhost/riverviewhigh-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'riverviewhigh'
    },
    port: 3000,
    db: 'mongodb://localhost/riverviewhigh-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'riverviewhigh'
    },
    port: 3000,
    db: 'mongodb://heroku_rsw250st:bbk77p03iu0lrr13lfta93givq@ds049945.mongolab.com:49945/heroku_rsw250st'
  }
};

module.exports = config[env];
