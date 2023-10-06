const asyncHandler = require("express-async-handler");

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get goals" });
});

const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add a text field");
  }
  res.status(200).json({ message: "set goal" });
});

const updateGoal = asyncHandler(async (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.status(200).json({ message: "goal edited" });
});

const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "goal deleted" });
});

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
