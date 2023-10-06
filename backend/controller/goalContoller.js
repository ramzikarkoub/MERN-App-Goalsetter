const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");

// GET Goals
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({});
  res.status(200).json(goals);
});

//SET Goals
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add a text field");
  }
  const goal = await Goal.create({
    text: req.body.text,
  });
  res.status(200).json(goal);
});

//UPDATE Goals
const updateGoal = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  const upadtedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(upadtedGoal);
});

//DELETE Goals
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(404);
    throw new Error("Goal not found");
  }
  await Goal.deleteOne({ _id: req.params.id }); // Use deleteOne to remove the goal
  res.status(200).json({ id: req.params.id });
});

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
