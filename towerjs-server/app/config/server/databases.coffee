module.exports =
  mongodb:
    development:
      name: 'towerjs-server-development'
      port: 27017
      host: 'ubuntu.vm'
    test:
      name: 'towerjs-server-test'
      port: 27017
      host: 'ubuntu.vm'
    staging:
      name: 'towerjs-server-staging'
      port: 27017
      host: 'ubuntu.vm'
    production:
      name: 'towerjs-server-production'
      port: 27017
      host: 'ubuntu.vm'
      # for heroku, comment out name/port/host above and just use `url`:
      #
      #   url: process.env.MONGOHQ_URL
      # 
      # then make sure you have the mongohq heroku addon:
      #   
      #   heroku addons:add mongohq:free

  redis:
    development:
      name: 'towerjs-server-development'
      port: 6397
      host: '127.0.0.1'
    test:
      name: 'towerjs-server-test'
      port: 6397
      host: '127.0.0.1'
    staging:
      name: 'towerjs-server-staging'
      port: 6397
      host: '127.0.0.1'
    production:
      name: 'towerjs-server-production'
      port: 6397
      host: '127.0.0.1'
