import mongoose, { Document, Schema } from 'mongoose';
import { IAuthor } from './authorModel';
import { ICategory } from './categoryModel';

interface IBook extends Document {
  name: string;
  author: IAuthor['_id'];
  category: ICategory['_id'];
  publishedAt: Date;
  price: number;
  stocks: number;
  description: string;
}

const bookSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'Author',
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    publishedAt: {
      type: Date,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    stocks: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

const Book = mongoose.model<IBook>('Book', bookSchema);
export default Book;
export { IBook };
