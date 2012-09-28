
describe('MovesController', function() {
  var controller, move, url;
  controller = void 0;
  move = void 0;
  url = void 0;
  beforeEach(function(done) {
    controller = App.MovesController.create();
    agent.controller = controller;
    return Tower.start(done);
  });
  afterEach(function() {
    Tower.stop();
    return delete agent.controller;
  });
  describe('routes', function() {
    test('index', function() {
      return assert.equal(urlFor(App.Move), "/moves");
    });
    test('new', function() {
      move = App.Move.build();
      return assert.equal(urlFor(move, {
        action: 'new'
      }), "/moves/new");
    });
    test('show', function() {
      move = new App.Move({
        id: 1
      });
      return assert.equal(urlFor(move), "/moves/" + (move.get('id')));
    });
    return test('edit', function() {
      move = new App.Move({
        id: 1
      });
      return assert.equal(urlFor(move, {
        action: 'edit'
      }), "/moves/" + (move.get('id')) + "/edit");
    });
  });
  describe('#index', function() {
    beforeEach(function(done) {
      var _this = this;
      return factory('move', function(error, record) {
        move = record;
        return done();
      });
    });
    return test('render json', function(done) {
      return get(urlFor(App.Move), {
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
      return url = urlFor(App.Move);
    });
    return test('params', function(done) {
      var params;
      params = {};
      return post(url, {
        format: "json",
        params: params
      }, function(response) {
        var _this = this;
        return App.Move.count(function(error, count) {
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
