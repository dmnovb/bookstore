import type { Book as BookType } from "types/book";
import moment from "moment";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type BookProps = {
  book: BookType;
};

export const Book = ({ book }: BookProps) => {
  return (
    <div>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>{book.name}</CardTitle>
          <CardDescription>{book.description}</CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between">
          <Button variant="ghost">Pages: {book.pages}</Button>
          <Button variant="ghost">{book.author}</Button>
        </CardFooter>
      </Card>
    </div>
  );
};
