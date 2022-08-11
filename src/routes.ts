import { Router } from 'express'
import { getAllInstitutionsController } from './useCases/GetAllInstitutions/index'
import { saveMessageController } from './useCases/SaveMessage/index'

export const router = Router()

router.get('/institutions', (req, res) => {
  return getAllInstitutionsController.handle(req, res)
})

router.post('/save-message', (req, res) => {
  return saveMessageController.handle(req, res)
})
