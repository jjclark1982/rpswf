describe 'App.User', ->
  user = undefined

  describe 'fields', ->
    beforeEach (done) ->
      user = App.User.build
        email: 'A email'
        name: 'A name'

      done()

    test 'email', ->
      assert.ok user.get('email')

    test 'name', ->
      assert.ok user.get('name')

  describe 'relations', ->
