import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    trim: true,
    required: ["Please Enter your email", true],
  },
  password: {
    type: String,
    minLength: 6,
    maxLength: 20
  },
},
{ timestamps: true }
)

const User = mongoose.model("User", userSchema);

export default User;