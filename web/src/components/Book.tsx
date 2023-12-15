import moment from "moment";
import { truncate } from "lodash";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Book as BookType } from "types/book";

type BookProps = {
  book: BookType;
};

export const Book = ({ book }: BookProps) => {
  return (
    <div>
      <Card className="p-5 max-h-screen h-[250px] w-[360px] text-center">
        <CardHeader>
          <CardTitle>{truncate(book.name, { length: 100 })}</CardTitle>
          <CardDescription>
            {truncate(book.description, { length: 90 })}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Release Date: {moment(book.releaseDate).format("DD/MM/YYYY")}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="ghost">Pages: {book.pages}</Button>
          <Button variant="ghost">{book.author}</Button>
        </CardFooter>
      </Card>
    </div>
  );
};
