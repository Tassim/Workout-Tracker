const router = require('express').Router();

const cardioController = require('../../../controllers/cardioController');

// api/workouts
router.route('/')
.get(cardioController.getLastWorkout);


module.exports = router;
