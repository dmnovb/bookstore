import type { Book as BookType } from "types/book";
import { Book } from ".";

type BooksProps = {
  books: BookType[];
};

export const Books = ({ books }: BooksProps) => {
  return (
    <div className="grid gap-5 sm:grid-cols-1 lg:grid-cols-3 place-items-center">
      {books?.map((book, key) => (
        <Book book={book} key={key} />
      ))}
    </div>
  );
};
