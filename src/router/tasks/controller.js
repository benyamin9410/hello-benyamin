import _ from "lodash";
import mongoose from "mongoose";
import Category from "../../models/category.js";
import Task from "../../models/task.js";

export const getAllTasks = async (req, res) => {
  const tasks = await Task.find().populate("categoryId");

  res.status(200).json(tasks);
};

export const pagination = async (req, res) => {
  const page = Number(req.params.number);
  const num = 5;

  const tasks = await Task.find()
    .populate("categoryId")
    .limit(num)
    .skip((page - 1) * num);

  res.status(200).json(tasks);
};

export const getTaskById = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).send("Invalid ID");
  }

  const task = await Task.findById(req.params.id).populate("categoryId");

  if (!task) {
    return res.status(404).json({
      msg: "task not found"
    });
  }

  res.status(200).json(task);
};

export const createTask = async (req, res) => {
  const data = _.pick(req.body, [
    "title",
    "categoryId",
    "description",
    "status"
  ]);

  if (data.categoryId) {
    const category = await Category.findById(data.categoryId);

    if (!category) {
      return res.status(404).send("no valid category found");
    }
  }

  const task = await Task.create(data);

  res.status(201).json(task);
};

export const updateTask = async (req, res) => {
  const data = _.pick(req.body, [
    "title",
    "categoryId",
    "description",
    "status"
  ]);

  const task = await Task.findByIdAndUpdate(
    req.params.id,
    data,
    {
      new: true,
      runValidators: true
    }
  );

  if (!task) {
    return res.status(404).json({
      message: "task not found"
    });
  }

  res.status(200).json(task);
};

export const deleteTask = async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);

  if (!task) {
    return res.status(404).json({
      message: "task not found"
    });
  }

  res.status(200).json({
    message: "task deleted successfully"
  });
};
