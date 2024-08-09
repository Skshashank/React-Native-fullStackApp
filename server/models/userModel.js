const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "please enter email"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "please enter password"],
      min: 6,
      max: 64,
    },
    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
