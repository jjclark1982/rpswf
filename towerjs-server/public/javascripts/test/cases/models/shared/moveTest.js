
describe('App.Move', function() {
  var move;
  move = void 0;
  describe('fields', function() {
    beforeEach(function(done) {
      move = App.Move.build({
        action: 'A action',
        gameID: 'A gameID'
      });
      return done();
    });
    test('action', function() {
      return assert.ok(move.get('action'));
    });
    return test('gameID', function() {
      return assert.ok(move.get('gameID'));
    });
  });
  return describe('relations', function() {});
});
