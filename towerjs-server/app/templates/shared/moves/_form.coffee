text '{{#with resource}}'
form ->
  fieldset ->
    ul class: 'fields', ->
      li class: 'control-group', ->
        div class: 'controls', ->
          label 'Action:'
          text '{{view Ember.TextField valueBinding="action"}}'
          text '{{#with errors}}'
          span class: 'help-inline error', '{{action}}'
          text '{{/with}}'
      li class: 'control-group', ->
        div class: 'controls', ->
          label 'Game:'
          text '{{view Ember.TextField valueBinding="gameID"}}'
          text '{{#with errors}}'
          span class: 'help-inline error', '{{gameID}}'
          text '{{/with}}'
      li ->
        a '{{action submit target="resource"}}', 'Submit'
text '{{/with}}'
