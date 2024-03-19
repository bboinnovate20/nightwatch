module.exports = {
  demoTest: function (client) {
    client.url('http://localhost')
      .assert.elementPresent('#weblogin')
      .end();
  },

  before: function(client, done) {
    setTimeout(function() {
      done(new Error('Provided error beforeAsync'));
    }, 10);
  }
};
