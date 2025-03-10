const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    selectedItems: [
      {
        name: String,
        cost: Number,
        snapshot: String,
        quantity: Number,
      }
    ],
    totalAmount: {
      type: Number,
      required: true,
      default: 0,
    },
    totalItems: {
      type: Number,
      required: true,
      default: 0,
    },
    selectedDate: {
      type: Date,
      required: true,
    },
    selectedTimeSlot: {
      type: String,
      required: true,
    },
    address: {
      name: { type: String, required: true },
      fullAddress: { type: String, required: true },
      pincode: { type: Number, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
    },
    status: {
      type: String,
      default: "Ordered",
      
      
    },
    deliveryDate: {
      type: Date,
      
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
