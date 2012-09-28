describe 'App.Move', ->
  move = undefined

  describe 'fields', ->
    beforeEach (done) ->
      move = App.Move.build
        action: 'A action'
        gameID: 'A gameID'

      done()

    test 'action', ->
      assert.ok move.get('action')

    test 'gameID', ->
      assert.ok move.get('gameID')

  describe 'relations', ->
