

// import express from "express";
// import { registerUser, loginUser, verifyOTP } from "../controllers/authController.js";

// const router = express.Router();

// // ✅ Register Route
// router.post("/register", registerUser);

// // ✅ Login Route
// router.post("/login", loginUser); // ✅ Ensure this line exists!

// // ✅ Verify OTP Route
// router.post("/verify-otp", verifyOTP);

// export default router;


import express from "express";
import { loginUser, registerUser, verifyOTP, resendOTP } from "../controllers/authController.js";
import upload from "../middleware/upload.js";
const router = express.Router();

// ✅ Correct API Endpoints
router.post("/register", upload.single("image"), registerUser);
router.post("/register", registerUser);
router.post("/login", loginUser); // ✅ Ensure this is correctly mapped
router.post("/verify-otp", verifyOTP);
router.post("/resend-otp", resendOTP);

export default router;
