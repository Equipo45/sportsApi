const DB = require("./db.json");
const { saveToDataBase } = require("./utils");

const getAllWorkouts = () => {
    return DB.workouts
}

const getOneWorkouts = (id) =>{
    //Find index si no lo ecuentra pone -1
    const notExist = DB.workouts.findIndex((workout) => workout.name === workout.name )> -1;
    if(!notExist){
        return;
    }
    const singleworkout = DB.workouts.findIndex((workout) => workout.id === id)
    return singleworkout;
}
//This function is use for saving the new workout in case is not repeated
const postNewWorkout = (newWorkout) => {
    const isAlreadyAdded = DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
    if(isAlreadyAdded){
        console.log("Workout already created")
        return;
    }
    DB.workouts.push(newWorkout)
    saveToDataBase(DB)
    return newWorkout;
}

const updatedNewWorkout = (id,updateData) => {
    const notExist = DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
    if(!notExist){
        console.log("Workout doesn´t extist")
        return;
    }
    const updatedWorkout = {
        ...DB.workout[notExist],
        ...updateData,
        updateAt : new Date().toLocaleString("es-ES",{timeZone:"GMT+2"})
    }
    //Aqui esta en memoria
    DB.workouts[notExist] = updatedWorkout
    //Aqui esta en disco
    saveToDataBase(DB)
    return updatedWorkout;
}

module.exports = {
    getAllWorkouts,
    postNewWorkout,
    getOneWorkouts,
    updatedNewWorkout
 }