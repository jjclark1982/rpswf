
describe('GamesController', function() {
  var controller, game, url;
  controller = void 0;
  game = void 0;
  url = void 0;
  beforeEach(function(done) {
    controller = App.GamesController.create();
    agent.controller = controller;
    return Tower.start(done);
  });
  afterEach(function() {
    Tower.stop();
    return delete agent.controller;
  });
  describe('routes', function() {
    test('index', function() {
      return assert.equal(urlFor(App.Game), "/games");
    });
    test('new', function() {
      game = App.Game.build();
      return assert.equal(urlFor(game, {
        action: 'new'
      }), "/games/new");
    });
    test('show', function() {
      game = new App.Game({
        id: 1
      });
      return assert.equal(urlFor(game), "/games/" + (game.get('id')));
    });
    return test('edit', function() {
      game = new App.Game({
        id: 1
      });
      return assert.equal(urlFor(game, {
        action: 'edit'
      }), "/games/" + (game.get('id')) + "/edit");
    });
  });
  describe('#index', function() {
    beforeEach(function(done) {
      var _this = this;
      return factory('game', function(error, record) {
        game = record;
        return done();
      });
    });
    return test('render json', function(done) {
      return get(urlFor(App.Game), {
        format: "json"
      }, function(request) {
        assert.equal(this.headers["Content-Type"], 'application/json');
        return done();
      });
    });
  });
  describe('#new', function() {});
  describe('#create', function() {
    beforeEach(function() {
      return url = urlFor(App.Game);
    });
    return test('params', function(done) {
      var params;
      params = {};
      return post(url, {
        format: "json",
        params: params
      }, function(response) {
        var _this = this;
        return App.Game.count(function(error, count) {
          assert.equal(count, 1);
          return done();
        });
      });
    });
  });
  describe("#show", function() {});
  describe("#edit", function() {});
  describe("#update", function() {});
  return describe("#destroy", function() {});
});
