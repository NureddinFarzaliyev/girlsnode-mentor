import jwt from "jsonwebtoken";

export interface JwtPayload {
  id: number;
  email: string;
  role: string;
}

export const generateAccessToken = (payload: JwtPayload) => {
  return jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
    expiresIn: "15m",
  });
};

export const generateRefreshToken = (payload: JwtPayload) => {
  return jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
    expiresIn: "7d",
  });
};

export const verifyAccessToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_ACCESS_SECRET);
};

export const verifyRefreshToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_REFRESH_SECRET);
};

export const getRefreshTokenExpiry = () => {
  return new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
};
