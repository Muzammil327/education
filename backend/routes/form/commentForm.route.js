import express from "express";
import {
  GET_CommentForm,
  POST_CommentForm,
  DELETE_CommentForm,
} from "../../controllers/form/commentform.controller.js";

const router = express.Router();

router.get("/get/commentform", GET_CommentForm);
router.post("/post/commentform", POST_CommentForm);
router.delete("/delete/commentform/:id", DELETE_CommentForm);

export default router;
