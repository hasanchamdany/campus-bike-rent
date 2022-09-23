import mongoose from "mongoose";
const { Schema } = mongoose;

const bookingSchema = new mongoose.Schema({
  tanggal: {
    type: String,
    required: true,
  },
  jam: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Booking", bookingSchema);
