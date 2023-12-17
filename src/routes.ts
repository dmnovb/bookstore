import { Express } from "express";
import {
  createBookHandler,
  deleteBookHandler,
  getBooksHandler,
  getSingleBookHandler,
} from "./controller/book.controller";
import {
  getAllUsersHandler,
  getSingleUserHandler,
  login,
  register,
} from "./controller/user.controller";
import { isAuthenticated } from "./middleware/isAuthenticated";
import { validate } from "./middleware/validateResource";
import { createBookSchema } from "./schema/book.schema";

const routes = (app: Express) => {
  //books
  app.post("/books", validate(createBookSchema), createBookHandler);
  app.get("/books", isAuthenticated, getBooksHandler);
  app.get("/books/:bookId", getSingleBookHandler);
  app.delete("/books/:bookId", deleteBookHandler);
  //users
  app.get("/users", isAuthenticated, getAllUsersHandler);
  app.get("/users/:id", getSingleUserHandler);
  app.post("/auth/register", register);
  app.post("/auth/login", login);
};

export default routes;
