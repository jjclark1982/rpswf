@title = "Editing Move"

partial "flash"
partial "form"

contentFor "sidebar", ->
  header class: "widget header", ->
    h2 @move.toLabel()