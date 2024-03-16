import express from "express";
import {
  GET_Newsletter,
  POST_Newsletter,
  DELETE_Newsletter,
} from "../../controllers/form/newletter.controller.js";

const router = express.Router();

router.get("/get/newsletter", GET_Newsletter);
router.post("/post/newsletter", POST_Newsletter);
router.delete("/post/newsletter/:id", DELETE_Newsletter);

export default router;
