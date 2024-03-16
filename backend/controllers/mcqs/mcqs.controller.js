import mcqsModel from "../../models/mcqs/mcqs.model.js";
import expressAsyncHandler from "express-async-handler";
import slugify from "slugify";

// -----------------------------------------------
// ------------------- GET API -------------------
// -----------------------------------------------

export const GET_MCQS = expressAsyncHandler(async (req, res) => {
  try {
    const mcqs = await mcqsModel.find();
    return res.status(201).send(mcqs);
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
});

// -----------------------------------------------
// ------------------- POST API -------------------
// -----------------------------------------------

export const POST_MCQS = expressAsyncHandler(async (req, res) => {
  const { name, correct, image, tags, options } = req.body;
  //  ------------  validation ------------
  if (!name) {
    return res.json({
      status: 400,
      success: false,
      error: "Question Name is required.",
    });
  }
  if (!correct) {
    return res.json({
      status: 400,
      success: false,
      error: "Correct Question Option is required.",
    });
  }
  if (!tags) {
    return res.json({
      status: 400,
      success: false,
      error: "Tag Question is required.",
    });
  }
  if (!options) {
    return res.json({
      status: 400,
      success: false,
      error: "Question Option is required.",
    });
  }

  //  ------------ existing email ------------
  const existingMcqs = await mcqsModel.findOne({ name });
  if (existingMcqs) {
    return res.json({
      status: 400,
      success: false,
      error: "Already Exist please change!",
    });
  }
  try {
    const slug = slugify(name, { lower: true });

    // ------------ save data ------------
    const newMcqs = new mcqsModel({
      name,
      correct,
      image,
      tags,
      options,
      slug: slug,
    });
    const Mcqs = await newMcqs.save();
    return res.json({
      status: 200,
      success: true,
      message: "Mcqs Successfull!.",
      Mcqs,
    });
  } catch (error) {
    return res.json({
      status: 500,
      success: false,
      error: "Error during Mcqs Creating.",
    });
  }
});

// -----------------------------------------------
// ------------------- UPDATED API ------------------
// -----------------------------------------------

export const UPDATE_MCQS = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, correct, image, tags, options } = req.body;
  //  ------------  validation ------------
  if (!name) {
    return res.json({
      status: 400,
      success: false,
      error: "Question Name is required.",
    });
  }
  if (!correct) {
    return res.json({
      status: 400,
      success: false,
      error: "Correct Question Option is required.",
    });
  }
  if (!tags) {
    return res.json({
      status: 400,
      success: false,
      error: "Tag Question is required.",
    });
  }
  if (!options) {
    return res.json({
      status: 400,
      success: false,
      error: "Question Option is required.",
    });
  }

  try {
    const mcqsupdate = await mcqsModel.findByIdAndUpdate(
      id,
      { name, correct, image, tags, options },
      { new: true }
    );
    return res.json({
      status: 200,
      success: true,
      message: "Mcqs is Updating.",
      mcqsupdate,
    });
  } catch (error) {
    return res.json({
      status: 400,
      success: false,
      error: "Error during Updating Mcqs.",
      error,
    });
  }
});

// -----------------------------------------------
// ------------------- DELETE API ------------------
// -----------------------------------------------

export const DELETE_MCQS = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deletemcqs = await mcqsModel.findByIdAndDelete(id);
    return res.status(200).send(deletemcqs);
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
});

// -----------------------------------------------
// ------------------- SINGLE API ------------------
// -----------------------------------------------

export const SINGLE_MCQS = expressAsyncHandler(async (req, res) => {
  let { slug } = req.params;

  try {
    const user = await mcqsModel.findOne({ slug });
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).json({ message: "Mcqs not found" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});
