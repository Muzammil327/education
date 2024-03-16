import express from 'express';
import { GET_MCQS, POST_MCQS, SINGLE_MCQS,DELETE_MCQS, UPDATE_MCQS } from '../../controllers/mcqs/mcqs.controller.js'

const router = express.Router();

router.get("/get/mcqs", GET_MCQS)
router.get("/get/mcqs/:slug", SINGLE_MCQS)
router.post("/post/mcqs", POST_MCQS)
router.put("/update/mcqs", UPDATE_MCQS)
router.delete("/delete/mcqs", DELETE_MCQS)

export default router;