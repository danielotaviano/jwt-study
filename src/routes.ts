import { Router } from 'express'
import { create as createUser, getAll as getUsers } from './controllers/user'
import { auth as authenticate } from './controllers/auth'
import { authenticate as authMiddleware } from './middlewares/auth'

const routes = Router()

routes.get('/users', authMiddleware, getUsers)
routes.post('/users', createUser)
routes.post('/auth', authenticate)

export default routes
