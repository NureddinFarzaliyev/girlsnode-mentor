import { Request, Response } from "express";
import { Book } from "./books.model";
import { Author } from "../authors/authors.model";

export const createBook = async (req: Request, res: Response) => {
  try {
    const user = await Book.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    console.error("Error creating book:", err);
    res.status(500).json({ error: "Failed to create book" });
  }
};

export const getBooks = async (_req: Request, res: Response) => {
  const books = await Book.findAll({
    include: [
      {
        model: Author,
        as: "author",
      },
    ],
  });
  res.json(books);
};
