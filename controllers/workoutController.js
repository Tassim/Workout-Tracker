const { Workout } = require('../models');

module.exports = {

getLastWorkout: async (req, res) => {
  try {
    const lastWorkout = await Workout.find({});
      console.log(lastWorkout);
    if (!lastWorkout) {
      return res.status(400).json({ error: 'There are no workouts saved' });
    }
    return res.status(200).json(lastWorkout);
  } catch (e) {
    return res.status(403).json(e);
  }
},

addExercise: async (req, res) => {
  console.log("addExerciseBODY:", req.body);  
  console.log("addExercisePARAMS:", req.params);
  const { id } = req.params;
  const { type, name, duration, distance, weight, reps, sets } = req.body;
  console.log(type);
  try {
    if(type === 'cardio') {
    const cardioExercise = await Workout.findByIdAndUpdate(id, {$push: { exercises: req.body}}, { new: true } );
    console.log("CARDIO", cardioExercise);
    return res.status(200).json(cardioExercise);
  } else {
    const resistanceExercise = await Workout.findByIdAndUpdate(id, {$push: { exercises: req.body }}, {new: true} );
    console.log("RESISTANCE", resistanceExercise);
    return res.status(200).json(resistanceExercise);
  }
  } catch (e) {
    return res.status(403).json(e);
  }
},
createWorkout: async (req, res) => {
  // console.log("createworkout:", req.body);  
  try {
    const newWorkout = await new Workout();
    newWorkout.save();
    console.log(newWorkout);
    return res.status(200).json(newWorkout);
  } catch (e) {
    return res.status(403).json(e);    
  }
},

getWorkoutsInRange: async (req, res) => {
  try {
    const allWorkouts = await Workout.find();
      console.log(allWorkouts);
    if (!allWorkouts) {
      return res.status(400).json({ error: 'There are no workouts saved' });
    }
    return res.status(200).json(allWorkouts);
  } catch (e) {
    return res.status(403).json(e);
  }
},
}

// newExercise = { type, name, duration, weight, reps, sets, distance }
// Workout.findByIdAndUpdate(id, { $push: { exercises: newExercise } })

// const workout = Workout.findById(id)
// const exercise = new exercise(newExercise)
// workout.exercises.push(exercise)
// workout.save()


// Workout.findByIdAndUpdate(id, { $push: { exercises: exercise._id } })
