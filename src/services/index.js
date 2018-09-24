const noSpoiler = require('./no-spoiler/no-spoiler.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(noSpoiler);
};
