import mongoose, { Document, Schema } from 'mongoose';

interface ICategory extends Document {
  category: string;
}

const categorySchema: Schema = new Schema(
  {
    category: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

const Category = mongoose.model<ICategory>('Category', categorySchema);
export default Category;
export { ICategory };
