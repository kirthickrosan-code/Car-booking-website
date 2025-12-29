const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    userPhone: { type: String, required: true },
    vehicleType: { type: String, required: true },
    pickupDate: { type: String },
    dropDate: { type: String },
    amount: { type: Number, required: true },
    paymentId: { type: String, required: true },
    status: { type: String, default: "Paid" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
