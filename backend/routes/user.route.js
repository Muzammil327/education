import express from 'express';
import {LoginController, RegisterControler, GetUserController} from '../controllers/user.controller.js'
import {VerifyToken, VerifyAdminToken} from '../middleware/verifyToken.js';

const router = express.Router();

router.post("/login", LoginController)
router.post("/register", RegisterControler)
router.get("/profile", VerifyToken, GetUserController)

router.get("/register/user", VerifyToken, (req, res) => {
    res.status(200).json({
        message:"Successful get user"
    })
})

router.get("/register/admin", VerifyToken, VerifyAdminToken,  (req, res) => {
    res.status(200).json({
        message:"Successful get user"
    })
})


export default router;