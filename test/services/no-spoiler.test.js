const assert = require('assert');
const app = require('../../src/app');

describe('\'noSpoiler\' service', () => {
  it('registered the service', () => {
    const service = app.service('nospoiler');

    assert.ok(service, 'Registered the service');
  });
});
