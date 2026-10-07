import { Router } from "express";
import {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  pagination
} from "./controller.js";
import {
  createTaskValidation,
  updateTaskValidation
} from "./validation.js";
import { validationData } from "../../middleware/validation.js";

const router = Router();

router.get("/", getAllTasks);
router.get("/pagination/:number", pagination);
router.get("/:id", getTaskById);
router.post("/", createTaskValidation, validationData, createTask);
router.put("/:id", updateTaskValidation, validationData, updateTask);
router.delete("/:id", deleteTask);

export default router;
