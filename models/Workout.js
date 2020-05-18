const { Schema, model } = require('mongoose');

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now()
  },
  exercises: [{
  type: {
    type: String,
    required: [true, ' You must select a type of exercise'],
    },
  name: {
    type: String,
    required: [true, ' You must provide a name for you exercise'],
  },
  duration: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  sets: {
    type: Number,
  },
  distance: {
    type: Number,
  }
  }]
});

module.exports = model('Workout', WorkoutSchema);

// newExercise = { type, name, duration, weight, reps, sets, distance }
// Workout.findByIdAndUpdate(id, { $push: { exercises: newExercise } })

// const workout = Workout.findById(id)
// const exercise = new exercise(newExercise)
// workout.exercises.push(exercise)
// workout.save()

// Workout.findByIdAndUpdate(id, { $push: { exercises: exercise._id } })
