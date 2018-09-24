// noSpoiler-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const noSpoiler = new Schema({
    title: {
      type: String, 
      required: true,
    }, 
    story: {
      type: String,
      required: true,
    },
    opinion: {
      type: String,
      required: true,
    }, 
    summary: {
      type: String,
      required: true,
    },
  }, {
    timestamps: true
  });

  return mongooseClient.model('noSpoiler', noSpoiler);
};
