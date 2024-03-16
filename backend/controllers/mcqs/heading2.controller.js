import Heading2Model from "../../models/mcqs/heading2.model.js";
import expressAsyncHandler from "express-async-handler";

// -----------------------------------------------
// ------------------- GET API -------------------
// -----------------------------------------------

export const GET_HEADING2 = expressAsyncHandler(async (req, res) => {
  try {
    const heading2 = await Heading2Model.find();
    return res.status(200).send(heading2);
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
});

// -----------------------------------------------
// ------------------- POST API -------------------
// -----------------------------------------------

export const POST_HEADING2 = expressAsyncHandler(async (req, res) => {
  const { name, para, url, image, heading1, heading2 } = req.body;
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

  //  ------------ existing email ------------
  const existingMcqs = await Heading2Model.findOne({ name });
  if (existingMcqs) {
    return res.json({
      status: 400,
      success: false,
      error: "Already exist heading 2 please use it!",
    });
  }
  // ------------ save data ------------
  try {
    const newheading2 = new Heading2Model({
      name, para, url, image, heading1, heading2
    });
    const Heading2 = await newheading2.save();
    return res.json({
      status: 200,
      success: true,
      message: "Heading 2 Successfull Created!",
      Heading2,
    });
  } catch (error) {
    return res.json({
      status: 500,
      success: false,
      error: "Error during Heading 2 Creating.",
    });
  }
});

// -----------------------------------------------
// ------------------- DELETE API ------------------
// -----------------------------------------------

export const DELETE_HEADING2 = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const deleteheading2 = await Heading2Model.findByIdAndDelete(id);
    return res.status(200).send(deleteheading2);
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
});

// -----------------------------------------------
// ------------------- UPDATE API ------------------
// -----------------------------------------------

export const UPDATE_HEADING2 = expressAsyncHandler(async (req, res) => {
  const { name, para, url, image, heading1, heading2 } = req.body;
  const { id } = req.params;
    try {
      const headingtwo = await Heading2Model.findByIdAndUpdate(
        id,
        { name, para, url, image, heading1, heading2 },
        { new: true }
      );

      return res.json({
        status: 200,
        success: true,
        message: "Heading 2 is Updating.",
        headingtwo,
      });
    } catch (error) {
      return res.json({
        status: 400,
        success: false,
        error: "Error during Updating Heading 2.",
        error,
      });
    }
});


// -----------------------------------------------
// ------------------- Get Single API ------------
// -----------------------------------------------

export const GET_SHeading2 = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getsbook = await Heading2Model.findById(id);
    return res.status(200).send(getsbook);
  } catch (error) {
    return res.status(400).send(error);
  }
});