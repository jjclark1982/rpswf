class App.ApplicationController extends Tower.Controller
  @layout 'application'

  @param 'page', type: 'Number', allowRange: false, allowNegative: false
  @param 'limit', type: 'Number', allowRange: false, allowNegative: false
  @param 'sort', type: 'Order'
  @param 'fields', type: 'Array'
  @param 'createdAt', type: 'Date'
  @param 'updatedAt', type: 'Date'

  @beforeAction 'bootstrap'#, only: 'welcome'

  welcome: ->
    @render 'welcome', locals: {@bootstrapData}

  # Example of how you might bootstrap a one-page application.
  bootstrap: (callback) ->
    data = @bootstrapData = {}

    # for every model you add, you can add it to the bootstrap
    # dataset by using this async helper.
    _.series [
      (next) => App.User.all (error, users) =>
        data.users = users
        next()
      (next) => App.Game.all (error, games) =>
        data.games = games
        next()
      (next) => App.Move.all (error, moves) =>
        data.moves = moves
        next()
    ], callback
