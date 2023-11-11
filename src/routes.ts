import { Express } from "express";
import validateResource from "./middleware/validateResource";
import { createBookSchema } from "./schema/book.schema";
import {
  createBookHandler,
  getBooksHandler,
  getSingleBookHandler,
} from "./controller/book.controller";

const routes = (app: Express) => {
  app.post("/books", validateResource(createBookSchema), createBookHandler);
  app.get("/books", getBooksHandler);
  app.get("/books/:bookId", getSingleBookHandler);
};

export default routes;
