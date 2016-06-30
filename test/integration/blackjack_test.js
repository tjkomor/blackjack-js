var request = require('supertest');
var app = require('../../app');

describe('GET /', function () {
  it('routes correctly', function (done) {
    request(app).get('/')
      .expect(200, done)
  });
});
