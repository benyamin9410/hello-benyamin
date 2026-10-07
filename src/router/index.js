import { Router } from "express";
import authRouter from "./auth/index.js";
import categoryRouter from "./category/index.js";
import taskRouter from "./tasks/index.js";
import userRouter from "./user/index.js";

const router = Router();

router.use("/auth", authRouter);
router.use("/category", categoryRouter);
router.use("/task", taskRouter);
router.use("/user", userRouter);

export default router;
