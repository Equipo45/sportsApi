const workOutService = require("../services/workoutService");

const getAllWorkouts = (req, res) => {
  try {
    const allworkouts = workOutService.getAllWorkouts();
    res.status(200).send({ data: allworkouts });
  } catch (error) {
    res.status(error?.status || 500).send({
      status: "Failed",
      data: {
        error: error?.message || error,
      },
    });
  }
};

const getOneWorkouts = (req, res) => {
  //Cuando mandemos esta peticion tendremos que mandarlo con el formato params: id , logicamente
  const {
    params: { id },
  } = req;
  if (!id) {
    res.status(400).send({
      status: "Failed",
      data: {
        error: "There is no workout with this id :(",
      },
    });
    return;
  }
  try {
    const workout = workOutService.getOneWorkouts(id);
    res.status(201).send({ data: workout });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const postOneWorkouts = (req, res) => {
  const { body } = req;
  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    res.status(400).send({
      status: "Failed",
      data: {
        error:
          "Error while creating a new post , some body atribbutes may be missing",
      },
    });
    return;
  }
  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };
  try {
    const postworkout = workOutService.postOneWorkouts(newWorkout);
    res.status(201).send({ status: "OK", data: postworkout });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateOneWorkouts = (req, res) => {
  const {
    body,
    params: { id },
  } = req;
  if (!id) {
    res.status(400).send({
      status: "Failed",
      data: { error: "Parameter id not found in any workout" },
    });
    return;
  }
  try {
    const updatedworkout = workOutService.updateOneWorkouts(id, body);
    res.status(204).send({ status: "OK", data: updatedworkout });
  } catch (error) {
    res.status(500).send({
      status: "Failed",
      data: {
        message: error?.message || error,
      },
    });
  }
};

const deleteOneWorkouts = (req, res) => {
  const {
    params: { id },
  } = req;
  if (!id) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: "The document id you want to delete doesn´t exist",
      });
    return;
  }
  try {
    const deleteworkout = workOutService.deleteOneWorkouts(id);
    res.status(202).send({ data: deleteworkout });
  } catch (error) {
    res
      .status(500)
      .send({
        status: "FAILED",
        data: { error: "Error while deleting the document in the database" },
      });
  }
};

module.exports = {
  getAllWorkouts,
  getOneWorkouts,
  postOneWorkouts,
  updateOneWorkouts,
  deleteOneWorkouts,
};
