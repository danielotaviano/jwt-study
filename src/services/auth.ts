import { getRepository } from 'typeorm'
import { User } from '../models/User'
import { compare } from './crypto'
import { sign } from './token'

interface userAuth {
  username:string
  password:string
}

// eslint-disable-next-line prefer-promise-reject-errors
const authFailed = (email: string) => ({
  status: 401,
  code: 'UNAUTHENTICATED',
  message: `Failed to authenticated user ${email}`
})

export const authenticate = async ({ username, password }:userAuth) => {
  const userRepository = getRepository(User)

  const user = await userRepository.findOne({ where: { username } })
  if (!user) {
    throw authFailed(username)
  }

  const match = await compare(password, user.password)
  if (!match) {
    throw authFailed(username)
  }

  return sign({ id: user.id })
}
