import { Request, Response } from 'express'
import { authenticate } from '../services/auth'

const auth = async (req:Request, res:Response) => {
  const { username, password } = req.body

  const token = await authenticate({ username, password })

  return res.json({ token })
}

export {
  auth
}
