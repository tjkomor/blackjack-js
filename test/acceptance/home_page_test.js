require('../helper');

var http = require('http'),
    server;

before(function() {
  server = http.createServer(require('../../app'));
  server.listen(0);
  browser.baseUrl = 'http://localhost:' + server.address().port;
});

beforeEach(function() {
  return browser.ignoreSynchronization = true;
});

after(function(){
  server.close();
});

describe('Blackjack homepage', function(){
  it('Should have a title that says Baller Blackjack', function() {
    browser.get('/');
    element(by.tagName('h1')).getText().then(function(text) {
      expect(text).to.equal('Baller Blackjack');
    });
  });

  it('Should have a button that says play', function() {
    browser.get('/');
    element(by.id('play')).getText().then(function(text) {
      expect(text).to.equal('Play!');
    });
  });

  it('should have dealer score on page', function(){
    browser.get('/')
    element(by.id('play')).click()
    element(by.id("dealerScore")).getText().then(function(text) {
      expect(text).to.equal("Dealer Score")
    })
  })

  it('should have player score on page', function(){
    browser.get('/')
    element(by.id('play')).click()
    element(by.id("playerScore")).getText().then(function(text) {
      expect(text).to.equal("Player Score")
    })
  })
});
