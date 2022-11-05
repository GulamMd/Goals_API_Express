const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @description     Register User
// @route           POST /api/users
// @access          Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all field");
  }
  res.json({ message: "Register User" });
});

// @description     Authenticate a User
// @route           POST /api/users/login
// @access          Public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login User" });
});

// @description     Get User Data
// @route           GET /api/users/me
// @access          Public
const getMe = asyncHandler(async (req, res) => {
  res.json({ message: "User data display" });
});

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
