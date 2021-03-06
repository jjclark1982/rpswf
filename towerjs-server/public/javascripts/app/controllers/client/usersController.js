var __defineProperty = function(clazz, key, value) {
  if (typeof clazz.__defineProperty == 'function') return clazz.__defineProperty(key, value);
  return clazz.prototype[key] = value;
},
  __hasProp = {}.hasOwnProperty,
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

App.UsersController = (function(_super) {
  var UsersController;

  function UsersController() {
    return UsersController.__super__.constructor.apply(this, arguments);
  }

  UsersController = __extends(UsersController, _super);

  UsersController.scope('all');

  __defineProperty(UsersController,  "destroy", function() {
    return this.get('resource').destroy();
  });

  return UsersController;

})(Tower.Controller);
