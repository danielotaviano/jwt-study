import { Request, Response } from 'express'
import { createUser, getAll as getUsers } from '../services/user'

const create = async (req:Request, res:Response) => {
  const { username, email, password } = req.body
  const user = await createUser({ username, password, email })
  return res.json(user)
}

const getAll = async (req:Request, res:Response) => {
  const users = await getUsers()
  return res.json(users)
}

export {
  create,
  getAll
}
