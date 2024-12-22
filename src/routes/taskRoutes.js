const express = require("express");
const router = express.Router();
const Task = require("../models/task");
const { userAuth } = require("../middleware/auth");

//POST /tasks : Add a new task.
router.post("/addTask", userAuth, async (req, res) => {
  try {
    const { title, description, isCompleted } = req.body;
    if (!title || !description) {
      throw new Error("Some feilds are empty...!");
    }

    const task = new Task({ title, description, isCompleted });
    await task.save();
    res.status(200).send("Task added Successfully...!");
  } catch (err) {
    res.status(500).send("Error : " + err.message);
  }
});

//GET /tasks : Fetch all tasks.
router.get("/getAllTasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
    if (!tasks) {
      throw new Error("tasks are not found...!");
    }
    res.status(200).send(tasks);
  } catch (err) {
    res.status(500).send("Error : " + err.message);
  }
});

//GET /tasks/:id : Fetch a single task by its ID.
router.get("/getTask/:taskId", async (req, res) => {
  try {
    const taskId = req.params?.taskId;
    const task = await Task.findById({ _id: taskId });
    if (!task) {
      throw new Error("task not found...!");
    }
    res.status(200).send(task);
  } catch (err) {
    res.status(500).send("Error : " + err.message);
  }
});

//PUT /tasks/:id : Update an existing task by its ID.
router.patch("/updateTask/:taskId", userAuth, async (req, res) => {
  try {
    const taskId = req.params?.taskId;
    const { title, description, isCompleted } = req.body;

    const task = await Task.findByIdAndUpdate(
      { _id: taskId },
      { title, description, isCompleted }
    );
    if (!task) {
      throw new Error("task not found...!");
    }
    res.status(200).send("task updated successfully....!");
  } catch (err) {
    res.status(500).send("Error : " + err.message);
  }
});

//DELETE /tasks/:id : Delete a task by its ID.
router.delete("/deleteTask/:taskId", userAuth, async (req, res) => {
  try {
    const taskId = req.params?.taskId;

    const task = await Task.findByIdAndDelete({ _id: taskId });
    if (!task) {
      throw new Error("task not found...!");
    }
    res.status(200).send("task deleted successfully....!");
  } catch (err) {
    res.status(500).send("Error : " + err.message);
  }
});

module.exports = router;
