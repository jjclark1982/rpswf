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

App.Game = (function(_super) {
  var Game;

  function Game() {
    return Game.__super__.constructor.apply(this, arguments);
  }

  Game = __extends(Game, _super);

  Game.hasMany('users');

  Game.hasMany('moves');

  Game.timestamps();

  return Game;

})(Tower.Model);
