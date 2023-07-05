const express = require("express");
const router = express.Router();
const TaskController = require("../controller/task.controller");

router.get("/", TaskController.getAllTask);

router.post("/", TaskController.addNewTask);

router.delete("/:id", TaskController.deleteTask);

module.exports = router;