@title = "Move"

partial "flash"

text '{{#with resource}}'
dl class: "content", ->
  dt "Action:"
  dd '{{action}}'
  dt "Game:"
  dd '{{gameID}}'
text '{{/with}}'