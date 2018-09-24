// Initializes the `noSpoiler` service on path `/nospoiler`
const createService = require('feathers-mongoose');
const createModel = require('../../models/no-spoiler.model');
const hooks = require('./no-spoiler.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/nospoiler', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('nospoiler');

  service.hooks(hooks);
};
