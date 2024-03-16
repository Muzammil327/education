import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
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

const McqsBooks = mongoose.model("McqsBooks", bookSchema);

export default McqsBooks;
