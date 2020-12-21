import 'dotenv'
import './config/database'
import 'express-async-errors'
import express from 'express'
import routes from './routes'
import { handle as errorHandle } from './middlewares/err'

const app = express()
app.use(express.json())
app.use(routes)
app.use(errorHandle)

const port = 3000

app.listen(port, () => {
  console.log(`Listening in ${port}`)
})
