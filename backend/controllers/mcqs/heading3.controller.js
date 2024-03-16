import Heading3 from "../../models/mcqs/heading3.model.js";
import expressAsyncHandler from "express-async-handler";

// -----------------------------------------------
// ------------------- GET API -------------------
// -----------------------------------------------

export const GET_HEADING3 = expressAsyncHandler(async (req, res) => {
  try {
    const heading3 = await Heading3.find();
    return res.status(200).send(heading3);
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
});

// -----------------------------------------------
// ------------------- POST API -------------------
// -----------------------------------------------

export const POST_HEADING3 = expressAsyncHandler(async (req, res) => {
  const { name, para, url, image, heading1, heading2, heading3 } = req.body;
  //  ------------  validation ------------
  if (!name) {
    return res.json({
      status: 400,
      success: false,
      error: "Name is required.",
    });
  }
  if (!para) {
    return res.json({
      status: 400,
      success: false,
      error: "Description is required.",
    });
  }
  if (!url) {
    return res.json({
      status: 400,
      success: false,
      error: "URL is required.",
    });
  }
  if (!image) {
    return res.json({
      status: 400,
      success: false,
      error: "Image is required.",
    });
  }
  if (!heading1) {
    return res.json({
      status: 400,
      success: false,
      error: "Heading 1 is required.",
    });
  }
  if (!heading2) {
    return res.json({
      status: 400,
      success: false,
      error: "Heading 2 is required.",
    });
  }
  if (!heading3) {
    return res.json({
      status: 400,
      success: false,
      error: "Heading 3 is required.",
    });
  }

  //  ------------ existing email ------------
  const existingMcqs = await Heading3.findOne({ name });
  if (existingMcqs) {
    return res.json({
      status: 400,
      success: false,
      error: "Already exist heading 3 please use it!",
    });
  }
  // ------------ save data ------------
  try {
    const newheading3 = new Heading3({
      name, para, url, image, heading1, heading2, heading3
    });
    const Headingthree = await newheading3.save();
    return res.json({
      status: 200,
      success: true,
      message: "Heading 3 Successfull Created!",
      Headingthree,
    });
  } catch (error) {
    return res.json({
      status: 500,
      success: false,
      error: "Error during Heading 3 Creating.",
    });
  }
});

// -----------------------------------------------
// ------------------- DELETE API ------------------
// -----------------------------------------------

export const DELETE_HEADING3 = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deleteheading3 = await Heading3.findByIdAndDelete(id);
    return res.status(200).send(deleteheading3);
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
});

// -----------------------------------------------
// ------------------- UPDATE API ------------------
// -----------------------------------------------

export const UPDATE_HEADING3 = expressAsyncHandler(async (req, res) => {
  const { name, para, url, image, heading1, heading2, heading3 } = req.body;
  const { id } = req.params;

    try {
      const headingthree = await Heading3.findByIdAndUpdate(
        id,
        { name, para, url, image, heading1, heading2, heading3 },
        { new: true }
      );
      return res.json({
        status: 200,
        success: true,
        message: "Heading 3 is Updating.",
        headingthree,
      });
    } catch (error) {
      return res.json({
        status: 400,
        success: false,
        error: "Error during Updating Heading 3.",
        error,
      });
    }
});



// -----------------------------------------------
// ------------------- Get Single API ------------
// -----------------------------------------------

export const GET_SHeading3 = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getsbook = await Heading3.findById(id);
    return res.status(200).send(getsbook);
  } catch (error) {
    return res.status(400).send(error);
  }
});