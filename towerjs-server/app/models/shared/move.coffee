class App.Move extends Tower.Model
  @field 'action', type: 'String'
  @field 'gameID', type: 'String'

  @belongsTo 'game'

  @timestamps()
