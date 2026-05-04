import { Router } from "express";
import {
  login,
  logout,
  logoutAll,
  me,
  refresh,
  register,
  sessions,
} from "../controller/auth";
import { authenticate } from "../middlewares/authenticate";

export const authRouter = Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/refresh", refresh);

authRouter.get("/me", authenticate, me);
authRouter.post("/logout", authenticate, logout);
authRouter.post("/logout-all", authenticate, logoutAll);
authRouter.get("/sessions", authenticate, sessions);
