const { v4: uuid } = require("uuid");
const Workout = require("../database/workout");

const getAllWorkouts = () => {
  try{
    const allworkouts = Workout.getAllWorkouts();
    return allworkouts;
  } catch(error) {
    throw error
  }
  
};

const getOneWorkouts = (workoutId) => {
  try{
    const oneworkout = Workout.getOneWorkouts(workoutId);
    return oneworkout;
  } catch(error) {
    throw error
  }
  
};

const postOneWorkouts = (newWorkouts) => {
  //We load the workout , the unique id and both dates
  const postworkout = {
    ...newWorkouts,
    id: uuid(),
    createdAt: new Date().toLocaleString("es-ES", { timeZone: "GMT+2" }),
    updatedAt: new Date().toLocaleString("es-ES", { timeZone: "GMT+2" }),
  };
  //Esto nos devuelve el json que metemos directamente
  try {
    const createWorkout = Workout.postNewWorkout(postworkout);
    return createWorkout;
  } catch(error) {
    throw error
  }
  
};

const updateOneWorkouts = (workoutId, updateData) => {
  try{
    const updateworkout = Workout.updateData(workoutId, updateData);
    return updateworkout;
  } catch(error){
    throw error
  }
};

const deleteOneWorkouts = (workoutId) => {
  try{
    const deleteworkout = Workout.deletedId(workoutId);
    return deleteworkout;
  } catch(error) {
    throw error
  }
  
};

module.exports = {
  getAllWorkouts,
  getOneWorkouts,
  postOneWorkouts,
  updateOneWorkouts,
  deleteOneWorkouts,
};
