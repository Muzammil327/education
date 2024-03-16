import CommentForm from "../../models/form/commentform.model.js";
import expressAsyncHandler from "express-async-handler";

// -----------------------------------------------
// ------------------- GET API -------------------
// -----------------------------------------------

export const GET_CommentForm = expressAsyncHandler(async (req, res) => {
  try {
    const commentform = await CommentForm.find();
    return res.status(200).send(commentform);
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
});

// -----------------------------------------------
// ------------------- POST API ------------------
// -----------------------------------------------

export const POST_CommentForm = expressAsyncHandler(async (req, res) => {
  const { fname, lname, email, message, url } = req.body;
  //  ------------  validation ------------
  if (!fname) {
    return res.json({
      status: 400,
      success: false,
      error: "First Name is required.",
    });
  }
  if (!lname) {
    return res.json({
      status: 400,
      success: false,
      error: "Last Name is required.",
    });
  }
  if (!email) {
    return res.json({
      status: 400,
      success: false,
      error: "Email is required.",
    });
  }
  if (!message) {
    return res.json({
      status: 400,
      success: false,
      error: "Comment is required.",
    });
  }
  // ------------ save data ------------
  try {
    const newCommentForm = new Newsletter({
      fname,
      lname,
      email,
      message,
      url,
    });
    const Mcqs = await newCommentForm.save();
    return res.json({
      status: 200,
      success: true,
      message: "Comment Successfull Submit!.",
      Mcqs,
    });
  } catch (error) {
    return res.json({
      status: 500,
      success: false,
      error: "Error during Comment Creating.",
    });
  }
});

// -----------------------------------------------
// ------------------- DELETE API ------------------
// -----------------------------------------------

export const DELETE_CommentForm = async (req, res) => {
  const { id } = req.params;
  try {
    const commentform = await CommentForm.findByIdAndDelete(id);
    return res.status(200).send(commentform);
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
