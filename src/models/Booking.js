import mongoose from "mongoose";
const { Schema } = mongoose;

const bookingSchema = new mongoose.Schema({
  //id member
  location: {
    type: String,
    required: true,
  },
  tanggal: {
    type: Date,
    required: true,
  },
  jam: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Booking", bookingSchema);
