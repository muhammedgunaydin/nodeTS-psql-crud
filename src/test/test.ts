import 'mocha'
import { expect } from 'chai'
import request from 'supertest'
import app from '../app'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

describe('CRUD Test', () => {
  let book: any

  // WARNING: It clears DB before every test here for correct test results.
  before(async () => {
    try {
      console.log('Deleting existing books...')
      await prisma.book.deleteMany({})
      console.log('Books deleted successfully.')
    } catch (error) {
      console.error('Error deleting books:', error)
    }
  })

  it('should create a new book', (done) => {
    request(app)
      .post('/api/book')
      .send({ name: 'testBook1', author: 'Teste1r', page: 513, year: 1022 })
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        expect(res.status).to.equal(200)
        expect(res.body).to.have.property('name')
        expect(res.body).to.have.property('author')
        expect(res.body).to.have.property('page')
        expect(res.body).to.have.property('year')
        book = res.body
        done()
      })
  })

  it('should get all book', (done) => {
    request(app)
      .get('/api/book')
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        expect(res.status).to.equal(200)
        expect(res.body).to.be.an('array')
        done()
      })
  })

  it('should get one book', (done) => {
    prisma.book
      .findUnique({
        where: { id: book.id },
      })
      .then((foundBook) => {
        if (!foundBook) {
          done(new Error('Book not found'))
          return
        }
        request(app)
          .get(`/api/book/${foundBook.id}`)
          .end((err, res) => {
            if (err) {
              return done(err)
            }
            expect(res.status).to.equal(200)
            expect(res.body).to.be.an('array')
            done()
          })
      })
      .catch((error) => {
        console.error('Error finding book:', error)
        done(error)
      })
  })

  it('should update an book', (done) => {
    prisma.book
      .findUnique({
        where: { id: book.id },
      })
      .then((foundBook) => {
        if (!foundBook) {
          done(new Error('Book not found'))
          return
        }
        request(app)
          .put(`/api/book/${foundBook.id}`)
          .send({ name: 'New Book' })
          .end((err, res) => {
            if (err) {
              return done(err)
            }
            expect(res.status).to.equal(200)
            expect(res.body.name).to.equal('New Book')
            done()
          })
      })
      .catch((error) => {
        console.error('Error finding book:', error)
        done(error)
      })
  })
  it('should delete a book', (done) => {
    prisma.book
      .findUnique({
        where: { id: book.id },
      })
      .then((foundBook) => {
        if (!foundBook) {
          done(new Error('Book not found'))
          return
        }
        request(app)
          .delete(`/api/book/${foundBook.id}`)
          .end((err, res) => {
            if (err) {
              return done(err)
            }
            expect(res.status).to.equal(200)
            done()
          })
      })
  })
})
