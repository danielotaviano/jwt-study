import bcrypt from 'bcrypt'
import config from '../config/crypto'

const hash = (value: string) => bcrypt.hash(value, config.hashSaltRound)

const compare = (value:string, hash:string) => bcrypt.compare(value, hash)

export {
  hash,
  compare
}
