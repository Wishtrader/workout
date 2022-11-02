	// @desc GET Register user
	// @route POST /api/users/
	// @access Public

  import User from "../../models/userModel.js";
  import asyncHandler from "express-async-handler";

  export const registerUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const isHaveUser = await User.findOne({ email });

    if (isHaveUser) {
      res.status(400);
      throw new Error('User already exists');
    }

    const user = await User.create({
      email, password
    });

    res.json(user);
  });
