import mongoose from "mongoose";

const Heading3Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  heading1: {
    type: String,
    required: true,
  },
  heading2: {
    type: String,
    required: true,
  },
  heading3: {
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

const Heading3 = mongoose.model("Heading3", Heading3Schema);

export default Heading3;
