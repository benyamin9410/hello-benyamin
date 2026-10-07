import { Router } from "express";
import {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
} from "./controller.js";
import {
  createCategoryValidation,
  updateCategoryValidation
} from "./validation.js";
import { validationData } from "../../middleware/validation.js";

const router = Router();

router.get("/", getCategories);
router.get("/:id", getCategoryById);
router.post("/", createCategoryValidation, validationData, createCategory);
router.put("/:id", updateCategoryValidation, validationData, updateCategory);
router.delete("/:id", deleteCategory);

export default router;
