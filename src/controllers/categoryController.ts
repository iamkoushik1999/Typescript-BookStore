import { Request, Response } from 'express';
import categoryModel from '../models/categoryModel';

// --------------------------------------------------------------

// POST
// Create Category
export const createCategory = async (req: Request, res: Response) => {
  try {
    const category = new categoryModel(req.body);
    const result = await category.save();
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
// Get All Categories
export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await categoryModel.find();
    res.status(200).json(categories);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};

// GET
// Get one category
export const getCategory = async (req: Request, res: Response) => {
  try {
    const category = await categoryModel.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.status(200).json(category);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};

// PUT
// Update Category
export const updateCategory = async (req: Request, res: Response) => {
  try {
    const category = await categoryModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.status(200).json(category);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};

// Delete
// Delete Category
export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const category = await categoryModel.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
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
