import Heading1Model from "../../models/mcqs/heading1.model.js";
import expressAsyncHandler from "express-async-handler";

// -----------------------------------------------
// ------------------- GET API -------------------
// -----------------------------------------------

export const GET_HEADING1 = expressAsyncHandler(async (req, res) => {
  try {
    const heading1 = await Heading1Model.find();
    return res.status(200).send(heading1);
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
});

// -----------------------------------------------
// ------------------- POST API -------------------
// -----------------------------------------------

export const POST_HEADING1 = expressAsyncHandler(async (req, res) => {
  const { name, para, url, image, heading1 } = req.body;
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

  //  ------------ existing email ------------
  const existingMcqs = await Heading1Model.findOne({ name });
  if (existingMcqs) {
    return res.json({
      status: 400,
      success: false,
      error: "Already exist heading1 please use it!",
    });
  }

  // ------------ save data ------------
  try {
    const newheading1 = new Heading1Model({
      name, para, url, image, heading1
    });
    const Heading1 = await newheading1.save();
    return res.json({
      status: 200,
      success: true,
      message: "Heading1 Successfull Created!",
      Heading1,
    });
  } catch (error) {
    return res.json({
      status: 500,
      success: false,
      error: "Error during Heading1 Creating.",
    });
  }
});

// -----------------------------------------------
// ------------------- DELETE API ------------------
// -----------------------------------------------

export const DELETE_HEADING1 = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deleteheading1 = await Heading1Model.findByIdAndDelete(id);
    return res.status(200).send(deleteheading1);
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
});

// -----------------------------------------------
// ------------------- UPDATE API ------------------
// -----------------------------------------------

export const UPDATE_HEADING1 = expressAsyncHandler(async (req, res) => {
  const { name, para, url, image, keyword, heading1 } = req.body;
  const { id } = req.params;

    try {
      const user = await Heading1Model.findByIdAndUpdate(
        id,
        { name, para, url, image, keyword, heading1 },
        { new: true }
      );
      return res.json({
        status: 200,
        success: true,
        message: "Heading 1 is Updating.",
        user,
      });
    } catch (error) {
      return res.json({
        status: 400,
        success: false,
        error: "Error during Updating Heading 1.",
        error,
      });
    }
});



// -----------------------------------------------
// ------------------- Get Single API ------------
// -----------------------------------------------

export const GET_SHeading1 = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getsbook = await Heading1Model.findById(id);
    return res.status(200).send(getsbook);
  } catch (error) {
    return res.status(400).send(error);
  }
});