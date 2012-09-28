describe 'MovesController', ->
  controller = undefined
  move = undefined
  url = undefined

  beforeEach (done) ->
    controller = App.MovesController.create()
    agent.controller = controller
    Tower.start(done)

  afterEach ->
    Tower.stop()
    delete agent.controller

  describe 'routes', ->
    test 'index', ->
      assert.equal urlFor(App.Move), "/moves"

    test 'new', ->
      move = App.Move.build()
      assert.equal urlFor(move, action: 'new'), "/moves/new"

    test 'show', ->
      move = new App.Move(id: 1)
      assert.equal urlFor(move), "/moves/#{move.get('id')}"

    test 'edit', ->
      move = new App.Move(id: 1)
      assert.equal urlFor(move, action: 'edit'), "/moves/#{move.get('id')}/edit"

  describe '#index', ->
    beforeEach (done) ->
      factory 'move', (error, record) =>
        move = record
        done()

    test 'render json', (done) ->
      get urlFor(App.Move), format: "json", (request) ->
        assert.equal @headers["Content-Type"], 'application/json'

        done()

  describe '#new', ->

  describe '#create', ->
    beforeEach ->
      url = urlFor(App.Move)

    test 'params', (done) ->
      params = {}

      post url, format: "json", params: params, (response) ->
        App.Move.count (error, count) =>
          assert.equal count, 1
          done()

  describe "#show", ->

  describe "#edit", ->

  describe "#update", ->

  describe "#destroy", ->
