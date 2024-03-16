import express from "express";
import {
  GET_HEADING3,
  POST_HEADING3,
  DELETE_HEADING3,
  UPDATE_HEADING3,
  GET_SHeading3
} from "../../controllers/mcqs/heading3.controller.js";

const router = express.Router();

router.get("/get/heading3", GET_HEADING3);
router.get("/get/sheading3/:id", GET_SHeading3);
router.post("/post/heading3", POST_HEADING3);
router.delete("/delete/heading3/:id", DELETE_HEADING3);
router.put("/update/heading3/:id", UPDATE_HEADING3);

export default router;
