const { Cardio, Resistance } = require('../models');

module.exports = {

getLastWorkout: async (req, res) => {
  try {
    const cardioWorkout = await Cardio.find();
    if (!cardioWorkout) {
      return res.status(400).json({ error: 'There are no cardio workout saved' });
    }
    return res.status(200).json(cardioWorkout[0]);
  } catch (e) {
    return res.status(403).json(e);
  }
},
addExercise: async (req, res) => {
  const { name, distance, duration } = req.body;
  if(!name) {
    return res.status(400).json({ error: 'You must provide a name for the workout' });
  }
  try {
    const newWorkout = await new Cardio({ name }).save();
    req.
  } catch (e) {
    
  }





}

}
