import { Request, Response } from 'express';
import authorModel from '../models/authorModel';

// --------------------------------------------------------------

// POST
// Create Author
export const createAuthor = async (req: Request, res: Response) => {
  try {
    const author = new authorModel(req.body);
    const result = await author.save();
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
// Get All Authors
export const getAuthors = async (req: Request, res: Response) => {
  try {
    const authors = await authorModel.find();
    res.status(200).json(authors);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};

// GET
// Get one Author
export const getAuthor = async (req: Request, res: Response) => {
  try {
    const author = await authorModel.findById(req.params.id);
    if (!author) {
      return res.status(404).json({ error: 'Author not found' });
    }
    res.status(200).json(author);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};

// PUT
// Update Author
export const updateAuthor = async (req: Request, res: Response) => {
  try {
    const author = await authorModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!author) {
      return res.status(404).json({ error: 'Author not found' });
    }
    res.status(200).json(author);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};

// Delete
// Delete Author
export const deleteAuthor = async (req: Request, res: Response) => {
  try {
    const author = await authorModel.findByIdAndDelete(req.params.id);
    if (!author) {
      return res.status(404).json({ error: 'Author not found' });
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
