const noSpoiler = require('./no-spoiler/no-spoiler.service.js');
const users = require('./users/users.service.js');
const login = require('./login/login.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(noSpoiler);
  app.configure(users);
  app.configure(login);
};
