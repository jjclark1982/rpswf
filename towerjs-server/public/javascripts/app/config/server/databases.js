(function() {

  module.exports = {
    mongodb: {
      development: {
        name: 'towerjs-server-development',
        port: 27017,
        host: 'ubuntu.vm'
      },
      test: {
        name: 'towerjs-server-test',
        port: 27017,
        host: 'ubuntu.vm'
      },
      staging: {
        name: 'towerjs-server-staging',
        port: 27017,
        host: 'ubuntu.vm'
      },
      production: {
        name: 'towerjs-server-production',
        port: 27017,
        host: 'ubuntu.vm'
      }
    },
    redis: {
      development: {
        name: 'towerjs-server-development',
        port: 6397,
        host: '127.0.0.1'
      },
      test: {
        name: 'towerjs-server-test',
        port: 6397,
        host: '127.0.0.1'
      },
      staging: {
        name: 'towerjs-server-staging',
        port: 6397,
        host: '127.0.0.1'
      },
      production: {
        name: 'towerjs-server-production',
        port: 6397,
        host: '127.0.0.1'
      }
    }
  };

}).call(this);
