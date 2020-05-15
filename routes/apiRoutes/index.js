const router = require('express').Router();

const workoutsRoutes = require('./wourkoutRoutes');

// /api/workout
router.use('/workouts', workoutsRoutes);

module.exports = router;
