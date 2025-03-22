// ✅ Import Required Modules
import mongoose from "mongoose";

// ✅ Define User Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  image: {
    type: String, // ✅ Store image path in DB
    default: null,
  },
  otp: {
    type: String,
  },
  verified: {
    type: Boolean,
    default: false,
  },
});

// ✅ Create and Export User Model
const User = mongoose.model("User", userSchema);
export default User;
