import express from "express";
import { registerUser, verifyOTP } from "../controllers/authController.js";

const router = express.Router();

// ✅ Register Route
router.post("/register", registerUser);

// ✅ Verify OTP Route
router.post("/verify-otp", verifyOTP);

export default router;


