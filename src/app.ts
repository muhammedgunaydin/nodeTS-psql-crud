import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
dotenv.config()

const app = express()
const prisma = new PrismaClient();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(helmet())
app.use(cors())

prisma.$connect()
  .then(() => {
    console.log('Db succesfully connected');
  })
  .catch((error) => {
    console.error('Db connection issue:', error);
  });


app.get('/', (req, res) => {
  res.send('Hello World')
})

const port = 3000
app.listen(port, () => {
  console.log(`Server listening on port ${3000}`)
})
