const { Schema, model } = require("mongoose");

const itemSchema = new Schema(
  {
    title: String
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model("Item", itemSchema);
