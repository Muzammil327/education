import mongoose from "mongoose";

const McqsModelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  correct: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  options: {
    type: [String],
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
});

const McqsModel = mongoose.model("McqsModel", McqsModelSchema);

export default McqsModel;
