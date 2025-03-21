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
    // ✅ Check if the user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }

    // ✅ Generate OTP and create a new user
    const otp = generateOTP();
    const newUser = new User({
      name,
      email: email.toLowerCase(),
      password,
      phone,
      otp,
      verified: false, // Set verified to false initially
    });

    // ✅ Save user to the database
    await newUser.save();

    // ✅ Send OTP to email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Matrimony OTP Verification",
      text: `Your OTP for matrimony registration is: ${otp}`,
    };

    // ✅ Send mail and handle response
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ message: "Error sending OTP!" });
      }
      res.status(200).json({ message: "✅ OTP sent successfully. Please check your email!" });
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "❌ Registration failed!" });
  }
};

// ✅ Login API
// ✅ Login API
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. Check if user exists
    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user) {
      return res.status(400).json({ message: "User not found!" });
    }

    // 2. Check if user is verified
    if (!user.verified) {
      return res.status(400).json({ message: "Please verify OTP before logging in!" });
    }

    // 3. Password validation
    if (user.password !== password) {
      return res.status(400).json({ message: "Incorrect password!" });
    }

    // ✅ Send user data to frontend
    res.status(200).json({
      message: "Login successful!",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Login failed." });
  }
};


export const verifyOTP = async (req, res) => {
  const { email, otp } = req.body;

  try {
    if (!email || !otp) {
      return res.status(400).json({ message: "Email and OTP are required!" });
    }

    const lowerCaseEmail = email.toLowerCase();
    const user = await User.findOne({ email: lowerCaseEmail });

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    if (user.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP!" });
    }

    user.verified = true;
    user.otp = ""; // OTP clear maadu
    await user.save();

    res.status(200).json({ message: "✅ OTP verified successfully. Redirecting to login..." });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    res.status(500).json({ message: "❌ Error verifying OTP." });
  }
};

// ✅ Resend OTP API
export const resendOTP = async (req, res) => {
  const { email } = req.body;

  try {
    // ✅ Convert email to lowercase safely
    const lowerCaseEmail = email.toLowerCase();

    // 🔍 Find user with the email
    const user = await User.findOne({ email: lowerCaseEmail });

    // ❗ Check if user exists
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    // ✅ Generate new OTP and update user record
    const otp = generateOTP();
    user.otp = otp;
    await user.save();

    // ✅ Send new OTP to email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Resend OTP - Matrimony Verification",
      text: `Your new OTP for matrimony registration is: ${otp}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ message: "Error resending OTP!" });
      }
      res.status(200).json({ message: "✅ New OTP sent successfully. Please check your email!" });
    });
  } catch (error) {
    console.error("Error resending OTP:", error);
    res.status(500).json({ message: "❌ Error resending OTP." });
  }
};
