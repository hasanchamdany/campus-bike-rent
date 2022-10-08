import mongoose from "mongoose";
const { Schema } = mongoose;

const bookingSchema = new mongoose.Schema({
  //id member
  memberId: {
    type: mongoose.Types.ObjectId,
    required: true,
    unique: false,
  },
  bikeId: {
    type: mongoose.Types.ObjectId,
    required: true,
    unique: false,
  },
  location: {
    type: String,
    required: true,
  },
  DateTake: {
    type: Date,
    required: true,
  },
  returnedStatus:{
    type: Boolean,
    default:0,
    required: true,
  },
  jam: {
    type: Number,
    required: true,
  },
},
{timestamps: true}
);

export default mongoose.model("Booking", bookingSchema);
