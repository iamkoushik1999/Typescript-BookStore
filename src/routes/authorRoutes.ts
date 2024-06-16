import { Router } from 'express';
import {
  createAuthor,
  getAuthors,
  getAuthor,
  updateAuthor,
  deleteAuthor,
} from '../controllers/authorController';

const router = Router();

// --------------------------------------------------------------

router.post('/authors', createAuthor);
router.get('/authors', getAuthors);
router.get('/authors/:id', getAuthor);
router.put('/authors/:id', updateAuthor);
router.delete('/authors/:id', deleteAuthor);

export default router;
