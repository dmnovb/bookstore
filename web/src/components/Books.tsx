import type { Book as BookType } from "types/book";
import { Book } from ".";

type BooksProps = {
  books: BookType[];
};

export const Books = ({ books }: BooksProps) => {
  return (
    <>
      {books?.map((book, key) => (
        <Book book={book} key={key} />
      ))}
    </>
  );
};
