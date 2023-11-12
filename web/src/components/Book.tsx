import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { IBook } from "../../types/book";
import moment from "moment";

interface BookProps extends IBook {}
export const Book = ({
  name,
  author,
  description,
  pages,
  releaseDate,
}: BookProps) => {
  return (
    <>
      <Card className="m-3 text-center">
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>pages: {pages}</p>
          <p>{author}</p>
        </CardContent>
        <CardFooter>
          {releaseDate && moment(releaseDate).format("MMMM DD YYYY")}
        </CardFooter>
      </Card>
    </>
  );
};
