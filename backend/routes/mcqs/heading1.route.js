import express from "express";
import {
  GET_HEADING1,
  POST_HEADING1,
  DELETE_HEADING1,
  UPDATE_HEADING1,
  GET_SHeading1
} from "../../controllers/mcqs/heading1.controller.js";

const router = express.Router();

router.get("/get/heading1", GET_HEADING1);
router.post("/post/heading1", POST_HEADING1);
router.delete("/delete/heading1/:id", DELETE_HEADING1);
router.put("/update/heading1/:id", UPDATE_HEADING1);
router.get("/get/sheading1/:id", GET_SHeading1);

export default router;
