const User = require("../models/user-model");
const bcrypt = require('bcryptjs');


// Home route handler
const home = async (req, res) => {
  try {
    res.status(200).send("Welcome controller");
  } catch (error) {
    res.status(400).send({ msg: "Page not found" });
  }
};

// Registration route handler
const register = async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    const { username, email, phone, password } = req.body;

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "Email already registered" });
    }

    // Create new user
    const userCreated = await User.create({ username, email, phone, password });
    console.log("User Created:", userCreated);

    res.status(201).json({
      msg: "Registration successful",
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    console.error("Registration Error:", error);
    res.status(500).json("Internal server error");
  }
};
//login route handle
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Login Request:", req.body);

    // Check if the user exists with the provided email
    const existingUser = await User.findOne({ email });
    console.log("Existing User:", existingUser);

    if (!existingUser) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Validate the password
    const isPasswordCorrect = await existingUser.comparePassword(password);
    console.log("Password Correct:", isPasswordCorrect);

    if (isPasswordCorrect) {
      res.status(200).json({
        msg: "Login successful",
        userId: existingUser._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid password" });
    }
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


module.exports = { home, register,login };
