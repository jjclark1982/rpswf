
tableFor 'users', (t) ->
  t.head ->
    t.row ->
      t.header 'email', sort: true
      t.header 'name', sort: true
  t.body ->
    text '{{#each user in App.usersController.all}}'
    t.row class: 'user', ->
      t.cell '{{user.email}}'
      t.cell '{{user.name}}'
      t.cell ->
        a '{{action showUser user href=true}}', 'Show'
        span '|'
        a '{{action editUser user href=true}}', 'Edit'
        span '|'
        a '{{action destroyUser user}}', 'Destroy'
    text '{{/each}}'
  t.foot ->
    t.row ->
      t.cell colspan: 5, ->
        a '{{action newUser user href=true}}', 'New User'

