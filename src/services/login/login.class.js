/* eslint-disable no-unused-vars */
class Service {
  constructor (app, options) {
    this.app = app;
    this.options = options || {};
    this.users = this.app.settings.mongooseClient.models.users;
  }

  async find (params) {
    return [];
  }

  async get (id, params) {
    return {
      id, text: `A new message with ID: ${id}!`
    };
  }

  async create (data, params) {
    const email = data.email;
    const name = data.name;
    const pwd = data.pwd;
    
    const answer = await this.users.find({email: "lantos891213@gmail.com"});

    return {answer}
  }

  async update (id, data, params) {
    return data;
  }

  async patch (id, data, params) {
    return data;
  }

  async remove (id, params) {
    return { id };
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
