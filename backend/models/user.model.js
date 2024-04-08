import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    avatar: {
      type: String,
      default:
        "https://img.freepik.com/premium-vector/businessman-profile-cartoon_18591-58481.jpg",
        
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
export default User;
