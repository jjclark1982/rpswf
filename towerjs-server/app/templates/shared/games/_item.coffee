li class: "game", ->
  header class: "header", ->
    h3 @game.toLabel()
  dl class: "content", ->
  footer class: "footer", ->
    menu ->
      menuItem "Edit", urlFor(@game, action: "edit")
