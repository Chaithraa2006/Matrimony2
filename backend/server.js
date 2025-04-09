// ✅ Import Required Modules
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import multer from "multer";
import path from "path";
import User from "./models/User.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Serve Uploaded Images
app.use("/uploads", express.static("uploads"));

// ✅ MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/matrimony2", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Multer Setup for Image Uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// ✅ Configure Nodemailer for Gmail
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // False for 587, true for 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ Generate 6-Digit OTP
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();


// ===============================
// ✅ REGISTER API
// ===============================
// ===============================
// ✅ REGISTER API (MODIFIED)
// ===============================
let tempData = {}; // ✅ Temporary storage for unverified data

app.post("/api/auth/register", async (req, res) => {
  try {
    const { name, email, password, phone, profileFor, gender, dob, country, religion, motherTongue, alerts } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists with this email" });
    }

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Create new user
    const newUser = new User({
      name,
      email: email.toLowerCase(),
      password,
      phone,
      profileFor,
      gender,
      dob,
      country,
      religion,
      motherTongue,
      alerts,
      otp,
      verified: false
    });

    // Save user to database
    await newUser.save();

    // Send OTP email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Verify your email - AtoZ Matrimony",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ff4081;">Welcome to AtoZ Matrimony!</h2>
          <p>Thank you for registering. Please verify your email using the OTP below:</p>
          <div style="background: #f5f5f5; padding: 20px; text-align: center; margin: 20px 0;">
            <h1 style="color: #ff4081; margin: 0;">${otp}</h1>
          </div>
          <p>This OTP will expire in 10 minutes.</p>
          <p>If you didn't request this, please ignore this email.</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({
      message: "Registration successful! Please check your email for OTP verification.",
      user: {
        email: newUser.email,
        name: newUser.name
      }
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Registration failed. Please try again." });
  }
});


// ===============================
// ✅ VERIFY OTP API
// ===============================
// ✅ VERIFY OTP API - Create Profile After OTP Verification
// ✅ VERIFY OTP API
// ✅ VERIFY OTP API
// ===============================
// ✅ VERIFY OTP API (MODIFIED)
// ===============================
app.post("/api/auth/verify-otp", async (req, res) => {
  const { email, otp } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email: email.toLowerCase() });
    
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    // Check if OTP matches
    if (user.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP! Please try again." });
    }

    // Update user verification status
    user.verified = true;
    user.otp = ""; // Clear OTP after successful verification
    await user.save();

    res.status(200).json({
      message: "Email verified successfully! You can now login.",
      user: {
        name: user.name,
        email: user.email,
        verified: user.verified
      }
    });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    res.status(500).json({ message: "Error verifying OTP. Please try again." });
  }
});

// ✅ Clear tempData every 30 minutes
setInterval(() => {
  tempData = {}; // ✅ Clear all unverified users
  console.log("🧹 Cleared unverified users!");
}, 30 * 60 * 1000); // 30 minutes



// ===============================
// ✅ LOGIN API
// ===============================
// ==============================
// ✅ LOGIN API
// ==============================
// ==============================
// ✅ LOGIN API (UPDATED)
// ==============================
// ✅ LOGIN API (UPDATED)
app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user) {
      return res.status(404).json({ message: "User not found! Please register first." });
    }

    // Check if user is verified
    if (!user.verified) {
      return res.status(400).json({ message: "Please verify your email first!" });
    }

    // Check password
    if (user.password !== password) {
      return res.status(400).json({ message: "Incorrect password!" });
    }

    // Send complete user data to frontend
    res.status(200).json({
      message: "Login successful!",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        profileFor: user.profileFor,
        gender: user.gender,
        dob: user.dob,
        country: user.country,
        religion: user.religion,
        motherTongue: user.motherTongue,
        alerts: user.alerts,
        image: user.image ? `http://localhost:5000/uploads/${user.image}` : null,
        verified: user.verified,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Login failed. Please try again." });
  }
});


// ===============================
// ✅ RESEND OTP API
// ===============================
app.post("/api/auth/resend-otp", async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    // ✅ Generate New OTP
    const otp = generateOTP();
    user.otp = otp;
    await user.save();

    // ✅ Send New OTP via Email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Resend OTP - Matrimony Verification",
      text: `Your new OTP for matrimony registration is: ${otp}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("❌ Error sending email:", error);
        return res.status(500).json({ message: "Error resending OTP!" });
      }
      res.status(200).json({ message: "✅ New OTP sent successfully. Please check your email!" });
    });
  } catch (error) {
    console.error("❌ Error resending OTP:", error);
    res.status(500).json({ message: "❌ Error resending OTP." });
  }
});

// ===============================
// ✅ SERVER START
// ===============================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
