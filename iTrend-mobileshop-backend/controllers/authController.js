const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

// Function to generate a new User ID
const generateUserId = async () => {
  const lastUser = await User.findOne().sort({ createdAt: -1 }); // Get the latest user
  if (!lastUser || !lastUser.userId) {
    return "US001"; // Default for the first user
  }

  const lastUserId = lastUser.userId; // Example: "US001"
  const numericPart = parseInt(lastUserId.substring(2), 10); // Extract numeric part (1)
  const newUserId = `US${String(numericPart + 1).padStart(3, "0")}`; // Increment and format (US002)

  return newUserId;
};

// Sign Up function
const signUp = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    // Generate unique userId
    const userId = await generateUserId();

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ userId, fullName, email, password: hashedPassword });
    await newUser.save();

    console.log("New user registered:", newUser);
      // Log the user details in the console
      console.log("New user registered:");
      console.log(`ID: ${newUser._id}`);
      console.log(`Name: ${newUser.fullName}`);
      console.log(`Email: ${newUser.email}`);

    res.status(201).json({ message: "User registered successfully", userId: newUser.userId });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Sign In function (No changes)
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

// Get Users function (No changes)
const getUsers = async (req, res) => {
  try {
    const users = await User.find({}, "-password"); // Exclude passwords for security
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};


// const getUserOrders = async (req, res) => {
//   try {
//     const { userId } = req.params; // Get userId from request parameters
//     const userOrders = await User.findById(userId).populate("orders");

//     if (!userOrders) return res.status(404).json({ message: "User not found" });

//     res.status(200).json({ orders: userOrders.orders });
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching user orders", error: error.message });
//   }
// };

const getUserOrders = async (req, res) => {
  try {
    const userId = req.params.userId;

    // Convert userId to ObjectId
    const userObjectId = new mongoose.Types.ObjectId(userId);

    // Query the orders collection for orders matching the user ID
    const orders = await Order.find({ user: userObjectId }).populate("items.item");

    if (!orders.length) {
      return res.status(404).json({ message: "No orders found for this user." });
    }

    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

module.exports = { signUp, signIn, getUsers, getUserOrders };



























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
