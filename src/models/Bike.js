import mongoose from "mongoose";
const { Schema } = mongoose;

const bikeSchema = new mongoose.Schema({
  ID: {
    type: String,
    required: true,
  },
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
    required: true,
  },
  condition: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Bike", bikeSchema);
