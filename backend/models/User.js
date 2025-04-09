import mongoose from "mongoose";

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
  profileFor: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  religion: {
    type: String,
    required: true,
  },
  motherTongue: {
    type: String,
    required: true,
  },
  alerts: {
    type: Boolean,
    default: false,
  },
  otp: {
    type: String,
    default: "",
  },
  verified: {
    type: Boolean,
    default: false,
  },
  image: {
    type: String,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
