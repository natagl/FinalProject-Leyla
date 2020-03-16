const { Schema, model } = require("mongoose");

const itemSchema = new Schema(
  {
    imageUrl: String,
    title: String,
    description: String,
    size: Number
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model("Item", itemSchema);
