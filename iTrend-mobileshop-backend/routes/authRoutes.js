const express = require("express");
const { signUp, signIn , getUsers } = require("../controllers/authController");

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);  // Add this route for sign-in
router.get("/users", getUsers);  // New route for fetching users

module.exports = router;







// const express = require("express");
// const { signUp } = require("../controllers/authController");

// const router = express.Router();
// router.post("/signup", signUp);

// module.exports = router;
