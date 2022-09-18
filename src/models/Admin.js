import mongoose from "mongoose";
const { Schema } = mongoose;

const AdminSchema = new mongoose.Schema({
  idAdmin: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Admin", AdminSchema);
