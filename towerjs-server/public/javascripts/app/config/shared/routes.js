
Tower.Route.draw(function() {
  this.resources('users');
  this.resources('games');
  this.resources('moves');
  return this.match('/', {
    to: 'application#welcome'
  });
});
