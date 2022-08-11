import { Router } from 'express'
import { createUserController } from './useCases/CreateUser/index'

export const router = Router()

router.post('/create-user', (req, res) => {
  return createUserController.handle(req, res)
})
