import expressAsyncHandler from "express-async-handler";
import userModel from "../models/user.model.js";
import { hashPassword, comparePassword } from "../util/bcrypt.js";
import JWT from "jsonwebtoken";

export const RegisterControler = expressAsyncHandler(async (req, res) => {
  const { name, email, password, role } = req.body;
  //  ------------  validation ------------
  if (!name) {
    return res.json({
      status: 400,
      success: false,
      error: "Enter Name",
    });
  }
  if (!email) {
    return res.json({
      status: 400,
      success: false,
      error: "Enter Email",
    });
  }
  if (!password) {
    return res.json({
      status: 400,
      success: false,
      error: "Enter Password",
    });
  }
  if (password.length < 6) {
    return res.json({
      status: 400,
      success: false,
      error: "Enter a password with at least 6 characters",
    });
  }

  //  ------------ existing email ------------
  const existingEmail = await userModel.findOne({ email });
  if (existingEmail) {
    return res.json({
      status: 400,
      success: false,
      error: "Already Register please Register",
    });
  }

  // ------------ password hash ------------
  const hashedPassword = await hashPassword(password);

  try {
    // ------------ save data ------------
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
      role: "user",
    });

    const loginUser = await newUser.save();

    return res.json({
      status: 200,
      success: true,
      message: "Register Successfull!.",
      loginUser,
    });
  } catch (error) {
    return res.json({
      status: 500,
      success: false,
      error: "Error during Register.",
    });
  }
});

export const LoginController = expressAsyncHandler(async (req, res) => {
  const { password, email, role } = req.body;
  //   validation
  if (!email) {
    return res.json({
      status: 400,
      success: false,
      error: "Email is Required.",
    });
  }
  if (!password) {
    return res.json({
      status: 400,
      success: false,
      error: "Password is Required.",
    });
  }

  //   existing email
  const user = await userModel.findOne({ email });
  if (!user) {
    return res.json({
      status: 400,
      success: false,
      error: "Email is not registerd plz Login",
    });
  }

  // check password
  const match = await comparePassword(password, user.password);
  if (!match) {
    return res.json({
      success: false,
      error: "Invalid Password",
    });
  }

  try {
    // token
    const token = JWT.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );

    //     const option = {
    //  // httpOnly: true,
    //       // // secure: process.env.NODE_ENV === "production", // Set to true in production
    //       // maxAge: 86400000,
    //       // path: "/",
    //       // secure:false,
    //       // sameSite: "None",
    //       path: "/",
    //       expires: new Date(Date.now() + 1000 * 30), // 30 seconds
    //       httpOnly: true,
    //       Domain: "http://localhost:3000",
    //       sameSite: "lax",
    //     }
  const option = { httpOnly: true,secure:false}


    // cookie
    res
      .status(200)
      .cookie("token", token, option)
      .json({
        success: true,
        message: "User Login Successfully",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
        token,
      });
  } catch (error) {
    return res.json({
      success: false,
      error: "Error Login User",
      error,
    });
  }
});

export const LogoutController = expressAsyncHandler(async (req, res) => {
  const token = req.cookies["token"];

  try {
    if (!token) {
      return res.json({
        success: false,
        message: "NO Token Given",
      });
    }
    JWT.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(400).json({ message: "Invalid TOken" });
      }
      res.clearCookie(user.id);
      return res.json({
        success: false,
        message: "User LogOut Successfully",
      });
    });
  } catch (error) {
    return res.json({
      success: false,
      error: "Error Login User",
      error,
    });
  }
});

export const GetUserController = expressAsyncHandler(async (req, res) => {
  try {
    const user = req.id;
    const userData = await userModel.findById(user);

    if (!userData) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(userData);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
