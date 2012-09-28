@title = "User"

partial "flash"

text '{{#with resource}}'
dl class: "content", ->
  dt "Email:"
  dd '{{email}}'
  dt "Name:"
  dd '{{name}}'
text '{{/with}}'