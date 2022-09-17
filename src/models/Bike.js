import mongoose from "mongoose";
const { Schema } = mongoose;

const bikeSchema = new mongoose.Schema({
  ID: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Bike', bikeSchema);