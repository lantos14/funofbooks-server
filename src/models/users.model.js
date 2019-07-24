// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const users = new mongooseClient.Schema({
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ['reader'],
      default: 'reader',
      required: true,
    },
    password: { 
      type: String,
      required: true,
    },


  }, {
    timestamps: true
  });

  return mongooseClient.model('users', users);
};
