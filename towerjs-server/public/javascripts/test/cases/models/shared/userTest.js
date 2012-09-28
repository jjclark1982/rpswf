
describe('App.User', function() {
  var user;
  user = void 0;
  describe('fields', function() {
    beforeEach(function(done) {
      user = App.User.build({
        email: 'A email',
        name: 'A name'
      });
      return done();
    });
    test('email', function() {
      return assert.ok(user.get('email'));
    });
    return test('name', function() {
      return assert.ok(user.get('name'));
    });
  });
  return describe('relations', function() {});
});
