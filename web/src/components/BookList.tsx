import { useFetch } from "@/hooks";
import { Book } from ".";
import { IBook } from "types/book";

export const BookList = () => {
  const url = "http://localhost:3000/books";

  const books = useFetch(url);

  return (
    <div className="grid grid-cols-1 p-3 lg:grid-cols-4">
      {books.map((book: IBook, key: number) => (
        <Book
          key={key}
          name={book.name}
          author={book.author}
          description={book.description}
          pages={book.pages}
          releaseDate={book.releaseDate}
        />
      ))}
    </div>
  );
};
