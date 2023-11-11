import { Express } from "express";
import validateResource from "./middleware/validateResource";
import { createBookSchema } from "./schema/book.schema";
import {
  createBookHandler,
  deleteBookHandler,
  getBooksHandler,
  getSingleBookHandler,
} from "./controller/book.controller";

const routes = (app: Express) => {
  app.post("/books", validateResource(createBookSchema), createBookHandler);
  app.get("/books", getBooksHandler);
  app.get("/books/:bookId", getSingleBookHandler);
  app.delete("/books/:bookId", deleteBookHandler);
};

export default routes;
