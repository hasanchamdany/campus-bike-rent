import mongoose from "mongoose";
const { Schema } = mongoose;

const memberSchema = new mongoose.Schema({
  // niu: {
  //   type: String,
  //   required: true,
  // },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  bookingStatus:{
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  }
},
  {timestamps:true}
);

export default mongoose.model("Member", memberSchema);
