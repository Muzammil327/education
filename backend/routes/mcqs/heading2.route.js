import express from "express";
import {
  GET_HEADING2,
  POST_HEADING2,
  DELETE_HEADING2,
  UPDATE_HEADING2,
  GET_SHeading2
} from "../../controllers/mcqs/heading2.controller.js";

const router = express.Router();

router.get("/get/heading2", GET_HEADING2);
router.post("/post/heading2", POST_HEADING2);
router.delete("/delete/heading2/:id", DELETE_HEADING2);
router.put("/update/heading2/:id", UPDATE_HEADING2);
router.get("/get/sheading2/:id", GET_SHeading2);


export default router;
