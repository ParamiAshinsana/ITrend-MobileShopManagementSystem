const express = require("express");
const { signUp, signIn } = require("../controllers/authController");

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);  // Add this route for sign-in

module.exports = router;







// const express = require("express");
// const { signUp } = require("../controllers/authController");

// const router = express.Router();
// router.post("/signup", signUp);

// module.exports = router;
