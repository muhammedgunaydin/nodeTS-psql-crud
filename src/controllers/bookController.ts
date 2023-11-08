import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const createBook = async (req: Request, res: Response) => {
  try {
    const { name, author, page, year } = req.body
    const book = await prisma.book.create({
      data: {
        name,
        author,
        page,
        year,
      },
    })
    res.json(book)
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message })
    } else {
      res.status(500).json({ error: 'Unknown error' })
    }
  }
}

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const book = await prisma.book.findMany()
    res.json(book)
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message })
    } else {
      res.status(500).json({ error: 'Unknown error' })
    }
  }
}

export const getBookId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const book = await prisma.book.findMany({
      where: {
        id: Number(id),
      },
    })
    res.json(book)
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message })
    } else {
      res.status(500).json({ error: 'Unknown error' })
    }
  }
}

export const updateBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { name, author, page, year } = req.body
    const book = await prisma.book.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        author,
        page,
        year,
      },
    })
    res.json(book)
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message })
    } else {
      res.status(500).json({ error: 'Unknown error' })
    }
  }
}

export const deleteBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    await prisma.book.delete({
      where: {
        id: Number(id),
      },
    })
    res.send('Book deleted successfully')
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message })
    } else {
      res.status(500).json({ error: 'Unknown error' })
    }
  }
}
