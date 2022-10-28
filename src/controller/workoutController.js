const workOutService = require("../services/workoutService")

const getAllWorkouts = (req,res) => {
    const allworkouts = workOutService.getAllWorkouts();
    res.status(200).send({data:allworkouts});
}

const getOneWorkouts = (req,res) => {
    //Cuando mandemos esta peticion tendremos que mandarlo con el formato params: id , logicamente
    const {
        params:{ id }
    } = req
    if(!id){
        return;
    }
    const workout = workOutService.getOneWorkouts(id)
    res.status(201).send({data:workout});
}

const postOneWorkouts = (req,res) => {
    const { body } = req;
    if(
        !body.name ||
        !body.mode ||
        !body.equipment ||
        !body.exercises ||
        !body.trainerTips
    ){
        return;
    }
    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips,
      };
      
    const postworkout = workOutService.postOneWorkouts(newWorkout);
    
    res.status(201).send({status:"OK",data:postworkout});
}

const updateOneWorkouts = (req,res) => {
    const {
        body, 
        params: { id },
    } = req
    if(!id){
        return;
    }
    const updatedworkout = workOutService.updateOneWorkouts(id,body);
    res.status(204).send({status:"OK",data:updatedworkout})
}

const deleteOneWorkouts = (req,res) => {
    const {
        params: { id },
    } = req
    if(!id){
        return;
    }
    const deleteworkout = workOutService.deleteOneWorkouts(id);
    res.status(202).send({data:deleteworkout});
}

module.exports = {
    getAllWorkouts,
    getOneWorkouts,
    postOneWorkouts,
    updateOneWorkouts,
    deleteOneWorkouts
};