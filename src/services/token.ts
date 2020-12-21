import jwt from 'jsonwebtoken'
import config from '../config/crypto'

const sign = (payload: object) => jwt.sign(payload,
  config.jwt.privateKey || '',
  { algorithm: 'RS256', expiresIn: '1h' }
)

const verify = (token: string) => jwt.verify(token, config.jwt.publicKey || '')

export {
  sign,
  verify
}
