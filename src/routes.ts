import { Router } from 'express'
import { getAllInstitutionsController } from './useCases/GetAllInstitutions/index'
import { getOneInstitutionController } from './useCases/GetOneInstitution/index'
import { getInstitutionBankingInformationController } from './useCases/GetInstitutionBankingInformation/index'
import { getMessagesControler } from './useCases/GetMessages/index'
import { saveMessageController } from './useCases/SaveMessage/index'

export const router = Router()

router.get('/institutions', (req, res) => {
  return getAllInstitutionsController.handle(req, res)
})

router.get('/institution/:id', (req, res) => {
  return getOneInstitutionController.handle(req, res)
})

router.get('/institution-information/:id', (req, res) => {
  return getInstitutionBankingInformationController.handle(req, res)
})

router.get('/messages', (req, res) => {
  return getMessagesControler.handle(req, res)
})

router.post('/save-message', (req, res) => {
  return saveMessageController.handle(req, res)
})
