const { v4:uuid } = require("uuid")
const Workout = require("../database/workout")

const getAllWorkouts = () => {
    const allworkouts = Workout.getAllWorkouts();
    return allworkouts;
}

const getOneWorkouts = (workoutId) => {
    const oneworkout = Workout.getOneWorkouts(workoutId);
    return oneworkout;
}

const postOneWorkouts = (newWorkouts) => {
    //We load the workout , the unique id and both dates
    const postworkout = {
        ...newWorkouts,
        id:uuid(),
        createdAt: new Date().toLocaleString("es-ES",{timeZone:"GMT+2"}),
        updatedAt: new Date().toLocaleString("es-ES",{timeZone:"GMT+2"})
    }
    //Esto nos devuelve el json que metemos directamente
    const createWorkout = Workout.postNewWorkout(postworkout)
    return createWorkout;
}

const updateOneWorkouts = (workoutId,updateData) => {
    const updateworkout = Workout.updateData(workoutId,updateData);
    return updateworkout;
}

const deleteOneWorkouts = (workoutId) => {
    const deleteworkout = Workout.deletedId(workoutId);
    return deleteworkout;
}


module.exports = {
    getAllWorkouts,
    getOneWorkouts,
    postOneWorkouts,
    updateOneWorkouts,
    deleteOneWorkouts
}