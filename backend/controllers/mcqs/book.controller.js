import McqsBooks from "../../models/mcqs/book.model.js";
import expressAsyncHandler from "express-async-handler";

// -----------------------------------------------
// ------------------- GET API -------------------
// -----------------------------------------------

export const GET_BOOK = expressAsyncHandler(async (req, res) => {
  try {
    const book = await McqsBooks.find();
    return res.status(200).send(book);
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
});

// -----------------------------------------------
// ------------------- POST API -------------------
// -----------------------------------------------

export const POST_BOOK = expressAsyncHandler(async (req, res) => {
  const { name, para, url, image } = req.body;
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

  //  ------------ existing email ------------
  const existingMcqs = await McqsBooks.findOne({ name });
  if (existingMcqs) {
    return res.json({
      status: 400,
      success: false,
      error: "Already exist Book please use it!",
    });
  }
  // ------------ save data ------------
  try {
    const newBook = new McqsBooks({
      name,
      para,
      url,
      image,
    });
    const Book = await newBook.save();
    return res.json({
      status: 200,
      success: true,
      message: "Book Successfully Created!.",
      Book,
    });
  } catch (error) {
    return res.json({
      status: 500,
      success: false,
      error: "Error during Book Creating.",
    });
  }
});

// -----------------------------------------------
// ------------------- DELETE API ------------------
// -----------------------------------------------

export const DELETE_BOOK = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  
  try {
    const deletebook = await McqsBooks.findByIdAndDelete(id);
    return res.status(200).send(deletebook);
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
});

// -----------------------------------------------
// ------------------- Get Single API ------------
// -----------------------------------------------

export const GET_SBOOK = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getsbook = await McqsBooks.findById(id);
    return res.status(200).send(getsbook);
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
});

// -----------------------------------------------
// ------------------- UPDATE API ----------------
// -----------------------------------------------

export const UPDATE_BOOK = expressAsyncHandler(async (req, res) => {
  const { name, para, url, image } = req.body;
  const { id } = req.params;

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

  try {
    const user = await McqsBooks.findByIdAndUpdate(
      id,
      { name, para, url, image },
      { new: true }
    );
    return res.json({
      status: 200,
      success: true,
      message: "Book is updating.",
      user,
    });
  } catch (error) {
    return res.json({
      status: 400,
      success: false,
      error: "Error during updating book.",
      error,
    });
  }
});
