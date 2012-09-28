
App.GamesEditView = Ember.View.extend({
  templateName: 'games/edit',
  resourceBinding: 'controller.resource',
  submit: function(event) {
    this.get('resource').save();
    Tower.router.transitionTo('games.index');
    return false;
  }
});
