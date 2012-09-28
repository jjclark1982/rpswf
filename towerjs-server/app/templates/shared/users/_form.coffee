text '{{#with resource}}'
form ->
  fieldset ->
    ul class: 'fields', ->
      li class: 'control-group', ->
        div class: 'controls', ->
          label 'Email:'
          text '{{view Ember.TextField valueBinding="email"}}'
          text '{{#with errors}}'
          span class: 'help-inline error', '{{email}}'
          text '{{/with}}'
      li class: 'control-group', ->
        div class: 'controls', ->
          label 'Name:'
          text '{{view Ember.TextField valueBinding="name"}}'
          text '{{#with errors}}'
          span class: 'help-inline error', '{{name}}'
          text '{{/with}}'
      li ->
        a '{{action submit target="resource"}}', 'Submit'
text '{{/with}}'
