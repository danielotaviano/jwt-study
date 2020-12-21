import { NextFunction, Request, Response } from 'express'
import { verify } from '../services/token'

const extractToken = (req:Request) => {
  const authorization = req.headers.authorization || ''
  return authorization.replace('Bearer ', '')
}

const authFailed = () => {
  return ({
    status: 401,
    message: 'Invalid authentication token',
    code: 'UNAUTHENTICATED'
  })
}

const authenticate = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const token = extractToken(req)
    const isValid = verify(token)
    next()
  } catch (error) {
    throw authFailed()
  }
}

export {
  authenticate
}
