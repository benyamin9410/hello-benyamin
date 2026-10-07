import _ from "lodash";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "config";
import User from "../../models/user.js";

export const register = async (req, res) => {
  const body = _.pick(req.body, ["email", "password"]);

  const exist = await User.findOne({ email: body.email });

  if (exist) {
    return res.status(400).send("Email already exists");
  }

  body.password = await bcrypt.hash(body.password, 10);

  const newUser = await User.create(body);

  res.status(201).json({
    msg: "user created",
    data: _.pick(newUser, ["email"])
  });
};

export const login = async (req, res) => {
  const body = _.pick(req.body, ["email", "password"]);

  const user = await User.findOne({ email: body.email });

  if (!user) {
    return res.status(400).send("Invalid Data");
  }

  const check = await bcrypt.compare(body.password, user.password);

  if (!check) {
    return res.status(400).send("Invalid Data");
  }

  const token = jwt.sign(
    { id: user.id },
    config.get("jwt_secret")
  );

  res.json({
    msg: "login completed",
    token
  });
};
