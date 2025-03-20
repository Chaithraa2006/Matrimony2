import User from "../models/User.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// ✅ Configure Nodemailer with Gmail
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,                   
    secure: false, // true for 465, false for 587
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  

// ✅ Generate 6-digit OTP
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

// ✅ Register API with OTP
export const registerUser = async (req, res) => {
  const { name, email, password, phone } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }

    // Generate OTP and create a new user
    const otp = generateOTP();
    const newUser = new User({
      name,
      email,
      password,
      phone,
      otp,
      verified: false, // Mark user as unverified initially
    });

    await newUser.save();

    // Send OTP to emaili
    const mailOptions = {
        from: process.env.EMAIL_USER, // From Address
        to: email, // User Email
        subject: "Matrimony OTP Verification",
        text: `Your OTP for matrimony registration is ${otp}`, // OTP Message
      };
      

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error sending email:", error);
          return res.status(500).json({ message: "OTP ಕಳುಹಿಸುವಲ್ಲಿ ತೊಂದರೆ!" });
        }
        res.status(200).json({ message: "OTP ಯಶಸ್ವಿಯಾಗಿ ಕಳುಹಿಸಲಾಗಿದೆ. ನಿಮ್ಮ ಇಮೇಲ್ ಪರಿಶೀಲಿಸಿ!" });
      });
      
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Registration failed!" });
  }
};

// ✅ Login API
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. User exists check
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "ಬಳಕೆದಾರರ ಮಾಹಿತಿ ದೊರೆಯುತ್ತಿಲ್ಲ!" });
    }

    // 2. Check if user is verified
    if (!user.verified) {
      return res.status(400).json({ message: "OTP ಪರಿಶೀಲನೆ ನಡೆಸಿ ಲಾಗಿನ್ ಮಾಡಲು ಪ್ರಯತ್ನಿಸಿ!" });
    }

    // 3. Password check
    if (user.password !== password) {
      return res.status(400).json({ message: "ತಪ್ಪಾದ ಪಾಸ್ವರ್ಡ್!" });
    }

    res.status(200).json({ message: "ಲಾಗಿನ್ ಯಶಸ್ವಿಯಾಗಿದೆ!", user });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "ಲಾಗಿನ್ ಮಾಡಲು ವಿಫಲವಾಗಿದೆ." });
  }
};


// ✅ Verify OTP API - Fixed Version
export const verifyOTP = async (req, res) => {
  const { email, otp } = req.body;

  try {
    // ✅ Convert email to lowercase for case-insensitive comparison
    const user = await User.findOne({ email: email.toLowerCase() });

    // ❗ Check if user exists
    if (!user) {
      return res.status(400).json({ message: "ಬಳಕೆದಾರರ ಮಾಹಿತಿ ದೊರೆಯುತ್ತಿಲ್ಲ!" });
    }

    // ❗ Check if OTP matches
    if (user.otp !== otp) {
      return res.status(400).json({ message: "ತಪ್ಪಾದ OTP!" });
    }

    // ✅ Mark user as verified
    user.verified = true;
    user.otp = ""; // Clear OTP after successful verification
    await user.save();

    res.status(200).json({ message: "✅ OTP ಯಶಸ್ವಿಯಾಗಿ ಪರಿಶೀಲಿಸಲಾಗಿದೆ. ಖಾತೆ ಸಕ್ರಿಯಗೊಂಡಿದೆ!" });
  } catch (error) {
    console.error("Error verifying gOTP:", error);
    res.status(500).json({ message: "❌ OTP ಪರಿಶೀಲನೆ ಮಾಡುವಾಗ ದೋಷ ಸಂಭವಿಸಿದೆ." });
  }
};
