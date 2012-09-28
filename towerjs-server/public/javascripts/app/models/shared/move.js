var __hasProp = {}.hasOwnProperty,
  __extends =   function(child, parent) {
    if (typeof parent.__extend == 'function') return parent.__extend(child);
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } 
    function ctor() { this.constructor = child; } 
    ctor.prototype = parent.prototype; 
    child.prototype = new ctor; 
    child.__super__ = parent.prototype; 
    if (typeof parent.extended == 'function') parent.extended(child); 
    return child; 
};

App.Move = (function(_super) {
  var Move;

  function Move() {
    return Move.__super__.constructor.apply(this, arguments);
  }

  Move = __extends(Move, _super);

  Move.field('action', {
    type: 'String'
  });

  Move.field('gameID', {
    type: 'String'
  });

  Move.belongsTo('game');

  Move.timestamps();

  return Move;

})(Tower.Model);
