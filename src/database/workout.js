const DB = require("./db.json");
const { saveToDataBase } = require("./utils");

const getAllWorkouts = () => {
  try {
    return DB.workouts;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getOneWorkouts = (id) => {
  //Find index si no lo ecuentra pone -1
  try {
    const notExist =
      DB.workouts.findIndex((workout) => workout.name === workout.name) > -1;
    if (!notExist) {
      return;
    }
    const singleworkout = DB.workouts.findIndex((workout) => workout.id === id);
    return singleworkout;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};
//This function is use for saving the new workout in case is not repeated
const postNewWorkout = (newWorkout) => {
  const isAlreadyAdded =
    DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
  if (isAlreadyAdded) {
    throw {
      status: 400,
      message: `The workout ${newWorkout} already exist!`,
    };
  }
  try {
    DB.workouts.push(newWorkout);
    saveToDataBase(DB);
    return newWorkout;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const updatedNewWorkout = (id, updateData) => {
  try {
    const notExist =
      DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
    if (!notExist) {
      console.log("Workout doesn´t extist");
      return;
    }
    const updatedWorkout = {
      ...DB.workout[notExist],
      ...updateData,
      updateAt: new Date().toLocaleString("es-ES", { timeZone: "GMT+2" }),
    };
    //Aqui esta en memoria
    DB.workouts[notExist] = updatedWorkout;
    //Aqui esta en disco
    saveToDataBase(DB);
    return updatedWorkout;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  getAllWorkouts,
  postNewWorkout,
  getOneWorkouts,
  updatedNewWorkout,
};
