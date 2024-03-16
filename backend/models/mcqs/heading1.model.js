import mongoose from "mongoose";

const Heading1ModelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  heading1: {
    type: String,
    required: true,
  },
  para: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Heading1Model = mongoose.model("Heading1Model", Heading1ModelSchema);

export default Heading1Model;
