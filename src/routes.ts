import { Router } from 'express'
import Verify from './middlewares/Verify'
import { createUserController } from './useCases/CreateUser/index'
import { loginUserControler } from './useCases/LoginUser'

export const router = Router()

router.post('/create-user', (req, res) => {
  return createUserController.handle(req, res)
})

router.post('/login-user', (req, res) => {
  return loginUserControler.handle(req, res)
})
