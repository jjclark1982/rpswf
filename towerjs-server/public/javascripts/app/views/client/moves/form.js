
App.MovesEditView = Ember.View.extend({
  templateName: 'moves/edit',
  resourceBinding: 'controller.resource',
  submit: function(event) {
    this.get('resource').save();
    Tower.router.transitionTo('moves.index');
    return false;
  }
});
