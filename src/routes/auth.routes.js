import { Router } from "express";
import {
  renderSignUpForm,
  singup,
  renderSigninForm,
  signin,
  logout,
  renderForgotpasswordForm,
  sendemail,
} from "../controllers/auth.controllers.js";

const router = Router();

// Routes
router.get("/auth/signup", renderSignUpForm);

router.post("/auth/signup", singup);

router.get("/auth/signin", renderSigninForm);

router.post("/auth/signin", signin);

router.get("/auth/logout", logout);

router.post("/auth/forgotpassword", sendemail);

router.get("/auth/forgotpassword", renderForgotpasswordForm);

export default router;
