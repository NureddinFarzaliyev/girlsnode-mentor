import { Router } from "express";
import {
  createAuthor,
  getAuthors,
  getSingleAuthor,
} from "./authors.controller";

export const authorsRouter = Router();

authorsRouter.get("/", getAuthors);
authorsRouter.get("/:id", getSingleAuthor);
authorsRouter.post("/", createAuthor);
