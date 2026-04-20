import { Router } from "express";
import { createBook, getBooks } from "./books.controller";

export const booksRouter = Router();

booksRouter.get("/", getBooks);
booksRouter.post("/", createBook);
