
Tower.Factory.define('user', function() {
  return {
    email: Tower.random('email'),
    name: Tower.random('fullName')
  };
});
