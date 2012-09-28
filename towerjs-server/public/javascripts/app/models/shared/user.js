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

App.User = (function(_super) {
  var User;

  function User() {
    return User.__super__.constructor.apply(this, arguments);
  }

  User = __extends(User, _super);

  User.field('email', {
    type: 'String'
  });

  User.field('name', {
    type: 'String'
  });

  User.hasMany('games');

  User.timestamps();

  return User;

})(Tower.Model);
