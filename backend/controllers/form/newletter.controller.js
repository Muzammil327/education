import Newsletter from "../../models/form/newletter.model.js";
import expressAsyncHandler from "express-async-handler";

// -----------------------------------------------
// ------------------- GET API -------------------
// -----------------------------------------------

export const GET_Newsletter = expressAsyncHandler(async (req, res) => {
  try {
    const newsletter = await Newsletter.find();
    return res.status(200).send(newsletter);
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
});

// -----------------------------------------------
// ------------------- POST API ------------------
// -----------------------------------------------

export const POST_Newsletter = expressAsyncHandler(async (req, res) => {
  const { email } = req.body;
  //  ------------  validation ------------
  if (!email) {
    return res.json({
      status: 400,
      success: false,
      error: "Enter Email",
    });
  }

  //  ------------ existing email ------------
  const existingMcqs = await Newsletter.findOne({ email });
  if (existingMcqs) {
    return res.json({
      status: 400,
      success: false,
      error: "Already Subscribe!",
    });
  }
  // ------------ save data ------------
  try {
    const newSubscriber = new Newsletter({
      email,
    });
    const Subscriber = await newSubscriber.save();
    return res.json({
      status: 200,
      success: true,
      message: "You Successfully Subscriber!.",
      Subscriber,
    });
  } catch (error) {
    return res.json({
      status: 500,
      success: false,
      error: "Error during Subscribing.",
    });
  }
});

// -----------------------------------------------
// ------------------- DELETE API ------------------
// -----------------------------------------------

export const DELETE_Newsletter = async (req, res) => {
  const { id } = req.params;
  try {
    const newsletter = await Newsletter.findByIdAndDelete(id);
    return res.status(200).send(newsletter);
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
