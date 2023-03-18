const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const orderSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
        type: String,
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
      noOfPassengers: {
        type: String,
        required: true,
      },
      time: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },

  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = mongoose.model("Order", orderSchema);

