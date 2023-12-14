import { useState, useEffect, memo } from "react";
import { Books } from ".";
import { useFetch } from "@/hooks";
import type { Book } from "types/book";
import styled from "styled-components";

const ErrorWrapper = styled.h1`
  font-size: 3rem;
  position: absolute;
`;
const LoadingWrapper = styled.h1`
  font-size: 3rem;
  position: absolute;
  left: 50%;
`;

export const Library = memo(() => {
  const [books, setBooks] = useState<Book[]>([]);
  const url = `http://localhost:1337/books`;
  const { apiData: fetchedBooks, loading, error } = useFetch(url);

  useEffect(() => {
    if (fetchedBooks) {
      setBooks(fetchedBooks);
    }
  }, [fetchedBooks]);

  if (loading) {
    return (
      <div>
        <LoadingWrapper>Loading..</LoadingWrapper>
      </div>
    );
  }

  if (error) {
    <div>
      <ErrorWrapper>Error: {error}</ErrorWrapper>;
    </div>;
  }

  return (
    <div>
      <Books books={books} />
    </div>
  );
});
