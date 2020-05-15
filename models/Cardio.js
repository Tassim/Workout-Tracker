const { Schema, model } = require('mongoose');

const CardioSchema = new Schema({
  name: {
    type: String,
  },
    distance: {
      type: Number,
    },
    duration: {
      type: Number,
    },
});

module.exports = model('Cardio', CardioSchema);
