describe 'GamesController', ->
  controller = undefined
  game = undefined
  url = undefined

  beforeEach (done) ->
    controller = App.GamesController.create()
    agent.controller = controller
    Tower.start(done)

  afterEach ->
    Tower.stop()
    delete agent.controller

  describe 'routes', ->
    test 'index', ->
      assert.equal urlFor(App.Game), "/games"

    test 'new', ->
      game = App.Game.build()
      assert.equal urlFor(game, action: 'new'), "/games/new"

    test 'show', ->
      game = new App.Game(id: 1)
      assert.equal urlFor(game), "/games/#{game.get('id')}"

    test 'edit', ->
      game = new App.Game(id: 1)
      assert.equal urlFor(game, action: 'edit'), "/games/#{game.get('id')}/edit"

  describe '#index', ->
    beforeEach (done) ->
      factory 'game', (error, record) =>
        game = record
        done()

    test 'render json', (done) ->
      get urlFor(App.Game), format: "json", (request) ->
        assert.equal @headers["Content-Type"], 'application/json'

        done()

  describe '#new', ->

  describe '#create', ->
    beforeEach ->
      url = urlFor(App.Game)

    test 'params', (done) ->
      params = {}

      post url, format: "json", params: params, (response) ->
        App.Game.count (error, count) =>
          assert.equal count, 1
          done()

  describe "#show", ->

  describe "#edit", ->

  describe "#update", ->

  describe "#destroy", ->
