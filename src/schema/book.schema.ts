import { number, object, string, TypeOf } from "zod";

export const createBookSchema = object({
  body: object({
    name: string({
      required_error: "Name is required.",
    }),
    author: string({
      required_error: "Author is requried.",
    }),
    description: string({
      required_error: "Description is required.",
    }),
    pages: number({
      required_error: "Pages are required.",
    }),
  }),
});

export type CreateBookInput = TypeOf<typeof createBookSchema>;
