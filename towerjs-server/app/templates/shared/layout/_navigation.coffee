a '{{action showRoot href=true}}', class: 'brand', -> t('title')

div class: 'nav-collapse', ->
  ul class: 'nav', ->
    li '{{bindAttr class="App.UserController.isActive:active"}}', ->
      a '{{action indexUser href=true}}', t('links.users')
    li '{{bindAttr class="App.GameController.isActive:active"}}', ->
      a '{{action indexGame href=true}}', t('links.games')
    li '{{bindAttr class="App.MoveController.isActive:active"}}', ->
      a '{{action indexMove href=true}}', t('links.moves')
  ul class: 'nav pull-right', ->
    li class: 'dropdown', ->
      linkTo t('links.docs'), '#', class: 'dropdown-toggle', 'data-toggle': 'dropdown', ->
        b class: 'caret'
      ul class: 'dropdown-menu', ->
        li ->
          linkTo 'Tower.js', 'https://github.com/viatropos/tower/wiki'
