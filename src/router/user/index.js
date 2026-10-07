import { Router } from "express";
import Authorization from "../../middleware/auth.js";
import User from "../../models/user.js";

const router = Router();

router.use(Authorization);

router.get("/", async (req, res) => {
  const user = await User.findById(req.user).select("-password");

  res.json(user);
});

export default router;
