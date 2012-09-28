Tower.Factory.define 'user', ->
  email: Tower.random('email')
  name: Tower.random('fullName')
