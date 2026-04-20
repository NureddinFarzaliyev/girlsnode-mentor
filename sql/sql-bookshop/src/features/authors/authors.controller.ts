import { Request, Response } from "express";
import { Author } from "./authors.model";
import { Book } from "../books/books.model";

export const createAuthor = async (req: Request, res: Response) => {
  try {
    const author = await Author.create(req.body);
    res.status(201).json(author);
  } catch (error) {
    res.status(500).json({ error: "Failed to create author" });
  }
};

export const getAuthors = async (_: Request, res: Response) => {
  const authors = await Author.findAll();
  res.status(200).json(authors);
};

export const getSingleAuthor = async (req: Request, res: Response) => {
  const { id } = req.params;
  const author = await Author.findByPk(Number(id), {
    include: [
      {
        model: Book,
        as: "books",
      },
    ],
  });
  if (!author) {
    return res.status(404).json({ error: "Author not found" });
  }
  res.status(200).json(author);
};
