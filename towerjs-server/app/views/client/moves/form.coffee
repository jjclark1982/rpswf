App.MovesEditView = Ember.View.extend
  templateName: 'moves/edit'
  resourceBinding: 'controller.resource'
  # You can also use an object controller (Ember.ObjectProxy) 
  # as a layer between the view and the model if you'd like more control.
  # resourceControllerBinding: 'controller.resourceController'
  
  submit: (event) ->
    # @todo
    # if @get('resource.isNew')
    #   @get('controller.target').send('createMove')
    # else
    #   @get('controller.target').send('updateMove', @get('resource'))
    @get('resource').save()
    Tower.router.transitionTo('moves.index')
    return false
