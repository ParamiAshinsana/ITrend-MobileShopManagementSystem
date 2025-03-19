const express = require("express");
const { signUp, signIn , getUsers , getUserOrders } = require("../controllers/authController");

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);  // Add this route for sign-in
router.get("/users", getUsers);  // New route for fetching users
router.get("/:userId/orders", getUserOrders );

module.exports = router;







// const express = require("express");
// const { signUp } = require("../controllers/authController");

// const router = express.Router();
// router.post("/signup", signUp);

// module.exports = router;
