import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(helmet())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World')
})

const port = 3000
app.listen(port, () => {
  console.log(`Server listening on port ${3000}`)
})
