const noSpoiler = require('./no-spoiler/no-spoiler.service.js');
const users = require('./users/users.service.js');

module.exports = function (app) {
  app.configure(noSpoiler);
  app.configure(users);
};
