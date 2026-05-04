import { NextFunction, Request, Response } from "express";
import { createResponse } from "../shared/utils/response";
import { verifyAccessToken } from "../shared/utils/jwt";
import { User } from "../models/user.model";

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const authHeader = req.headers["authorization"];
    const token =
      authHeader && authHeader.startsWith("Bearer ")
        ? authHeader.slice(7)
        : null;

    if (!token) {
      return res.status(401).json(
        createResponse({
          success: false,
          message: "Access token required",
        }),
      );
    }

    let decoded;
    try {
      decoded = verifyAccessToken(token);
    } catch (err) {
      return res.status(401).json(
        createResponse({
          success: false,
          message: "Invalid or expired access token",
        }),
      );
    }

    const user = await User.findByPk(decoded.id);
    if (!user || !user.isActive) {
      return res.status(401).json(
        createResponse({
          success: false,
          message: "User not found or account deactivated",
        }),
      );
    }

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
