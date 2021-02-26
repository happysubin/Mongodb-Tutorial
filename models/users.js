const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    userName: { type: String, requried: true, unique: true },
    name: {
      first: { type: String, requried: true },
      last: { type: String, requried: true },
    },
    age: Number,
    email: String,
  },
  { timestamps: true }
);

const User = mongoose.model("user", UserSchema);
module.exports = { User };
