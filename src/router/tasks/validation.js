import { body } from "express-validator";

export const createTaskValidation = [
  body("title")
    .notEmpty()
    .withMessage("title is required")
    .isString()
    .withMessage("title must be a string"),

  body("description")
    .notEmpty()
    .withMessage("description is required")
    .isString()
    .withMessage("description must be a string"),

  body("status")
    .optional()
    .isBoolean()
    .withMessage("status must be a boolean")
];

export const updateTaskValidation = [
  body("title")
    .notEmpty()
    .withMessage("title is required")
    .isString()
    .withMessage("title must be a string"),

  body("description")
    .notEmpty()
    .withMessage("description is required")
    .isString()
    .withMessage("description must be a string"),

  body("status")
    .optional()
    .isBoolean()
    .withMessage("status must be a boolean")
];
