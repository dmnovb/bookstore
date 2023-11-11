import mongoose from "mongoose";

export interface BookDocument extends mongoose.Document {
  name: string;
  author: string;
  description: string;
  pages: number;
  createdAt: Date;
  updatedAt: Date;
}

const bookSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    pages: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model<BookDocument>("Book", bookSchema);

export default Book;
