import JWT from "jsonwebtoken";
import userModel from "../models/user.model.js";

export async function VerifyToken(req, res, next) {
  const token = req.cookies["token"];
  try {
    if (!token) {
      return res.json({
        success: false,
        message: "NO Token Given",
      });
    }
    const decode = JWT.verify(String(token), process.env.JWT_SECRET_KEY);
    const user = await userModel.findById(decode.id);
    if (!user) return res.status(404).json({ message: "invalid" });
    req.id = decode.id;

    req.user = user.role;
    next();
  } catch (error) {
    console.log(error);
  }
}

export async function VerifyAdminToken(req, res, next) {
  const data = req.user;
  try {
    if (data === "admin") next();
    else {
      res.status(500).send({
        message: "You are not admin",
      });
    }
  } catch (error) {
    //   // Handle any errors
    console.error("Error:", error);
    //   res.status(500).json({ error: "Internal Server Error" });
  }
}
