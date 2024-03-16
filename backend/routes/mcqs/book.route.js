import express from "express";
import {
  GET_BOOK,
  POST_BOOK,
  DELETE_BOOK,
  GET_SBOOK,
  UPDATE_BOOK,
} from "../../controllers/mcqs/book.controller.js";

const router = express.Router();

router.get("/get/book", GET_BOOK);
router.get("/get/sbook/:id", GET_SBOOK);
router.post("/post/book", POST_BOOK);
router.delete("/delete/book/:id", DELETE_BOOK);
router.put("/update/book/:id", UPDATE_BOOK);

export default router;
