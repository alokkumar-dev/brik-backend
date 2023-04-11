const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    details: { type: String, require: true },
  }, 
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("post", postSchema);
