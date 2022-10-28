const express = require('express')
const workoutController = require('../../controller/workoutController')

const router = express.Router();

router.get('/',workoutController.getAllWorkouts)

router.get('/:workoutId',workoutController.getOneWorkouts)

router.post('/',workoutController.postOneWorkouts)

router.patch('/:workoutId',workoutController.updateOneWorkouts)

router.delete('/:workoutId',workoutController.deleteOneWorkouts)

module.exports = router;