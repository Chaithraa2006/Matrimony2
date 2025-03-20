import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  phone: String,
  otp: String,
  verified: { type: Boolean, default: false }, 
}); 
const User = mongoose.model("User", userSchema);
export default User;
