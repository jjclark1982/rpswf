
module.exports = {
  javascripts: {
    application: ['/app/config/shared/application', '/app/config/client/bootstrap', '/app/config/client/watch', '/app/config/shared/routes', '/app/controllers/client/applicationController', '/templates', '/app/views/client/layout/application', '/app/models/shared/move', '/app/views/client/moves/form', '/app/views/client/moves/index', '/app/views/client/moves/show', '/app/controllers/client/movesController', '/app/models/shared/game', '/app/views/client/games/form', '/app/views/client/games/index', '/app/views/client/games/show', '/app/controllers/client/gamesController', '/app/models/shared/user', '/app/views/client/users/form', '/app/views/client/users/index', '/app/views/client/users/show', '/app/controllers/client/usersController'],
    lib: [],
    vendor: ['/vendor/javascripts/underscore', '/vendor/javascripts/underscore.string', '/vendor/javascripts/moment', '/vendor/javascripts/geolib', '/vendor/javascripts/validator', '/vendor/javascripts/accounting', '/vendor/javascripts/inflection', '/vendor/javascripts/async', '/vendor/javascripts/socket.io', '/vendor/javascripts/handlebars', '/vendor/javascripts/ember', '/vendor/javascripts/jstorage', '/vendor/javascripts/tower', '/vendor/javascripts/bootstrap/bootstrap-dropdown'],
    development: ['/vendor/javascripts/mocha', '/vendor/javascripts/chai', '/test/client', '/test/cases/models/shared/moveTest', '/test/cases/models/shared/gameTest', '/test/cases/models/shared/userTest']
  },
  stylesheets: {
    application: ['/app/stylesheets/client/application'],
    lib: [],
    vendor: ['/vendor/stylesheets/bootstrap/bootstrap', '/vendor/stylesheets/prettify'],
    development: []
  }
};
