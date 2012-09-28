class App.Game extends Tower.Model
  @hasMany 'users'
  @hasMany 'moves'

  @timestamps()
