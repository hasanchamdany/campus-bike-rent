import mongoose from "mongoose";
const { Schema } = mongoose;

const bookingSchema = new mongoose.Schema({
  //id member

  
  location: {
    type: String,
    required: true,
  },
  DateTake: {
    type: Date,
    required: true,
  },
  DateReturn: {
    type: Date,
    required:false,
  },
  jam: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Booking", bookingSchema);
