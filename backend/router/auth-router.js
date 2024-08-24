const express = require("express");
const router = express.Router();
const { home } = require("../controllers/auth-controller");  // Correctly destructure the home function
const authcontroller = require("../controllers/auth-controller");
const signupSchema = require("../validators/auth-validators");
const validate =require("../middlewares/validate-middleware");

router.route("/").get(home);
router.route("/register").post(validate(signupSchema),authcontroller.register);
router.route("/login").post(authcontroller.login);

module.exports = router;
