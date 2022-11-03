// @desc GET Auth user
// @route POST /api/users/login
// @access Public

import User from "../../models/userModel.js";
import asyncHandler from "express-async-handler";
import {generateToken} from "../../helpers/generateToken.js";

export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    const token = generateToken(user._id);
    res.json({user, token});
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});
