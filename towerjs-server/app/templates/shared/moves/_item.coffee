li class: "move", ->
  header class: "header", ->
    h3 @move.toLabel()
  dl class: "content", ->
    dt "Action:"
    dd @move.get("action")
    dt "Game:"
    dd @move.get("gameID")
  footer class: "footer", ->
    menu ->
      menuItem "Edit", urlFor(@move, action: "edit")
