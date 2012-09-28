class App.User extends Tower.Model
  @field 'email', type: 'String'
  @field 'name', type: 'String'

  @hasMany 'games'

  @timestamps()
