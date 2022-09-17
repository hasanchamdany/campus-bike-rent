import mongoose from "mongoose";
const { Schema } = mongoose;

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  NIU: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Member', memberSchema);