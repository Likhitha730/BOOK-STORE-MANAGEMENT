const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validator = require("validator");

// Generate JWT
const generateToken = (id, role) => {
  return jwt.sign(
    {
      id,
      role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
};

// Register
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        message: "Invalid email",
      });
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
      });
      
      const userResponse = {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      };
      
      res.status(201).json({
        success: true,
        token: generateToken(user._id, user.role),
        user: userResponse,
      });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Login
exports.login = async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {

      return res.status(400).json({
        message: "User not found",
      });

    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {

      return res.status(400).json({
        message: "Incorrect password",
      });

    }

    const userResponse = {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      };
      
      res.json({
        success: true,
        token: generateToken(user._id, user.role),
        user: userResponse,
      });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};