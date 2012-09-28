
tableFor 'moves', (t) ->
  t.head ->
    t.row ->
      t.header 'action', sort: true
      t.header 'gameID', sort: true
  t.body ->
    text '{{#each move in App.movesController.all}}'
    t.row class: 'move', ->
      t.cell '{{move.action}}'
      t.cell '{{move.gameID}}'
      t.cell ->
        a '{{action showMove move href=true}}', 'Show'
        span '|'
        a '{{action editMove move href=true}}', 'Edit'
        span '|'
        a '{{action destroyMove move}}', 'Destroy'
    text '{{/each}}'
  t.foot ->
    t.row ->
      t.cell colspan: 5, ->
        a '{{action newMove move href=true}}', 'New Move'

