import { Request, Response } from "express";
import { User } from "../models/user.model";
import {
  generateAccessToken,
  generateRefreshToken,
  getRefreshTokenExpiry,
  JwtPayload,
  verifyRefreshToken,
} from "../shared/utils/jwt";
import { RefreshToken } from "../models/refreshToken.model";
import { createResponse } from "../shared/utils/response";
import bcrypt from "bcrypt";

const getClientInfo = (req: Request) => ({
  userAgent: req.headers["user-agent"] || null,
  ipAddress: req.ip || null,
});

const createTokenPair = async (user: User, req: Request) => {
  const payload: JwtPayload = {
    id: user.id,
    email: user.email,
    role: user.role,
  };

  const accessToken = generateAccessToken(payload);
  const refreshTokenValue = generateRefreshToken(payload);

  const { userAgent, ipAddress } = getClientInfo(req);

  await RefreshToken.create({
    token: refreshTokenValue,
    userId: user.id,
    expiresAt: getRefreshTokenExpiry(),
    userAgent,
    ipAddress,
  });

  return { accessToken, refreshToken: refreshTokenValue };
};

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json(
        createResponse({
          success: false,
          message: "Name, email, and password are required",
        }),
      );
    }

    const existing = await User.findOne({ where: { email } });
    if (existing) {
      return res
        .status(409)
        .json({ success: false, message: "Email already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hashedPassword });
    const { accessToken, refreshToken } = await createTokenPair(user, req);

    return res.status(201).json(
      createResponse({
        success: true,
        message: "Registration successful",
        data: { user, accessToken, refreshToken },
      }),
    );
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json(
      createResponse({
        success: false,
        message: "An error occurred during registration",
      }),
    );
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json(
        createResponse({
          success: false,
          message: "Email and password are required",
        }),
      );
    }

    const user = await User.findOne({ where: { email } });
    if (!user || !user.isActive) {
      return res
        .status(401)
        .json(
          createResponse({ success: false, message: "Invalid credentials" }),
        );
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json(
          createResponse({ success: false, message: "Invalid credentials" }),
        );
    }

    const { accessToken, refreshToken } = await createTokenPair(user, req);

    return res.status(200).json(
      createResponse({
        success: true,
        message: "Login successful",
        data: { user, accessToken, refreshToken },
      }),
    );
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json(
      createResponse({
        success: false,
        message: "An error occurred during registration",
      }),
    );
  }
};

export const refresh = async (req: Request, res: Response) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res
        .status(400)
        .json(
          createResponse({ success: false, message: "Refresh token required" }),
        );
    }

    let decoded;
    try {
      decoded = verifyRefreshToken(refreshToken);
    } catch (err) {
      console.error("Refresh token verification error:", err);
      return res.status(401).json(
        createResponse({
          success: false,
          message: "Refresh token expired or invalid, please log in again",
        }),
      );
    }

    const tokenRecord = await RefreshToken.findOne({
      where: { token: refreshToken },
    });

    if (
      !tokenRecord ||
      tokenRecord.isRevoked ||
      tokenRecord.expiresAt < new Date()
    ) {
      return res.status(401).json(
        createResponse({
          success: false,
          message: "Refresh token is invalid or has been revoked",
        }),
      );
    }

    const user = await User.findByPk(decoded.id);
    if (!user || !user.isActive) {
      return res.status(401).json(
        createResponse({
          success: false,
          message: "User not found or inactive",
        }),
      );
    }

    await tokenRecord.update({ isRevoked: true });
    const { accessToken, refreshToken: newRefreshToken } =
      await createTokenPair(user, req);

    return res.status(200).json(
      createResponse({
        success: true,
        message: "Tokens refreshed",
        data: { accessToken, refreshToken: newRefreshToken },
      }),
    );
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json(
      createResponse({
        success: false,
        message: "An error occurred during registration",
      }),
    );
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    const { refreshToken } = req.body;

    if (refreshToken) {
      await RefreshToken.update(
        { isRevoked: true },
        { where: { token: refreshToken, userId: req.user!.id } },
      );
    }

    return res
      .status(200)
      .json(
        createResponse({ success: true, message: "Logged out successfully" }),
      );
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json(
      createResponse({
        success: false,
        message: "An error occurred during registration",
      }),
    );
  }
};

export const logoutAll = async (req: Request, res: Response) => {
  try {
    await RefreshToken.update(
      { isRevoked: true },
      { where: { userId: req.user!.id, isRevoked: false } },
    );

    return res
      .status(200)
      .json(
        createResponse({ success: true, message: "All sessions terminated" }),
      );
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json(
      createResponse({
        success: false,
        message: "An error occurred during registration",
      }),
    );
  }
};

export const me = (req: Request, res: Response) => {
  return res.status(200).json({ success: true, data: { user: req.user } });
};

export const sessions = async (req: Request, res: Response) => {
  try {
    const tokens = await RefreshToken.findAll({
      where: { userId: req.user!.id, isRevoked: false },
      attributes: ["id", "userAgent", "ipAddress", "expiresAt", "createdAt"],
      order: [["createdAt", "DESC"]],
    });

    const active = tokens.filter((t) => t.expiresAt > new Date());

    return res.status(200).json({ success: true, data: { sessions: active } });
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json(
      createResponse({
        success: false,
        message: "An error occurred during registration",
      }),
    );
  }
};
