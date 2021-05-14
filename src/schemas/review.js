"use strict";

const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: { type: String, required: true },
    descr: { type: String, required: [true, "task description is required"] },
    date: { type: Date, default: Date.now },
  },
  { versionKey: false, timestamps: true },
);

module.exports = model("Review", schema);
