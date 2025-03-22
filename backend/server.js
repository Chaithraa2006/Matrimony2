
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
app.post("/api/auth/register", upload.single("image"), async (req, res) => {
  const { name, email, password, phone } = req.body;
  const image = req.file ? req.file.filename : null; // ✅ Upload Image

  try {
    // ✅ Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }

    // ✅ Generate OTP and Save User to Database
    const otp = generateOTP();
    const newUser = new User({
      name,
      email: email.toLowerCase(),
      password,
      phone,
      otp,
      image, // ✅ Store image path in DB
      verified: false,
    });

    await newUser.save();

    // ✅ Send OTP to Email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Matrimony OTP Verification",
      text: `Your OTP for matrimony registration is: ${otp}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("❌ Error sending email:", error);
        return res.status(500).json({ message: "Error sending OTP!" });
      }
      res.status(200).json({ message: "✅ OTP sent successfully. Please verify your email!" });
    });
  } catch (error) {
    console.error("❌ Registration error:", error);
    res.status(500).json({ message: "❌ Registration failed!" });
  }
});

// ===============================
// ✅ VERIFY OTP API
// ===============================
app.post("/api/auth/verify-otp", async (req, res) => {
  const { email, otp } = req.body;

  try {
    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    if (user.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP!" });
    }

    // ✅ Mark user as verified
    user.verified = true;
    user.otp = ""; // Clear OTP after verification
    await user.save();

    res.status(200).json({ message: "✅ OTP verified successfully. You can now login!" });
  } catch (error) {
    console.error("❌ Error verifying OTP:", error);
    res.status(500).json({ message: "❌ Error verifying OTP." });
  }
});

// ===============================
// ✅ LOGIN API
// ===============================
app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    if (!user.verified) {
      return res.status(400).json({ message: "Please verify your OTP before logging in!" });
    }

    if (user.password !== password) {
      return res.status(400).json({ message: "Incorrect password!" });
    }

    // ✅ Send User Data to Frontend
    res.status(200).json({
      message: "✅ Login successful!",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        password: user.password,
        image: user.image,
      },
    });
  } catch (error) {
    console.error("❌ Login error:", error);
    res.status(500).json({ message: "❌ Login failed." });
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
