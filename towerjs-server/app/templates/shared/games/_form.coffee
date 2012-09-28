text '{{#with resource}}'
form ->
  fieldset ->
    ul class: 'fields', ->
      li ->
        a '{{action submit target="resource"}}', 'Submit'
text '{{/with}}'
