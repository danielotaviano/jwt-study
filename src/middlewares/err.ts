import { Request, Response, NextFunction } from 'express'

const handle = (err:object, req:Request, res:Response, next:NextFunction) => {
  res.send(err)
  // res.sendStatus(err.httpStatusCode).json(err)
}

export {
  handle
}
