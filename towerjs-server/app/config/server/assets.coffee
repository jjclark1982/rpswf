module.exports =
  javascripts:
    application: [
      '/app/config/shared/application'
      # "/config/environments/#{Tower.env}"
      '/app/config/client/bootstrap'
      '/app/config/client/watch'
      '/app/config/shared/routes'
      '/app/controllers/client/applicationController'
      '/templates'
      '/app/views/client/layout/application'
      '/app/models/shared/move'
      '/app/views/client/moves/form'
      '/app/views/client/moves/index'
      '/app/views/client/moves/show'
      '/app/controllers/client/movesController'
      '/app/models/shared/game'
      '/app/views/client/games/form'
      '/app/views/client/games/index'
      '/app/views/client/games/show'
      '/app/controllers/client/gamesController'
      '/app/models/shared/user'
      '/app/views/client/users/form'
      '/app/views/client/users/index'
      '/app/views/client/users/show'
      '/app/controllers/client/usersController'
    ]

    lib: [

    ]

    vendor: [
      '/vendor/javascripts/underscore'
      '/vendor/javascripts/underscore.string'
      '/vendor/javascripts/moment'
      '/vendor/javascripts/geolib'
      '/vendor/javascripts/validator'
      '/vendor/javascripts/accounting'
      '/vendor/javascripts/inflection'
      '/vendor/javascripts/async'
      '/vendor/javascripts/socket.io'
      '/vendor/javascripts/handlebars'
      '/vendor/javascripts/ember'
      '/vendor/javascripts/jstorage'
      '/vendor/javascripts/tower'
      # '/vendor/javascripts/uri'
      # '/vendor/javascripts/bootstrap/bootstrap-transition'
      # '/vendor/javascripts/bootstrap/bootstrap-alert'
      # '/vendor/javascripts/bootstrap/bootstrap-modal'
      '/vendor/javascripts/bootstrap/bootstrap-dropdown'
      # '/vendor/javascripts/bootstrap/bootstrap-scrollspy'
      # '/vendor/javascripts/bootstrap/bootstrap-tab'
      # '/vendor/javascripts/bootstrap/bootstrap-tooltip'
      # '/vendor/javascripts/bootstrap/bootstrap-popover'
      # '/vendor/javascripts/bootstrap/bootstrap-button'
      # '/vendor/javascripts/bootstrap/bootstrap-collapse'
      # '/vendor/javascripts/bootstrap/bootstrap-carousel'
      # '/vendor/javascripts/bootstrap/bootstrap-typeahead'
      # '/vendor/javascripts/prettify'
    ]

    development: [
      '/vendor/javascripts/mocha'
      '/vendor/javascripts/chai'
      '/test/client'
      '/test/cases/models/shared/moveTest'
      '/test/cases/models/shared/gameTest'
      '/test/cases/models/shared/userTest'
    ]

  stylesheets:
    application: [
      '/app/stylesheets/client/application'
    ]

    lib: [

    ]

    vendor: [
      '/vendor/stylesheets/bootstrap/bootstrap'
      '/vendor/stylesheets/prettify'
    ]

    development: [
      # '/vendor/stylesheets/mocha'
    ]
