const { Schema, model } = require('mongoose');

const ResistanceSchema = new Schema({
  name: {
    type: String,
  },
  weight: {
    type: Number,
  },
  sets: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  duration: {
    type: Number,
  },
});

module.exports = model('Resistance', ResistanceSchema);