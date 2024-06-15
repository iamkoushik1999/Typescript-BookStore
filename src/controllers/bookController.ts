import { Request, Response } from 'express';
import bookModel from '../models/bookModel';

// --------------------------------------------------------------

// POST
// Create Book
export const createBook = async (req: Request, res: Response) => {
  try {
    const book = new bookModel(req.body);
    const result = await book.save();
    res.status(201).json(result);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};

// GET
// Get All Books
export const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await bookModel
      .find()
      .populate('author', 'name')
      .populate('category');
    res.status(200).json(books);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};

// GET
// Get one Book
export const getBook = async (req: Request, res: Response) => {
  try {
    const book = await bookModel
      .findById(req.params.id)
      .populate('author')
      .populate('category');
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};

// PUT
// Update Book
export const updateBook = async (req: Request, res: Response) => {
  try {
    const book = await bookModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};

// Delete
// Delete Book
export const deleteBook = async (req: Request, res: Response) => {
  try {
    const book = await bookModel.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.status(204).json();
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};
