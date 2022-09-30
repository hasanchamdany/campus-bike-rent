import mongoose from "mongoose";
const { Schema } = mongoose;

const bikeSchema = new mongoose.Schema({
  // ID: {
  //   type: String,
  //   required: true,
  // },
  location: {
    type: String,
    required: true,
  },
  availability: {
    type: Boolean,
    required: true,
  },
  borrowPeriod: {
    type: String,
    default: 0,
  },
  condition: {
    type: String,
    required: true,
  },
  // riderId:{
  //   type: mongoose.Types.ObjectId,
  //   required: false,
  // }
});

export default mongoose.model("Bike", bikeSchema);
