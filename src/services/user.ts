import { getRepository } from 'typeorm'
import { User } from '../models/User'
import { omit } from 'ramda'
import { hash } from './crypto'

interface userRequest {
  username:string
  password:string
  email:string
}
const createUser = async ({ email, password, username }: userRequest) => {
  const userRepository = getRepository(User)
  const user = new User()
  const hashedPassword = await hash(password)
  Object.assign(user, { email, password: hashedPassword, username })
  const savedUser = await userRepository.save(user)
  return omit(['password'], savedUser)
}

const getAll = async () => {
  const userRepository = getRepository(User)

  const users = await userRepository.find()
  return users.map(user => omit(['password'], user))
}
export {
  createUser,
  getAll
}
