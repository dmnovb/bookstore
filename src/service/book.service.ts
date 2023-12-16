import Book from "../models/book.model";

export const createBook = async (input: any) => {
  try {
    return await Book.create(input);
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getBooks = () => {
  return Book.find();
};

export const getSingleBook = (book: any) => {
  return Book.findById(book);
};

export const deleteBook = (book: any) => {
  return Book.findByIdAndDelete(book);
};
