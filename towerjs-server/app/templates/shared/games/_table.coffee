
tableFor 'games', (t) ->
  t.head ->
    t.row ->
  t.body ->
    text '{{#each game in App.gamesController.all}}'
    t.row class: 'game', ->
      t.cell ->
        a '{{action showGame game href=true}}', 'Show'
        span '|'
        a '{{action editGame game href=true}}', 'Edit'
        span '|'
        a '{{action destroyGame game}}', 'Destroy'
    text '{{/each}}'
  t.foot ->
    t.row ->
      t.cell colspan: 3, ->
        a '{{action newGame game href=true}}', 'New Game'

