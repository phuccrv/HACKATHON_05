const noteModel = require("../model/task.model");

const getAllTask = (req, res) => {
  TaskModel.getAllTaskModal(res);
};

const addNewTask = (req, res) => {
  TaskModel.addNewTaskModel(req, res);
};

const deleteTask = (req, res) => {
  const id = req.params.id;
  TaskModel.deleteTaskModel(id, res);
};

module.exports = { addNewTask, getAllTask, deleteTask };
