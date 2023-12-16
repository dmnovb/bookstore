import { Request, Response } from "express";
import {
  createBook,
  deleteBook,
  getBooks,
  getSingleBook,
} from "../service/book.service";
import logger from "../utils/logger";
import { CreateBookInput } from "../schema/book.schema";

export const createBookHandler = async (
  req: Request<{}, {}, CreateBookInput["body"]>,
  res: Response
) => {
  try {
    const book = await createBook(req.body);
    return res.status(201).send(book);
  } catch (error: any) {
    logger.error(error);
    return res.status(409).send(error.message);
  }
};

export const getBooksHandler = async (req: Request, res: Response) => {
  try {
    const books = await getBooks();
    res.send(books);
  } catch (error: any) {
    return res.send(error.errors);
  }
};

export const getSingleBookHandler = async (req: Request, res: Response) => {
  try {
    const book = await getSingleBook(req.params.bookId);
    console.log(book);
    return res.status(200).send(book);
  } catch (error: any) {
    return res.status(404).json({ message: "Can't find book with this id." });
  }
};

export const deleteBookHandler = async (req: Request, res: Response) => {
  try {
    await deleteBook(req.params.bookId);
    return res.status(200).json({ message: "Deleted." });
  } catch (error: any) {
    return res.status(404).json({ message: "Can't find book with this id." });
  }
};
