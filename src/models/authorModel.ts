import mongoose, { Document, Schema } from 'mongoose';

interface IAuthor extends Document {
  name: string;
  description: string;
  dateOfBirth: Date;
  isAlive: boolean;
  dateOfDeath?: Date;
  city: string;
  country: string;
}

const authorSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    isAlive: {
      type: Boolean,
      required: true,
    },
    dateOfDeath: {
      type: Date,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

const Author = mongoose.model<IAuthor>('Author', authorSchema);
export default Author;
export { IAuthor };
