import express from "express";
import {
	login,
	preSignup,
	resetPassword,
	signup,
} from "../controllers/authController.js";

const router = express.Router();

// SIGNUP
router.post("/signup", signup);

// PRE SIGNUP MOBILE CHECK
router.post("/pre-signup", preSignup);

// LOGIN
router.post("/login", login);

// RESET PASSWORD (OTP is handled on frontend for now)
router.post("/reset-password", resetPassword);

export default router;