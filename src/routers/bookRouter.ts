import express from 'express'
import {
  createBook,
  deleteBook,
  getAllBooks,
  getBookId,
  updateBook,
} from '../controllers/bookController'

const router = express.Router()

router.get('/', getAllBooks)
router.get('/:id', getBookId)
router.post('/', createBook)
router.put('/:id', updateBook)
router.delete('/:id', deleteBook)

export default router
