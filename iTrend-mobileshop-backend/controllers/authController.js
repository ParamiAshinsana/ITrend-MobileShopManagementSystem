const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

// Sign Up function
const signUp = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ fullName, email, password: hashedPassword });
    await newUser.save();

    // Log the user details in the console
    console.log("New user registered:");
    console.log(`ID: ${newUser._id}`);
    console.log(`Name: ${newUser.fullName}`);
    console.log(`Email: ${newUser.email}`);

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Sign In function
const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Get Users function
const getUsers = async (req, res) => {
  try {
    const users = await User.find({}, "-password"); // Exclude passwords for security
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = { signUp, signIn , getUsers };


























// const User = require("../models/userModel");
// const bcrypt = require("bcryptjs");

// const signUp = async (req, res) => {
//   try {
//     const { fullName, email, password } = req.body;

//     // Check if user exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) return res.status(400).json({ message: "User already exists" });

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create new user
//     const newUser = new User({ fullName, email, password: hashedPassword });
//     await newUser.save();

//     res.status(201).json({ message: "User registered successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// };

// module.exports = { signUp };
