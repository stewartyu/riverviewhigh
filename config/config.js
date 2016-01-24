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
    db: 'mongodb://localhost/riverviewhigh-production'
  }
};

module.exports = config[env];
